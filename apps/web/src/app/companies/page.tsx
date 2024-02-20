'use client';

import { useRouter } from "next/navigation";
import AddCompany from "./add-company";
import { api } from '../../utils/react';
import { CheckboxCell, DataGrid, DateCell, GridColumn, useGridState } from "@/components/grid/data-grid";


export default function CompaniesGrid() {

    const gridState = useGridState();

    const { data: count } = api.companies.count.useQuery(gridState);
    const { data, isLoading } = api.companies.grid.useQuery(gridState);

    const router = useRouter();

    const colDefs: GridColumn[] = [
        { field: "active", title: "Active", width: 100, cell: CheckboxCell },
        { field: "name", title: "Name", width: 300 },
        { field: "joined_on", title: "Joined On", cell: DateCell },
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
                    columns={colDefs}
                    data={data}
                    total={count}
                    defaultSort={[{ field: "name", dir: 'asc' }]}
                    isLoading={isLoading}
                    onRowDoubleClicked={(e) => {
                        router.push(`/companies/${e.id}`);
                    }} />
            </div>
        </div>
    )
}
