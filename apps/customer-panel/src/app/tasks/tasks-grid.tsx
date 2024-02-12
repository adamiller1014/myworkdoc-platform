'use client';

import moment from "moment";
import { api } from "~/trpc/react";

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

import { useState } from "react";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { useRouter } from "next/navigation";

export default function TasksGrid() {

  const { isLoading, data } = api.tasks.all.useQuery();
  const router = useRouter();

  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "taskType.name", headerName: "Type", filter: 'agSetColumnFilter' },
    {
      field: "dueDate", headerName: "Due On", type: ['dateColumn'], filter: 'agDateColumnFilter',
      valueFormatter: (v: ValueFormatterParams) => {

        if (!v.value) return '';

        return moment(v.value).format('MM/DD/YYYY');
      }
    },
    { field: "case.patient.firstName", headerName: "Employee First Name", filter: 'agSetColumnFilter' },
    { field: "case.patient.lastName", headerName: "Employee Last Name", filter: 'agSetColumnFilter' },
    {
      field: "createdAt", headerName: "Created On", type: ['dateColumn'], filter: 'agDateColumnFilter',
      valueFormatter: (v: ValueFormatterParams) => {

        if (!v.value) return '';

        return moment(v.value).format('MM/DD/YYYY');
      }
    },
    {
      field: "updatedAt", headerName: "Updated On", type: ['dateColumn'], filter: 'agDateColumnFilter',
      valueFormatter: (v: ValueFormatterParams) => {

        if (!v.value) return '';

        return moment(v.value).format('MM/DD/YYYY');
      }
    }

  ]);



  return (
    <div className="px-4 sm:px-6 lg:px-8 p-10 h-full">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Tasks</h1>
          <p className="mt-2 text-sm text-gray-700">

          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="ag-theme-alpine h-[calc(100vh-180px)] mt-5" >
        <AgGridReact
          rowData={data} columnDefs={colDefs as any}
          rowSelection='single'
          pagination={true} paginationPageSize={25}
          pivotPanelShow={'always'}
          rowGroupPanelShow={'always'}
          onRowDoubleClicked={(e) => {
            router.push(`/tasks/${e?.data?.id}`);
          }}
        />
      </div>
    </div>
  )
}
