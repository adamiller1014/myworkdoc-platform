import { z } from "zod";

export const GridStateSchema = z.object({

    skip: z.number().default(0),
    take: z.number().default(50),

    sort: z.array(z.object({
        field: z.string(),
        dir: z.string().optional()
    })).optional()

}).transform(data => {

    // Convert orderBy to a format that Prisma understands
    let orderBy: any = undefined;
    if (data.sort) {

        orderBy = {};
        // handle nested fields
        data.sort.forEach(item => {
            const fields = item.field.split('.');
            let currentObj = orderBy;

            for (let i = 0; i < fields.length; i++) {
                const field = fields[i];
                if (!field) return;
                if (i === fields.length - 1) {
                    currentObj[field] = item.dir;
                } else {
                    currentObj[field] = currentObj[field] || {};
                    currentObj = currentObj[field];
                }
            }
        });
    }

    return {
        skip: data.skip,
        take: data.take,
        orderBy
    }

});

