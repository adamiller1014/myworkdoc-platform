import {z} from "zod";
import {protectedProcedure, router} from "../../../trpc";
import {CreateCompanySchema} from "./company-types";

export const companiesRouter = router({
    all: protectedProcedure
        .query(async ({ctx}) => {

            return ctx.db.companies.findMany();

        }),
    list: protectedProcedure
        .input(z.object({
            orgId: z.string().optional(),
            search: z.string().optional(),
        }))
        .query(async ({ctx}) => {
            return ctx.db.companies.findMany();
        }),

    formsCount: protectedProcedure
        .input(z.object({
            companyId: z.number(),
        }))
        .query(async ({input, ctx}) => {
            return ctx.db.forms.count(
                {
                    where: {
                        company_id: input.companyId
                    }
                }
            );
        }),
    employeesCount: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({input, ctx}) => {
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
        .query(async ({input, ctx}) => {
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
        .query(async ({input, ctx}) => {

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
        .mutation(async ({input, ctx}) => {
            // const result = await ctx.db.companies.create({
            //     data: input
            // })

            // return result;
            return {id: "1"};
        }),
});
