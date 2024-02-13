'use client';

import { useRouter } from "next/navigation";
import AddCase from "./add-case";

import { api } from '../../utils/react';
import { DataGrid, GridColumn, useGridState } from '@myworkdoc/ui';

export default function CasesGrid() {

  const gridState = useGridState();
  const { data, isLoading } = api.cases.grid.useQuery({ gridState });
  const { data: count } = api.cases.count.useQuery({ gridState });

  const router = useRouter();

  const colDefs: GridColumn[] = [
    { field: "case_number", title: "Case Number", width: 100 },
    {
      field: "created_on", title: "Created On",
    },
    { field: "profile.first_name", title: "First Name", width: 300 },

  ];

  return (
    <div className="h-full w-full">

      <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

        <h3 className="text-2xl font-semibold leading-6 text-gray-900">Cases</h3>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <AddCase />
        </div>
      </div>
      <div className="ag-theme-alpine h-[calc(100vh-80px)]  p-5 " >
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
