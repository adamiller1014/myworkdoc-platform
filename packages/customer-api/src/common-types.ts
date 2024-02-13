import { z } from "zod";

export const GridStateSchema = z.object({

    skip: z.number().default(0),
    take: z.number().default(50),

    orderBy: z.any().optional(),
});