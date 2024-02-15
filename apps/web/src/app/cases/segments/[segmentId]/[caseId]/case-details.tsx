'use client'
import { api } from "@/utils/react";
import { AtSymbolIcon, BriefcaseIcon, BuildingOffice2Icon, CakeIcon, PaperClipIcon, DocumentCheckIcon, FolderIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline";
import { differenceInYears, format } from "date-fns";
import Link from "next/link";


export default function CaseDetails({ caseId, segmentId }: { caseId: number, segmentId: string }) {

    const { data: caseResult } = api.cases.get.useQuery(caseId);
    const { data: otherCases } = api.cases.otherCases.useQuery(caseId);
    const { data: fileUploads } = api.fileUploads.caseFiles.useQuery(caseId);



    if (!caseResult) {
        return null;
    }

    const currentCase = caseResult.currentCase;

    if (!currentCase) {
        return null;
    }

    return <>
        <div className="flex flex-1 flex-col  bg-white">

            <div className="bg-gray-100 p-4  border-b-2 border-t-2">
                <h1 className="text-blue-800 flex flex-row text-center"> <UserIcon className="w-5 h-5 mt-1 mr-2" /> Details</h1>
            </div>

            <div >
                <div className="space-y-3 pb-5 p-2 border-spacing-2 ">

                    <div className="mt-0 text-sm text-gray-800 flex flex-row items-center">
                        <FolderIcon className="w-5 h-5 mt-1 mr-2 text-gray-400" /> Case {parseInt(currentCase.case_number.toLocaleString())}
                    </div>

                    <div className="mt-0 text-sm text-gray-800 flex flex-row items-center">
                        <UserIcon className="w-5 h-5 mt-1 mr-2 text-gray-400" /> {currentCase?.profile.first_name} {currentCase?.profile.last_name}
                    </div>

                    <div className="mt-0 text-sm text-gray-800 flex flex-row items-center">
                        <BuildingOffice2Icon className="w-5 h-5 mt-1 mr-2 text-gray-400" /> {currentCase?.profile.companies?.name}
                    </div>
                    <div className="mt-0 text-sm text-gray-800 flex flex-row items-center">
                        <BriefcaseIcon className="w-5 h-5 mt-1 mr-2 text-gray-400" /> {currentCase?.profile.job_titles?.name}
                    </div>

                    <div className="mt-0 text-sm text-gray-800 flex flex-row items-center border-t-2 ">

                    </div>

                    {currentCase?.profile.birth_date &&
                        <>
                            <div className="mt-0 text-sm text-gray-800 flex flex-row items-center  ">
                                <CakeIcon className="w-5 h-5 mt-1 mr-2 text-gray-400" /> {format(currentCase?.profile.birth_date, 'MM/dd/yyyy')} <span className="text-xs ml-2">(age {differenceInYears(new Date(), currentCase?.profile.birth_date)})</span>
                            </div>
                        </>
                    }

                    <div className="mt-0 text-sm text-gray-800 flex flex-row items-center">
                        <PhoneIcon className="w-5 h-5 mt-1 mr-2 text-gray-400" /> {currentCase?.profile.cell_number}
                    </div>
                    <div className="mt-0 text-sm text-gray-800 flex flex-row items-center">
                        <AtSymbolIcon className="w-5 h-5 mt-1 mr-2 text-gray-400" /> {currentCase?.profile.email}
                    </div>

                </div>
            </div>

            <div className="bg-gray-100 p-4  border-b-2 border-t-2">
                <h1 className="text-blue-800 flex flex-row text-center"> <PaperClipIcon className="w-5 h-5 mt-1 mr-2" /> Attachments
                    <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                        aria-hidden="true"
                    >
                        {fileUploads?.length.toLocaleString()}
                    </span>
                </h1>
            </div>

            <div>

                {fileUploads?.map((item) => {
                    return <><div className="flex flex-row p-2 border-b-2">
                        <div className="flex-grow">
                            <div className="text-sm text-gray-800">{item.original_filename}</div>

                        </div>
                        <div className="flex-none">
                            <a href={''} target="_blank" className="text-blue-500">Download</a>
                        </div>
                    </div>
                    </>
                })}

                {!fileUploads?.length && <div className="p-12 text-gray-400">No attachments found</div>}

            </div>


            <div className="bg-gray-100 p-4  border-b-2 border-t-2">
                <h1 className="text-blue-800 flex flex-row text-center"> <DocumentCheckIcon className="w-5 h-5 mt-1 mr-2" /> Other Cases
                    <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                        aria-hidden="true"
                    >
                        {otherCases?.length.toLocaleString()}
                    </span>
                </h1>
            </div>

            <div>

                {otherCases?.map((item) => {
                    return <><div className="flex flex-row p-2 border-b-2">
                        <div className="flex-grow">
                            <div className="text-sm text-gray-800">Case #{item.case_number.toString()}</div>
                            {/* <div className="text-xs text-gray-600">{item.profile.companies?.name}</div> */}
                        </div>
                        <div className="flex-none">
                            <Link href={`/cases/segments/${segmentId}/${item.id}/activity`} className="text-blue-500">View</Link>
                        </div>
                    </div>
                    </>
                })}

                {!otherCases?.length && <div className="p-12 text-gray-400">No other cases found</div>}
            </div>

        </div>
    </>
}