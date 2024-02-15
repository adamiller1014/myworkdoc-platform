import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";

export const fileUploadsRouter = router({
    caseFiles: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {


            return ctx.db.file_uploads.findMany(
                {
                    select: {
                        id: true,
                        file_key: true,
                        original_filename: true,
                    },
                    where: {
                        case_id: input
                    }

                }
            );

        })
});