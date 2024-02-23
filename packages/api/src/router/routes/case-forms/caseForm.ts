import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";

import { GridStateSchema } from "../../../common-types";
import { CreateCaseFormSchema } from "./case-form-types";

export const caseFormsRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ ctx, input }) => {

            return ctx.db.case_forms.findMany(
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
            return ctx.db.case_forms.findMany({
                where: {
                    active: true
                },
                include: {
                    case_form_type: true
                },
                orderBy: {
                    name: 'asc'
                }
            });
        }),
    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            return ctx.db.case_forms.count();
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

            const result = await ctx.db.case_forms.findUnique(
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
        .input(CreateCaseFormSchema)
        .mutation(async ({ input, ctx }) => {
            return ctx.db.case_forms.create({
                data: input
            });
        }),
});


export interface FormInfo {
    pages: FormPage[]
}

export interface FormPage {
    title: string;
    active: boolean;
    fields: FormField[]
}



export interface FormField {

    id: string;
    type: 'time' | 'date' | 'select' | 'checkbox' | 'header' | 'description' | 'input' | 'rich-input' | 'date-time' | 'file-uploader' | 'signature'

    title: string;
    shortTitle: string;
    hidden: boolean;
    required: boolean;
    description: string;
    settings: SelectInputSettings | TextBoxInputSettings | null;

    conditions: FormFieldCondition;
}

export interface FormFieldCondition {
    rules: FormFieldConditionRule[]
    condition: 'and' | 'or'

}

export interface FormFieldConditionRule {
    field: string;
    value: string;
    operator: '=' | '!=' | 'contains' | 'not-contains' | 'is-empty' | 'is-not-empty';
}

export interface SelectItem {
    id: string;
    label: string;
    lable: string;
    value: string;

}
export interface SelectInputSettings {
    items: SelectItem[];
    style: 'dropdown' | 'rating' | 'list'
    multiple: boolean;
}

export interface TextBoxInputSettings {

    type: 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';

    multiline: boolean;
}