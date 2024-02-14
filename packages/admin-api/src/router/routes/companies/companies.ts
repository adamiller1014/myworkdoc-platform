import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";
import { CreateCompanySchema } from "./company-types";
import { GridStateSchema } from "../../../common-types";

export const companiesRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ ctx, input }) => {

            return ctx.db.companies.findMany(
                {
                    ...input
                }
            );

        }),
    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            return ctx.db.companies.count();
        }),
    formsCount: protectedProcedure
        .input(z.object({
            companyId: z.number(),
        }))
        .query(async ({ input, ctx }) => {
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
            companyId: z.number(),
        }))
        .query(async ({ input, ctx }) => {
            return ctx.db.profiles.count(
                {
                    where: {
                        company_id: input.companyId
                    }
                }
            );
        }),
    casesCount: protectedProcedure
        .input(z.object({
            companyId: z.number(),
        }))
        .query(async ({ input, ctx }) => {
            return ctx.db.cases.count(
                {
                    where: {
                        // profile: {
                        //     company_id: input.companyId
                        // }
                    }
                }
            );
        }),
    get: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            return ctx.db.companies.findUnique(
                {
                    where: {
                        id: input
                    }
                }
            );
        }),
    create: protectedProcedure
        .input(CreateCompanySchema)
        .mutation(async ({ input, ctx }) => {
            const data = await ctx.db.companies.findMany();
            let max_id = BigInt(0);
            for (let index = 0; index < data.length; index++) {
                const company = data[index];
                if (company?.id !== undefined && max_id < company?.id) max_id = company?.id;
            }
            const result = await ctx.db.companies.create({
                data: { ...input, id: BigInt(Number(max_id) + 1) }
            })

            return result;
        }),
});
