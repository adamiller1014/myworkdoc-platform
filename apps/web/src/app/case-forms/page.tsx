'use client';

import { useRouter } from "next/navigation";
import Addprofile from "./add-case-form";
import { api } from '../../utils/react';
import { CheckboxCell, DataGrid, GridColumn, useGridState } from "@/components/grid/data-grid";


export default function CaseFormsGrid() {

    const gridState = useGridState();
    const { data: count } = api.caseForms.count.useQuery(gridState);
    const { data, isLoading } = api.caseForms.grid.useQuery(gridState);

    const router = useRouter();

    const colDefs: GridColumn[] = [
        { field: "active", title: "Active", width: 100, cell: CheckboxCell },
        { field: "name", title: "Name" }
    ];

    return (
        <div className="h-full w-full">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-900">Case Forms</h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Addprofile />
                </div>
            </div>
            <div className="h-[calc(100vh-70px)]  p-3 " >
                <DataGrid
                    columns={colDefs}
                    data={data}
                    total={count}
                    defaultSort={[{ field: "name", dir: 'asc' }]}
                    isLoading={isLoading}
                    onRowDoubleClicked={(e) => {
                        router.push(`/case-forms/${e.id}`);
                    }} />
            </div>
        </div>
    )
}
