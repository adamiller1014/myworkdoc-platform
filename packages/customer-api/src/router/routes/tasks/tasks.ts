import {protectedProcedure, router} from "../../../trpc";
import {GridStateSchema} from "../../../common-types";


export const tasksRouter = router({

    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ input, ctx }) => {
            return ctx.db.tasks.findMany(
                {
                    ...input,
                }
            );
        }),

    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            return ctx.db.tasks.count(
                {}
            );
        }),
});
