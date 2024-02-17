'use client';

import { useRouter } from "next/navigation";
import Addprofile from "./add-employee";
import { api } from '../../utils/react';
import { CheckboxCell, DataGrid, DateCell, GridColumn, useGridState } from "@/components/grid/data-grid";


export default function EmployeesGrid() {

    const gridState = useGridState();
    const { data: count } = api.employees.count.useQuery(gridState);
    const { data, isLoading } = api.employees.grid.useQuery(gridState);

    const router = useRouter();

    const colDefs: GridColumn[] = [
        { field: "active", title: "Active", width: 100, cell: CheckboxCell },
        { field: "last_name", title: "Last Name", width: 300 },
        { field: "first_name", title: "First Name", width: 300 },
        { field: "company.name", title: "Company Name" },
        { field: "company.active", title: "Company Active", cell: CheckboxCell },
        { field: "created_on", title: "Created On", cell: DateCell },

    ];

    return (
        <div className="h-full w-full">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-900">Employees</h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Addprofile />
                </div>
            </div>
            <div className="ag-theme-alpine h-[calc(100vh-80px)]  p-5 " >
                <DataGrid
                    columns={colDefs}
                    data={data}
                    total={count}
                    isLoading={isLoading}
                    onRowDoubleClicked={(e) => {
                        router.push(`/employees/${e.id}`);
                    }} />
            </div>
        </div>
    )
}
