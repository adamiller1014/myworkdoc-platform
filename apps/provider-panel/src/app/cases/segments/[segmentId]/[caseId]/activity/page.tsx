'use client'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import {
    PaperClipIcon,
} from '@heroicons/react/20/solid'

import { formatRelative, subDays } from 'date-fns'
import { PhoneArrowDownLeftIcon, PhoneXMarkIcon } from '@heroicons/react/24/outline'
import { api } from '../../../../../../utils/react'
import { FormResponseItem } from '@myworkdoc/provider-api/src/router/routes/cases/cases'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function CaseActivity({ params }: { params: { caseId: string } }) {

    const cId = parseInt(params.caseId);

    const { data: activity, isLoading } = api.cases.activity.useQuery(cId);


    if (isLoading || !activity) {
        return <></>
    }


    return (
        <>
            <div className='m-8 mt-5 overflow-auto'>
                <ul role="list" className="space-y-6">
                    {activity.map((activityItem, activityItemIdx) => (
                        <li key={activityItem.id} className="relative flex gap-x-4">
                            <div
                                className={classNames(
                                    activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                                    'absolute left-0 top-0 flex w-6 justify-center'
                                )}
                            >
                                <div className="w-px bg-gray-200" />
                            </div>
                            {activityItem.type === 'form' ? (
                                <>
                                    <img
                                        src={''}
                                        alt=""
                                        className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                                    />
                                    <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                        <div className="flex justify-between gap-x-4">
                                            <div className="py-0.5 text-xs leading-5 text-gray-500">
                                                <span className="font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: activityItem.title as string }}></span>
                                            </div>
                                            <time className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                                {formatRelative(subDays(activityItem.date, 3), new Date())}
                                            </time>
                                        </div>
                                        {activityItem.formResponse && <p className="text-sm leading-6 text-gray-500">
                                            <FormSummary formResponse={activityItem.formResponse} />
                                        </p>}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                        {activityItem.icon === 'completed' && <CheckCircleIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />}
                                        {activityItem.icon === 'open' && <PhoneArrowDownLeftIcon className="h-6 w-6 text-green-600" aria-hidden="true" />}
                                        {activityItem.icon === 'closed' && <PhoneXMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />}
                                        {!activityItem.icon && <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />}

                                    </div>
                                    <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500" dangerouslySetInnerHTML={{ __html: activityItem.title as string }}>
                                        {/* <span className="font-medium text-gray-900">{activityItem.person.name}</span> {activityItem.type} the */}

                                    </p>
                                    <time className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                        {formatRelative(subDays(activityItem.date, 3), new Date())}
                                    </time>
                                </>
                            )}
                        </li>
                    ))}
                </ul>

                {/* New comment form */}
                <div className="mt-6 flex gap-x-3">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    />
                    <form action="#" className="relative flex-auto">
                        <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                            <label htmlFor="comment" className="sr-only">
                                Add your comment
                            </label>
                            <textarea
                                rows={2}
                                name="comment"
                                id="comment"
                                className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Add your comment..."
                                defaultValue={''}
                            />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                            <div className="flex items-center space-x-5">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                    >
                                        <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                                        <span className="sr-only">Attach a file</span>
                                    </button>
                                </div>

                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


function FormSummary({ formResponse }: { formResponse: FormResponseItem[] }) {


    return <>
        <div className="flex flex-col ">

            {formResponse.map((item, index) => {
                return <div key={`form-${item.id}-field-${index}`} className="flex flex-col space-x-2 mb-3">
                    <div className="flex-none">
                        <strong className=' text-gray-400'>{item.title}</strong>
                    </div>
                    <div className="flex-auto" dangerouslySetInnerHTML={{ __html: item.value }}>

                    </div>
                </div>
            })}
        </div>
    </>
}