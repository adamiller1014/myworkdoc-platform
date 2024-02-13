'use client';


import { useRouter } from "next/navigation";
import AddCase from "./add-case";
import { useOrganization } from "@clerk/nextjs";
import { api } from "../../utils/react";
import { DataGrid, DateValueFormatter, useGridState } from "@myworkdoc/ui";

export default function CasesGrid() {
  const gridState = useGridState();
  const { data } = api.cases.grid.useQuery(gridState);
  const { data: count } = api.cases.count.useQuery(gridState);
  const router = useRouter();
  const { organization } = useOrganization();

  const isProvider = organization?.publicMetadata?.org_type === 'provider';



  const colDefs = [
    { field: "case_number", headerName: "Case Number", filter: 'agNumberColumnFilter', width: 150 },
    { field: "organization.name", headerName: "Organization", filter: 'agSetColumnFilter', hide: !isProvider },
    {
      field: "injuryDate", headerName: "Injury Date", type: ['dateColumn'], filter: 'agDateColumnFilter',
      valueFormatter: DateValueFormatter
    },
    { field: "profile.last_name", headerName: "Last Name", filter: 'agSetColumnFilter' },
    { field: "profile.first_name", headerName: "First Name", filter: 'agSetColumnFilter' },
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
