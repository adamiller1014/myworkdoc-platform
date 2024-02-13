import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";
import { GridStateSchema } from "../../../common-types";


export const casesRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ input, ctx }) => {


            const result = await ctx.db.cases.findMany(
                {
                    where: {
                        profile: {
                            company_id: ctx.profile.company_id
                        }
                    },
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
                    ...input,
                }
            )

            return result;

        }),
    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            const result = await ctx.db.cases.count(
                {
                    where: {
                        profile: {
                            company_id: ctx.profile.company_id
                        }
                    }
                }
            );
            return result;
        }),
});