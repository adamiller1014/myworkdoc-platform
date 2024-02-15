import { z } from "zod";

export const CreateCaseFormSchema = z.object({
    name: z.string(),
    active: z.boolean(),

    case_form_type_id: z.number(),
});

export type CreateCaseFormInput = z.infer<typeof CreateCaseFormSchema>;