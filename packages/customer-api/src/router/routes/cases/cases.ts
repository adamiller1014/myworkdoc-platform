import {protectedProcedure, router} from "../../../trpc";
import {GridStateSchema} from "../../../common-types";


export const casesRouter = router({
    grid: protectedProcedure
        .input(GridStateSchema)
        .query(async ({input, ctx}) => {

            return ctx.db.cases.findMany(
                {
                    where: {
                        profile: {
                            company_id: ctx.profile.company_id
                        }
                    },
                    select: {
                        id: true,
                        case_number: true,
                        created_on: true,
                        profile: {
                            select: {
                                first_name: true,
                                last_name: true,
                            }
                        }
                    },
                    ...input,
                }
            );

        }),
    count: protectedProcedure
        .input(GridStateSchema.optional())
        .query(async ({ctx}) => {
            return ctx.db.cases.count(
                {
                    where: {
                        profile: {
                            company_id: ctx.profile.company_id
                        }
                    }
                }
            );
        }),
});
