import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";


export const casesRouter = router({
    all: protectedProcedure
        .input(z.object({
            companyId: z.number().optional()
        }))
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
                    }
                }
            )

            return result;

        }),
    list: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {

            const where = input.companyId ? {

                profile: {
                    company_id: input.companyId
                }

            } : null

            const result = await ctx.db.cases.findMany(
                {
                    include: {
                        profile: true,
                        case_types: true
                    }
                },

            )

            return result;
        }),
    counts: protectedProcedure

        .query(async ({ input, ctx }) => {
            const casesCount = await ctx.db.cases.count(
            )

            return casesCount

        }),
});