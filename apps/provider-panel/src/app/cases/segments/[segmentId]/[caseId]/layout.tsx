'use client';


import CaseDetails from "./case-details";
import { ChatBubbleBottomCenterIcon, ClockIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { api } from "../../../../../utils/react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronDownIcon,
    DocumentDuplicateIcon,
    ArrowDownOnSquareIcon,
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/20/solid'


function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

export default function CaseLayout({ params, children }: { params: { segmentId: string, caseId: string }, children: any }) {

    const cId = parseInt(params.caseId);
    const { data: currentCase, isLoading } = api.cases.get.useQuery(cId);

    if (isLoading || !currentCase) {
        return null;
    }


    return <>

        <div className="w-3/5 border-l border-r border-gray-400 flex flex-col">
            <div className="flex-none h-20 flex flex-row justify-between items-center p-5 border-b bg-gray-100">
                <div className="flex flex-col space-y-1">
                    <strong>{currentCase.profile.first_name} {currentCase.profile.last_name}</strong>
                    <span className="text-sm text-gray-600 ">
                        <strong className="mr-2 text-blue-600">{currentCase.profile.companies?.name}</strong>
                        - {currentCase.case_types?.name}
                    </span>

                </div>
                <div className="flex flex-row items-center space-x-2">


                    <ActionButton />

                </div>
            </div>

            <Tabs caseId={cId} segmentId={params.segmentId} />

            {children}
        </div>

        <CaseDetails caseId={cId} segmentId={params.segmentId} />
    </>
}




function ActionButton() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Actions
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                    )}
                                >
                                    <PencilSquareIcon
                                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    New Case Note
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                    )}
                                >
                                    <DocumentDuplicateIcon
                                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    New Room
                                </a>
                            )}
                        </Menu.Item>
                    </div>

                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                    )}
                                >

                                    <ArrowDownOnSquareIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                    PDF Export
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-red-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                    )}
                                >
                                    <TrashIcon className="mr-3 h-5 w-5 text-red-400 group-hover:text-gray-500" aria-hidden="true" />
                                    Close Case
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
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
