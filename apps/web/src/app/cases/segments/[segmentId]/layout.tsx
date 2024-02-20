'use client'

import CaseSegments from "../../case-segments";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatDistance, subDays } from 'date-fns'
import Link from "next/link";
import { api } from "../../../../utils/react";
import { classNames } from "@/utils/classNames";
import {
    ListView,
} from "@progress/kendo-react-listview";
import { GridState, useGridState } from "@/components/grid/data-grid";
import { FolderIcon } from "@heroicons/react/24/outline";
import { Pager } from "@progress/kendo-react-data-tools";
import { useCallback } from "react";
import { Select } from "@radix-ui/themes";
import { SortDescriptor } from "@progress/kendo-data-query";

export default function Cases({ children, params }: { children: any, params: { segmentId: 'follow-ups' | 'all' | 'recently updated' } }) {

    const gridState = useGridState();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const segmentId = params.segmentId;
    let segmentTitle = "Open Cases";


    segmentTitle = `${segmentId.charAt(0).toUpperCase()}${segmentId.slice(1)} Cases`;
    function filterChange(value: string): void {

    }

    function sortChanged(value: string): void {
        const dataState: GridState = { ...gridState, sort: [{ field: "created_on", dir: value === "newest" ? "desc" : "asc" }] };

        router.push(pathname + '?' + createQueryString("gridState", JSON.stringify(dataState)))
    }

    return (<>
        <div className="w-64 flex-none bg-gray-100 flex flex-col space-y-4 ">
            <div className="flex flex-row justify-between items-center p-4">
                <h1 className="font-semibold text-2xl">Cases</h1>
                <svg className="flex-none w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            <div className="flex-auto overflow-y-auto p-4">
                <CaseSegments />
            </div>
        </div>

        <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
            <div className="flex flex-col w-1/5">
                <div className="flex-none bg-gray-100 shadow-sm border-b-2">
                    <div className="flex flex-row justify-between items-center p-4">
                        <h1 className="font-semibold text-xl text-blue-900">{segmentTitle}</h1>
                    </div>

                    <div className="flex justify-between mb-2">
                        <div className="ml-2">
                            <Select.Root defaultValue="open" onValueChange={filterChange}>
                                <Select.Trigger variant="ghost" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Label>Filter by</Select.Label>
                                        <Select.Item value="open">Open</Select.Item>
                                        <Select.Item value="closed">Closed</Select.Item>
                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        </div>
                        <div className="mr-2">
                            <Select.Root defaultValue="newest" onValueChange={sortChanged} >
                                <Select.Trigger variant="ghost" />
                                <Select.Content>
                                    <Select.Group>
                                        <Select.Label>Sort by</Select.Label>
                                        <Select.Item value="newest">Newest</Select.Item>
                                        <Select.Item value="oldest">Oldest</Select.Item>

                                    </Select.Group>
                                </Select.Content>
                            </Select.Root>
                        </div>
                    </div>

                </div>


                <CasesList status={segmentId} />

            </div>

            {children}
        </div>
    </>
    );
}

function CasesList({ status }: { status: 'follow-ups' | 'all' | 'recently updated' }) {
    const pathname = usePathname();
    const gridState = useGridState();
    const searchParams = useSearchParams();
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const defaultSort: SortDescriptor[] = [{ field: "created_on", dir: "desc" }];
    if (!gridState.sort) {
        gridState.sort = defaultSort;
    }

    const router = useRouter();
    const { data, isLoading } = api.cases.list.useQuery({ gridState, status: status });
    const { data: count } = api.cases.count.useQuery();


    const handlePageChange = (e: { skip: any; take: any; }) => {

        const dataState = { ...gridState, skip: e.skip, take: e.take }

        router.push(pathname + '?' + createQueryString("gridState", JSON.stringify(dataState)))
    };

    if (isLoading) return <></>;
    if (!data) return <></>;
    if (!count) return <></>;


    if (data.length == 0) {
        return <>
            <div className=' h-full items-center flex flex-row '>

                <div className='mt-2 flex flex-col text-sm font-semibold text-gray-400 text-center w-full items-center '>

                    <FolderIcon className="mx-auto h-12 w-12 text-gray-300" />
                    No Cases
                </div>

            </div>
        </>
    }


    return <>
        <div className="flex-auto  overflow-auto">
            <ListView
                className="h-full"
                data={data as any}
                item={(props) => <CaseItem {...props} />}

            />
        </div>
        <Pager
            skip={gridState.skip}
            take={gridState.take}
            total={count}
            type="numeric"
            buttonCount={2}
            onPageChange={handlePageChange}

        />
    </>

}

function CaseItem({ dataItem }: { dataItem: any }) {

    const pathname = usePathname();
    const params = useParams();

    const url = `/cases/segments/${params.segmentId}/${dataItem.id}/activity`;
    const isActive = pathname.indexOf(url) === 0;

    return <>
        <Link
            href={url}
            className="block border-b">
            <div className={classNames(isActive && "border-l-2 border-blue-500 bg-blue-100", "p-3 space-y-4")}>
                <div className="flex flex-row items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <strong className="flex-grow text-sm truncate">{dataItem.profile.first_name} {dataItem.profile.last_name}</strong>
                    {dataItem.created_on && <div className="text-sm text-gray-600">{formatDistance(subDays(dataItem.created_on, 3), new Date(), { addSuffix: true })}</div>}
                </div>

                <div className="flex flex-row items-center space-x-1">
                    <div className="flex-grow truncate text-xs">#{dataItem.case_number.toString()} </div>
                </div>
            </div>
        </Link>
    </>
}