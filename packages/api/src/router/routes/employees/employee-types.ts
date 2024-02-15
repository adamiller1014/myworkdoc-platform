import { z } from "zod";

export const CreateEmployeeSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    company_id: z.number(),
    ein: z.string(),
    profile_type_id: z.number(),
    email: z.string().email(),
    cell_number: z.string(),

    home_address: z.string().optional(),
    active: z.boolean(),

});

export type CreateEmployeeInput = z.infer<typeof CreateEmployeeSchema>;