import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";
import { GridStateSchema } from "../../../common-types";
import { CreateDepartmentSchema } from "./department-types";

export const departmentsRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ ctx, input }) => {

            return ctx.db.departments.findMany(
                {
                    ...input
                }
            );

        }),

    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            return ctx.db.departments.count();
        }),

    get: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            return ctx.db.departments.findUnique(
                {
                    where: {
                        id: input
                    }
                }
            );
        }),
    create: protectedProcedure
        .input(CreateDepartmentSchema)
        .mutation(async ({ input, ctx }) => {
            return ctx.db.departments.create({
                data: input

            });
        }),
});
