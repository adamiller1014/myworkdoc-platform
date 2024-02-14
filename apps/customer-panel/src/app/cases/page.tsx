'use client';

import { useRouter } from "next/navigation";
import AddCase from "./add-case";
import { api } from "../../utils/react";
import { DataGrid, useGridState, GridColumn, DateCell } from "@myworkdoc/ui";

export default function CasesGrid() {
  const gridState = useGridState();
  const { data, isLoading } = api.cases.grid.useQuery(gridState);
  const { data: count } = api.cases.count.useQuery(gridState);
  const router = useRouter();


  const colDefs: GridColumn[] = [
    { field: "case_number", title: "Case Number", width: 150 },
    {
      field: "created_on", title: "Injury Date", cell: DateCell, width: 150
    },
    { field: "profile.last_name", title: "Last Name" },
    { field: "profile.first_name", title: "First Name" },
  ]



  return (
    <div className=" p-5 h-full w-full">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Cases</h1>
          <p className="mt-2 text-sm text-gray-700">

          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <AddCase />
        </div>
      </div>
      <div className="ag-theme-alpine h-[calc(100vh-80px)] mt-5 " >
        <DataGrid
          columns={colDefs}
          data={data}
          total={count}
          isLoading={isLoading}
          onRowDoubleClicked={(e) => {
            router.push(`/cases/${e.id}`);
          }} />
      </div>
    </div>
  )
}
