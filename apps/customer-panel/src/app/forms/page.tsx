'use client';

import moment from "moment";
import { api } from "~/trpc/react";

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

import { useState } from "react";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { useRouter } from "next/navigation";

export default function formsGrid() {

  const { isLoading, data } = api.forms.all.useQuery();
  const router = useRouter();

  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "name", headerName: "Title", filter: 'agSetColumnFilter' },
    { field: "description", headerName: "Description", filter: 'agSetColumnFilter' }
   
  ]);



  return (
    <div className="h-full w-full">

    <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 ">

      <h3 className="text-2xl font-semibold leading-6 text-gray-900">Forms</h3>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">

        {/* <Addemployee /> */}

      </div>
    </div>
    <div className="ag-theme-alpine h-[calc(100vh-80px)]  p-5 " >
      <AgGridReact
        rowData={data} columnDefs={colDefs as any}
        rowSelection='single'
        pagination={true} paginationPageSize={25}
        pivotPanelShow={'always'}
        rowGroupPanelShow={'always'}
        onRowDoubleClicked={(e) => {
          router.push(`/forms/${e?.data?.id}`);
        }}
      />
    </div>
  </div>
  )
}
