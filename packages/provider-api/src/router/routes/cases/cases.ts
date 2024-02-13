import {z} from "zod";
import {protectedProcedure, router} from "../../../trpc";


export const casesRouter = router({
    all: protectedProcedure
        .input(z.object({
            companyId: z.number().optional()
        }))
        .query(async ({ctx}) => {

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
                    }
                }
            );


        }),
    list: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({input, ctx}) => {

            const where = input.companyId ? {

                profile: {
                    company_id: input.companyId
                }

            } : null

            return ctx.db.cases.findMany(
                {
                    include: {
                        profile: true,
                        case_types: true
                    }
                },
            );
        }),
    counts: protectedProcedure

        .query(async ({input, ctx}) => {
            return ctx.db.cases.count();
        }),
});
