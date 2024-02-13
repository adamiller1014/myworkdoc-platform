'use client';

import { useRouter } from "next/navigation";
import AddCase from "./add-case";

import { api } from '../../utils/react';
import { DataGrid, DateValueFormatter, useGridState } from '@myworkdoc/ui';
import { ColDef } from "ag-grid-community";

export default function CasesGrid() {

  const gridState = useGridState();
  const { data } = api.cases.grid.useQuery(gridState);
  const { data: count } = api.cases.count.useQuery(gridState);

  const router = useRouter();

  const colDefs: ColDef[] = [
    { field: "case_number", headerName: "Case Number", width: 100 },
    {
      field: "created_on", headerName: "Created On", type: ['dateColumn'], filter: 'agDateColumnFilter',
      valueFormatter: DateValueFormatter
    },
    { field: "profile.first_name", headerName: "First Name", width: 300 },

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
          columnDefs={colDefs}
          data={data}
          rowCount={count}
          onRowDoubleClicked={(e) => {
            router.push(`/cases/${e.data.id}`);
          }} />
      </div>
    </div>
  )
}
