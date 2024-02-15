import { protectedProcedure, router } from "../../../trpc";

export const authRouter = router({

    user: protectedProcedure
        .query(async ({ input, ctx }) => {
            return { ...ctx.user, ...ctx.profile, panelType: ctx.panelType }
        }),

}); 
