import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";

import { GridStateSchema } from "../../../common-types";
import { CreateFormSchema } from "./form-types";
import { FormInfo } from "../case-forms/caseForm";

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

            const result = await ctx.db.forms.findUnique(
                {
                    where: {
                        id: input
                    }
                }
            );

            if (!result) {
                return null;
            }

            let form_info: FormInfo | null = null;
            if (result.form_info) {
                // This is just to strongly type the form_info
                form_info = result.form_info as any as FormInfo;
            }

            return {
                ...result,
                form_info
            };
        }),
    create: protectedProcedure
        .input(CreateFormSchema)
        .mutation(async ({ input, ctx }) => {
            return ctx.db.forms.create({
                data: input
            });
        }),
});
