import { publicProcedure, router } from "../../../trpc";

export const caseFormTypesRouter = router({

    list: publicProcedure
        .query(async ({ ctx }) => {

            return ctx.db.case_form_types.findMany({
                orderBy: {
                    name: 'asc'
                }
            });
        }
        ),
});