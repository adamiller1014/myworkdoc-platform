import { z } from "zod";

export const CreateFormSchema = z.object({
    name: z.string(),
    active: z.boolean(),

    form_type_id: z.number(),
});

export type CreateFormInput = z.infer<typeof CreateFormSchema>;