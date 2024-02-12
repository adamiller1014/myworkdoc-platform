'use client';


import { api } from "~/trpc/react";


import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

import { useEffect, useState } from "react";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { useRouter } from "next/navigation";
import Addemployee from "./add-employee";
import { useOrganization } from "@clerk/nextjs";

export default function EmployeesGrid() {

  const { isLoading, data } = api.employees.all.useQuery();
  const router = useRouter();
  const { organization } = useOrganization();

  const isProvider = organization?.publicMetadata?.org_type === 'provider';

  useEffect(() => {
    setColDefs([
      { field: "ein", headerName: "EIN", width: 100 },
      { field: "last_name", headerName: "Last name", width: 200 },
      { field: "first_name", headerName: "First name", width: 200 },
      { field: "departments.name", headerName: "Department", width: 200 },
      { field: "field_offices.name", headerName: "Field Office", width: 200 },


    ]);
  }, [isProvider]);

  const [colDefs, setColDefs] = useState<ColDef[]>();



  return (
    <div className="h-full w-full">

      <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 ">

        <h3 className="text-2xl font-semibold leading-6 text-gray-900">Employees</h3>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">

          <Addemployee />

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
            //router.push(`/employees/${e?.data?.id}`);
          }}
        />
      </div>
    </div>
  )
}
