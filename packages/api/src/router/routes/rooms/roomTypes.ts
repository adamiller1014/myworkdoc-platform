
import { protectedProcedure, router } from "../../../trpc";

export const roomTypesRouter = router({
    list: protectedProcedure
        .query(async ({ ctx }) => {

            return await ctx.db.room_types.findMany({
                select: {
                    id: true,
                    name: true
                },
                orderBy: {
                    id: 'asc'
                }
            })

        }),
});