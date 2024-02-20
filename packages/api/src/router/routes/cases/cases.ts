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
        }))
        .query(async ({ input, ctx }) => {

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
                    ...input.gridState,

                }
            );

        }),
    list: protectedProcedure
        .input(z.object({
            gridState: GridStateSchema,
            segment: z.enum(['follow-ups', 'all', 'recently updated']),
            closed: z.boolean().default(true)
        }))
        .query(async ({ input, ctx }) => {


            const where = WhereStatementBasedOnStatus(input.segment);

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
                    where: {
                        closed: input.closed,
                        ...where
                    },
                    ...input.gridState,

                }
            );

        }),
    count: protectedProcedure
        .input(z.object({
            companyId: z.number().optional(),
            closed: z.boolean().optional(),
            employeeId: z.number().optional(),
        }).optional())
        .query(async ({ ctx, input }) => {

            let where = {};

            if (input) {
                if (input.companyId) {
                    where = {
                        profile: {
                            company_id: input.companyId,
                            closed: input.closed
                        }
                    }
                }

                if (input.employeeId) {
                    where = {
                        profile_id: input.employeeId
                    }
                }
            }

            return ctx.db.cases.count({
                where
            });
        }),
    countByStatus: protectedProcedure
        .input(z.object({
            status: z.enum(['follow-ups', 'all', 'recently updated'])
        }))
        .query(async ({ ctx, input }) => {

            const where = WhereStatementBasedOnStatus(input.status);

            return ctx.db.cases.count({
                where: {
                    ...where,
                    closed: false
                }
            });


        }),
    get: protectedProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const currentCase = await ctx.db.cases.findUnique({
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
                            company: {
                                select: {
                                    name: true
                                }
                            },
                            job_title: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            });


            // Build Important fields from the initial assessment form

            // This is currently hard coded to the initial assessment form
            const formResponse = await ctx.db.case_form_responses.findFirst({
                where: {
                    case_id: input,
                    case_form_id: 8
                }
            });

            const initialAssessment: {
                [key: string]: string | undefined

                // Known fields
                // These are the fields that are known to be in the initial assessment form
                // This is just to help the typing more than anything
                injury_type?: string;
                body_part?: string;
                pain_level?: string;
                is_this_a_medical_emergency?: string;
                are_you_calling_report_a_work_related_injury?: string;
                have_you_reported_this_injury_to_your_supervisor?: string;
            } = {};

            if (formResponse) {

                const initialAssessmentFields = (formResponse.form_response as any) as FormResponseItem[];

                initialAssessmentFields.forEach(field => {
                    // Replace special characters and spaces with underscores
                    const fieldKey = field.title.toLowerCase().replace('?', '').replace('/', '').replace(/ /g, '_');
                    initialAssessment[fieldKey] = field.value;
                });
            }
            return {
                currentCase,
                initialAssessment
            }
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
                    room_type: true
                }
            });

            const forms = await ctx.db.case_form_responses.findMany({
                where: {
                    case_id: input
                },
                include: {
                    case_form: true
                }
            });

            const followups = await ctx.db.followups.findMany({
                where: {
                    case_id: input
                },
                include: {
                    followup_type: true
                }
            });


            const activity: ActivityItem[] = [];

            rooms.forEach(room => {
                if (room.created_on) {
                    activity.push({
                        id: room.id,
                        type: 'line',
                        title: `<strong>${room.room_type?.name}</strong> room created`,
                        //profile: { name: room.name },
                        date: room.created_on,
                        icon: 'open'

                    })
                }

                if (room.closed_on) {
                    activity.push({
                        id: room.id,
                        type: 'line',
                        title: `<strong>${room.room_type?.name}</strong> room closed`,
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
                        title: `<strong>${form.case_form?.name}</strong> form completed`,
                        //profile: { name: form.name },
                        date: form.created_on,
                        comment: "notes Here ",
                        formResponse: (form.form_response as any) as FormResponseItem[],
                    })
                }
            });

            followups.forEach(followup => {
                if (followup.start_date) {
                    activity.push({
                        id: followup.id,
                        type: 'follow-up',
                        title: `<strong>${followup.followup_type?.name}</strong> follow-up completed`,
                        //profile: { name: followup.name },
                        date: followup.start_date,
                        comment: followup.notes as string
                    })
                }
            });

            return activity.sort((a, b) => {
                return a.date < b.date ? -1 : 1
            });

        }),
    otherCases: protectedProcedure
        .input(z.number())
        .query(async ({ ctx, input }) => {

            const currentCase = await ctx.db.cases.findUnique({
                where: {
                    id: input
                },
                select: {
                    profile_id: true
                }
            });

            if (!currentCase) {
                return [];
            }


            return ctx.db.cases.findMany({
                where: {
                    profile_id: currentCase.profile_id,
                    id: {
                        not: input
                    }
                },
                select: {
                    id: true,
                    case_number: true,
                    created_on: true,
                }
            });
        }),
});


function WhereStatementBasedOnStatus(segment: 'follow-ups' | 'all' | 'recently updated') {
    let where = {};

    if (segment === 'follow-ups') {

        // Follow-ups in the next 24 hrs
        where = {
            followups: {
                some: {
                    start_date: {
                        gt: new Date(),
                        lt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
                    }
                }
            }
        };
    }

    if (segment === 'recently updated') {
        // Cases updated in the last 24 hrs
        where = {
            updated_on: {
                gt: new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
            }
        };
    }

    return where;


}