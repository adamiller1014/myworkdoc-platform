import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";



export const casesRouter = router({
    all: protectedProcedure
        .query(async ({ input, ctx }) => {

            // const where = input.companyId ? {

            //     profile: {
            //         company_id: input.companyId
            //     }

            // } : null

            const result = await ctx.db.cases.findMany()

            return result;



        }),
    list: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {

            // const where = input.companyId ? {

            //     profile: {
            //         company_id: input.companyId
            //     }

            // } : null

            const result = await ctx.db.cases.findMany(
                // {
                //     where
                // }
            )

            return result;
        }),
});