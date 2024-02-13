'use client';

import { useRouter } from "next/navigation";
import Addemployee from "./add-employee";
import { api } from '../../utils/react';
import { ColDef } from "ag-grid-community";
import { DataGrid, useGridState } from "@myworkdoc/ui";

export default function EmployeesGrid() {

  const gridState = useGridState();

  const { data } = api.employees.grid.useQuery(gridState);
  const { data: count } = api.employees.count.useQuery(gridState);
  const router = useRouter();

  const colDefs: ColDef[] = [
    { field: "ein", headerName: "EIN", width: 100 },
    { field: "last_name", headerName: "Last name", width: 200, sort: "asc" },
    { field: "first_name", headerName: "First name", width: 200 },
    { field: "departments.name", headerName: "Department", width: 200 },
    { field: "field_offices.name", headerName: "Field Office", width: 200 },
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
          columnDefs={colDefs}
          data={data}
          rowCount={count}
          onRowDoubleClicked={(e) => {
            router.push(`employees/${e.data.id}`);
          }} />
      </div>
    </div>
  )
}