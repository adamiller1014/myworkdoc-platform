import { z } from "zod";

export const CreateDepartmentSchema = z.object({
    name: z.string(),
    active: z.boolean(),
    code: z.string(),
});

export type CreateDepartmentInput = z.infer<typeof CreateDepartmentSchema>;