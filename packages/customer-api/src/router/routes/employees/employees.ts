import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";

export const employeesRouter = router({

    list: protectedProcedure
        .input(z.object({
            orgId: z.string().optional(),
            search: z.string().optional(),
        }))
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.profiles.findMany(
                {
                    where: {
                        company_id: ctx.profile.company_id
                    },
                }
            )


            return result;
        }),

});
