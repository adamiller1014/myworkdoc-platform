import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";
import { CreateCompanySchema } from "./company-types";
import { GridStateSchema } from "../../../common-types";




export const companiesRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ ctx, input }) => {

            const result = await ctx.db.companies.findMany(
                {
                    ...input
                }
            )
            return result;

        }),
    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            const result = await ctx.db.companies.count();
            return result;
        }),
    formsCount: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.forms.count(
                {
                    where: {
                        company_id: input.companyId
                    }
                }
            );

            return result;
        }),
    employeesCount: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.profiles.count(
                {
                    where: {
                        company_id: input.companyId
                    }
                }
            )

            return result;
        }),
    casesCount: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.cases.count(
                {
                    where: {
                        // profile: {
                        //     company_id: input.companyId
                        // }
                    }
                }
            )

            return result;
        }),
    get: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            const result = await ctx.db.companies.findUnique(
                {
                    where: {
                        id: input
                    }
                }
            )


            return result;
        }),
    create: protectedProcedure
        .input(CreateCompanySchema)
        .mutation(async ({ input, ctx }) => {
            // const result = await ctx.db.companies.create({
            //     data: input
            // })

            // return result;
            return { id: "1" };
        }),
});
