import { protectedProcedure, router } from "../../../trpc";
import { GridStateSchema } from "../../../common-types";


export const formsRouter = router({

    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.forms.findMany(
                {
                    where: {
                        company_id: ctx.profile.company_id
                    },
                    ...input,
                }
            )


            return result;
        }),

    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            const result = await ctx.db.forms.count(
                {
                    where: {
                        company_id: ctx.profile.company_id
                    }
                }
            );
            return result;
        }),
});
