'use client';

import { type ColDef } from "ag-grid-community";
import { useRouter } from "next/navigation";
import AddCompany from "./add-company";
import { api } from '../../utils/react';
import { DataGrid, DateValueFormatter, useGridState } from '@myworkdoc/ui';

export default function CompaniesGrid() {

    const gridState = useGridState();
    const { data: count } = api.companies.count.useQuery(gridState);
    const { data } = api.companies.grid.useQuery(gridState);

    const router = useRouter();

    const colDefs: ColDef[] = [
        { field: "active", headerName: "Active", width: 100 },
        { field: "name", headerName: "Name", width: 300 },
        {
            field: "joined_on", headerName: "Joined On", type: ['dateColumn'], filter: 'agDateColumnFilter',
            valueFormatter: DateValueFormatter
        },
    ];

    return (
        <div className="h-full w-full">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-900">Companies</h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <AddCompany />
                </div>
            </div>
            <div className="ag-theme-alpine h-[calc(100vh-80px)]  p-5 " >
                <DataGrid
                    columnDefs={colDefs}
                    data={data}
                    rowCount={count}
                    onRowDoubleClicked={(e) => {
                        router.push(`/companies/${e.data.id}`);
                    }} />
            </div>
        </div>
    )
}
