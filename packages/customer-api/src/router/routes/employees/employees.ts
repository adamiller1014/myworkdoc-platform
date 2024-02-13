import { GridStateSchema } from "../../../common-types";
import { protectedProcedure, router } from "../../../trpc";

export const employeesRouter = router({

    grid: protectedProcedure

        .input(GridStateSchema)
        .query(async ({ input, ctx }) => {
            const result = await ctx.db.profiles.findMany(
                {
                    where: {
                        company_id: ctx.profile.company_id
                    },
                    select: {
                        id: true,
                        ein: true,
                        first_name: true,
                        last_name: true,
                        email: true,
                        cell_number: true,
                        created_on: true,
                        departments: {
                            select: {
                                name: true
                            }
                        },
                        field_offices: {
                            select: {
                                name: true
                            }
                        },

                    },
                    ...input
                }
            );


            return result;
        }),

});
