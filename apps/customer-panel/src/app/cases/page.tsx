'use client';

import moment from "moment";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

import { useEffect, useState } from "react";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { useRouter } from "next/navigation";
import AddCase from "./add-case";
import { useOrganization } from "@clerk/nextjs";
import { api } from "../../utils/react";

export default function CasesGrid() {

  const { isLoading, data } = api.cases.all.useQuery();
  const router = useRouter();
  const { organization } = useOrganization();

  const isProvider = organization?.publicMetadata?.org_type === 'provider';

  useEffect(() => {
    setColDefs([
      { field: "caseNumber", headerName: "Case Number", filter: 'agNumberColumnFilter', width: 150 },
      { field: "organization.name", headerName: "Organization", filter: 'agSetColumnFilter', hide: !isProvider },
      {
        field: "injuryDate", headerName: "Injury Date", type: ['dateColumn'], filter: 'agDateColumnFilter',
        valueFormatter: (v: ValueFormatterParams) => {

          return moment(v.value).format('MM/DD/YYYY');
        }

      },
      { field: "patient.lastName", headerName: "Last Name", filter: 'agSetColumnFilter' },
      { field: "patient.firstName", headerName: "First Name", filter: 'agSetColumnFilter' },
    ]);
  }, [isProvider]);

  const [colDefs, setColDefs] = useState<ColDef[]>();



  return (
    <div className=" p-5 h-full w-full">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Cases</h1>
          <p className="mt-2 text-sm text-gray-700">

          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <AddCase />
        </div>
      </div>
      <div className="ag-theme-alpine h-[calc(100vh-80px)] mt-5 " >
        <AgGridReact
          rowData={data} columnDefs={colDefs as any}
          rowSelection='single'
          pagination={true} paginationPageSize={25}
          pivotPanelShow={'always'}
          rowGroupPanelShow={'always'}
          onRowDoubleClicked={(e) => {
            router.push(`/cases/${e?.data?.id}`);
          }}
        />
      </div>
    </div>
  )
}
