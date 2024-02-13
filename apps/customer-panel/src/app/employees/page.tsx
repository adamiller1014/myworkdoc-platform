'use client';

import { useRouter } from "next/navigation";
import Addemployee from "./add-employee";
import { api } from '../../utils/react';
import { DataGrid, GridColumn, useGridState } from "@myworkdoc/ui";

export default function EmployeesGrid() {

  const gridState = useGridState();

  const { data, isLoading } = api.employees.grid.useQuery(gridState);
  const { data: count } = api.employees.count.useQuery(gridState);
  const router = useRouter();

  const colDefs: GridColumn[] = [
    { field: "ein", title: "EIN", width: 100 },
    { field: "last_name", title: "Last name", width: 200 },
    { field: "first_name", title: "First name", width: 200 },
    { field: "departments.name", title: "Department", width: 200 },
    { field: "field_offices.name", title: "Field Office", width: 200 },
  ];

  return (
    <div className="h-full w-full">
      <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 ">
        <h3 className="text-2xl font-semibold leading-6 text-gray-900">Employees</h3>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <Addemployee />
        </div>
      </div>
      <div className="ag-theme-alpine h-[calc(100vh-70px)]  p-3" >
        <DataGrid
          columns={colDefs}
          data={data}
          total={count}
          isLoading={isLoading}
          onRowDoubleClicked={(e) => {
            router.push(`employees/${e.id}`);
          }} />
      </div>
    </div>
  )
}