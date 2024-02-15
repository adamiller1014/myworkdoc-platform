import { z } from "zod";

export const CreateCompanySchema = z.object({
    name: z.string(),
    active: z.boolean(),
    address: z.string(),
});

export type CreateCompanyInput = z.infer<typeof CreateCompanySchema>;