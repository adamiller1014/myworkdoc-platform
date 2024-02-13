import {z} from "zod";
import {protectedProcedure, router} from "../../../trpc";


export const employeesRouter = router({

    list: protectedProcedure
        .input(z.object({
            orgId: z.string().optional(),
            search: z.string().optional(),
        }))
        .query(async ({ctx }) => {
            return ctx.db.profiles.findMany();
        }),

});
