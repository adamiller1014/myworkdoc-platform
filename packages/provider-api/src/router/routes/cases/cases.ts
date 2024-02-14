import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";
import { GridStateSchema } from "../../../common-types";

export interface ActivityItem {
    id: bigint
    type: 'form' | 'follow-up' | 'task' | 'line'
    profile?: { name: string; imageUrl?: string }
    date: Date
    title?: string
    comment?: string
    icon?: 'open' | 'closed' | 'completed' | 'incomplete'
    formResponse?: FormResponseItem[]
}

export interface FormResponseItem {
    id: string
    title: string
    value: string
    shortTitle: string
    description: string
}

export const casesRouter = router({
    grid: protectedProcedure
        .input(z.object({
            gridState: GridStateSchema,
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {

            let where = {};

            if (input.companyId) {
                where = {
                    profile: {
                        company_id: input.companyId
                    }
                }
            }

            return ctx.db.cases.findMany(
                {
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
                    where,
                    ...input.gridState,
                }
            );

        }),
    count: protectedProcedure
        .input(z.object({
            gridState: GridStateSchema,
            companyId: z.number().optional(),
        }))
        .query(async ({ ctx, input }) => {

            let where = {};

            if (input.companyId) {
                where = {
                    profile: {
                        company_id: input.companyId
                    }
                }
            }

            return ctx.db.cases.count({
                where
            });
        }),
    list: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
        }))
        .query(async ({ input, ctx }) => {

            const where = input.companyId ? {

                profile: {
                    company_id: input.companyId
                }

            } : null

            return ctx.db.cases.findMany(
                {
                    include: {
                        profile: true,
                        case_types: true
                    }
                },
            );
        }),
    get: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            return ctx.db.cases.findUnique({
                where: {
                    id: input
                },
                select: {
                    id: true,
                    case_number: true,
                    case_types: {
                        select: {
                            name: true
                        }
                    },

                    profile: {
                        select: {
                            first_name: true,
                            last_name: true,
                            birth_date: true,
                            cell_number: true,
                            email: true,
                            companies: {
                                select: {
                                    name: true
                                }
                            },
                            job_titles: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            });
        }),
    counts: protectedProcedure
        .query(async ({ input, ctx }) => {
            return ctx.db.cases.count();
        }),
    activity: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {

            const rooms = await ctx.db.rooms.findMany({
                where: {
                    case_id: input
                },
                include: {
                    room_types: true
                }
            });

            const forms = await ctx.db.case_form_responses.findMany({
                where: {
                    case_id: input
                },
                include: {
                    case_forms: true
                }
            });



            const activity: ActivityItem[] = [];

            rooms.forEach(room => {
                if (room.created_on) {
                    activity.push({
                        id: room.id,
                        type: 'line',
                        title: `<strong>${room.room_types?.name}</strong> room created`,
                        //profile: { name: room.name },
                        date: room.created_on,
                        icon: 'open'

                    })
                }

                if (room.closed_on) {
                    activity.push({
                        id: room.id,
                        type: 'line',
                        title: `<strong>${room.room_types?.name}</strong> room closed`,
                        //profile: { name: room.name },
                        date: room.closed_on,
                        icon: 'closed'
                    })
                }
            });

            forms.forEach(form => {
                if (form.created_on) {
                    activity.push({
                        id: form.id,
                        type: 'form',
                        title: `<strong>${form.case_forms?.name}</strong> form completed`,
                        //profile: { name: form.name },
                        date: form.created_on,
                        comment: "notes Here ",
                        formResponse: (form.form_response as any) as FormResponseItem[],
                    })
                }
            });

            return activity.sort((a, b) => {
                return a.date < b.date ? -1 : 1
            });

        }),
});
