'use client';

import CaseDetails from "./case-details";
import { ChatBubbleBottomCenterIcon, ClockIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { api } from "@/utils/react";
import { classNames } from "@/utils/classNames";
import CreateCaseNote from "./create-case-note";



export default function CaseLayout({ params, children }: { params: { segmentId: string, caseId: string }, children: any }) {

    const cId = parseInt(params.caseId);
    const { data: caseResult, isLoading } = api.cases.get.useQuery(cId);

    if (isLoading || !caseResult) {
        return null;
    }

    const { currentCase, initialAssessment } = caseResult;

    if (!currentCase || !initialAssessment) {
        return null;
    }

    return <>

        <div className="w-3/5 border-l border-r border-gray-400 flex flex-col">
            <div className="flex-none h-20 flex flex-row justify-between items-center p-5 border-b bg-gray-100">
                <div className="flex flex-col space-y-1">
                    <strong>{currentCase.profile.first_name} {currentCase.profile.last_name}</strong>
                    <span className="text-sm text-gray-600 ">
                        <strong className="mr-2 text-blue-600">{currentCase.profile.company?.name}</strong>


                        {initialAssessment.injury_type && <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            {initialAssessment.injury_type}
                        </span>}

                        {initialAssessment.pain_level && <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 ml-2">
                            {initialAssessment.pain_level}
                        </span>}

                        {initialAssessment.is_this_a_medical_emergency === 'Yes' && <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 ml-2">
                            MEDICAL EMERGENCY
                        </span>}

                        {initialAssessment.is_this_a_medical_emergency === 'No' && <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 ml-2">
                            Non-Emergency
                        </span>}

                        {initialAssessment.have_you_reported_this_injury_to_your_supervisor === 'Yes' && <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 ml-2">
                            Reported to Supervisor
                        </span>}

                        {initialAssessment.have_you_reported_this_injury_to_your_supervisor === 'No' && <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 ml-2">
                            Not Reported to Supervisor
                        </span>}



                    </span>

                </div>
                <div className="flex flex-row items-center space-x-2">
                    <CreateCaseNote />
                </div>
            </div>

            <Tabs caseId={cId} segmentId={params.segmentId} />

            {children}
        </div>

        <CaseDetails caseId={cId} segmentId={params.segmentId} />
    </>
}






function Tabs({ caseId, segmentId }: { caseId: number, segmentId: string }) {

    const pathname = usePathname();
    const tabs = [
        { name: 'Activity', href: `/cases/segments/${segmentId}/${caseId}/activity`, icon: ClockIcon },
        { name: 'Chats', href: `/cases/segments/${segmentId}/${caseId}/chats`, icon: ChatBubbleBottomCenterIcon },
        { name: 'Details', href: `/cases/segments/${segmentId}/${caseId}/details`, icon: ListBulletIcon },

    ]
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                // defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block pl-2">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => {


                            const isActive = tab.href.startsWith(pathname);

                            return <><Link
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    isActive
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                                )}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <tab.icon
                                    className={classNames(
                                        isActive ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                                        '-ml-0.5 mr-2 h-5 w-5'
                                    )}
                                    aria-hidden="true"
                                />
                                <span>{tab.name}</span>
                            </Link>
                            </>
                        }
                        )}
                    </nav>
                </div>
            </div>
        </div>
    )
}
