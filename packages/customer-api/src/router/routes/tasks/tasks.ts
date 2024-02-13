import { protectedProcedure, router } from "../../../trpc";
import { GridStateSchema } from "../../../common-types";


export const tasksRouter = router({

    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.tasks.findMany(
                {

                    ...input,
                }
            )


            return result;
        }),

    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            const result = await ctx.db.tasks.count(
                {

                }
            );
            return result;
        }),
});
