import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";

import { GridStateSchema } from "../../../common-types";
import { CreateFormSchema } from "./form-types";

export const formsRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ ctx, input }) => {

            return ctx.db.forms.findMany(
                {
                    select: {
                        id: true,
                        name: true,
                        active: true,

                    },
                    ...input
                }
            );

        }),
    list: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.forms.findMany({
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
            return ctx.db.forms.count();
        }),

    casesCount: protectedProcedure
        .input(z.object({
            formId: z.number(),
        }))
        .query(async ({ input, ctx }) => {
            return ctx.db.cases.count(
                {
                    where: {
                        profile_id: input.formId
                    }
                }
            );
        }),
    get: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            return ctx.db.forms.findUnique(
                {
                    where: {
                        id: input
                    }
                }
            );
        }),
    create: protectedProcedure
        .input(CreateFormSchema)
        .mutation(async ({ input, ctx }) => {
            return ctx.db.forms.create({
                data: input
            });
        }),
});
