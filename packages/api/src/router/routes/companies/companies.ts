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
    cases: protectedProcedure
        .input(z.object({
            company_id: z.number(),
            gridState: GridStateSchema
        }))
        .query(async ({ input, ctx }) => {
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
                    where: {
                        profile: {
                            company_id: input.company_id
                        }
                    },
                    ...input.gridState,
                }
            );

        }),
    list: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.companies.findMany({
                where: {
                    active: true
                },
                orderBy: {
                    name: 'asc'
                }
            });
        }),
    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            return ctx.db.companies.count();
        }),
    formsCount: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return ctx.db.forms.count(
                {
                    where: {
                        company_id: input
                    }
                }
            );
        }),
    employeesCount: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return ctx.db.profiles.count(
                {
                    where: {
                        company_id: input
                    }
                }
            );
        }),
    casesCount: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return ctx.db.cases.count(
                {
                    where: {
                        profile: {
                            company_id: input
                        }
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
            return ctx.db.companies.create({
                data: input

            });
        }),
});
