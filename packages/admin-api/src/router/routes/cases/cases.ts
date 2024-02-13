import {z} from "zod";
import {protectedProcedure, router} from "../../../trpc";
import {GridStateSchema} from "../../../common-types";


export const casesRouter = router({
    grid: protectedProcedure
        .input(z.object({
            gridState: GridStateSchema,
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {

            let where = {};

            if (input.companyId) {
                where = {
                    profile: {
                        company_id: input.companyId
                    }
                }
            }

            return ctx.db.cases.findMany(
                {
                    select: {
                        id: true,
                        case_number: true,
                        created_on: true,
                        profile: {
                            select: {
                                first_name: true,
                                last_name: true,
                            }
                        }
                    },
                    where,
                    ...input.gridState,
                }
            );

        }),
    count: protectedProcedure
        .input(z.object({
            gridState: GridStateSchema,
            companyId: z.number().optional(),
        }))
        .query(async ({ ctx, input }) => {

            let where = {};

            if (input.companyId) {
                where = {
                    profile: {
                        company_id: input.companyId
                    }
                }
            }

            return ctx.db.cases.count({
                where
            });
        }),
});
