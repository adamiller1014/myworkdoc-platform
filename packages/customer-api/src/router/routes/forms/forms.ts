import {protectedProcedure, router} from "../../../trpc";
import {GridStateSchema} from "../../../common-types";


export const formsRouter = router({

    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({ input, ctx }) => {
            return ctx.db.forms.findMany(
                {
                    where: {
                        company_id: ctx.profile.company_id
                    },
                    ...input,
                }
            );
        }),

    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ ctx }) => {
            return ctx.db.forms.count(
                {
                    where: {
                        company_id: ctx.profile.company_id
                    }
                }
            );
        }),
});
