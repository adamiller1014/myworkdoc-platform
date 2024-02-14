import { z } from "zod";

export const CreateCompanySchema = z.object({
    name: z.string(),
    address: z.string(),
    active: z.boolean(),
});

export type CreateCompanyInput = z.infer<typeof CreateCompanySchema>;