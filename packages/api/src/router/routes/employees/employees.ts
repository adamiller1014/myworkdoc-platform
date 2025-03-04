import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";

import { GridStateSchema } from "../../../common-types";
import { CreateEmployeeSchema } from "./employee-types";

export const employeesRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ ctx, input }) => {

            return ctx.db.profiles.findMany(
                {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        email: true,
                        cell_number: true,
                        active: true,
                        created_on: true,
                        company: {
                            select: {
                                name: true,
                                active: true
                            }
                        }

                    },
                    ...input
                }
            );

        }),
    list: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.profiles.findMany({
                where: {
                    active: true
                },
                orderBy: {
                    last_name: 'asc'
                }
            });
        }),
    cases: protectedProcedure
        .input(z.object({
            employee_id: z.number(),
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
                        profile_id: input.employee_id
                    },
                    ...input.gridState,
                }
            );
        }),
    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            return ctx.db.profiles.count();
        }),

    casesCount: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return ctx.db.cases.count(
                {
                    where: {
                        profile_id: input
                    }
                }
            );
        }),
    get: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            return ctx.db.profiles.findUnique(
                {
                    where: {
                        id: input
                    }
                }
            );
        }),
    create: protectedProcedure
        .input(CreateEmployeeSchema)
        .mutation(async ({ input, ctx }) => {
            return ctx.db.profiles.create({
                data: input
            });
        }),
});
