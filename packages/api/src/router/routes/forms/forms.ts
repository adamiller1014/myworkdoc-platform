import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";


export const formsRouter = router({

    list: protectedProcedure
        .input(z.object({
            orgId: z.string().optional(),
            search: z.string().optional(),
        }))
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.forms.findMany(

            )


            return result;
        }),

});
