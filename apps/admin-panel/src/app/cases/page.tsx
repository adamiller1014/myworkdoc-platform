'use client';
import { api } from "~/trpc/react";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import { type ValueFormatterParams, type ColDef } from "ag-grid-community";
import { useRouter } from "next/navigation";
import AddCase from "./add-case";
import { format } from 'date-fns';

export default function CasesGrid() {

    const { data } = api.cases.all.useQuery({});

    const router = useRouter();

    const colDefs: ColDef[] = [
        { field: "case_number", headerName: "Case Number", width: 100 },
        {
            field: "created_on", headerName: "Created On", type: ['dateColumn'], filter: 'agDateColumnFilter',
            valueFormatter: (v: ValueFormatterParams) => {
                if (!v.value) return '';
                return format(v.value, 'MM/dd/yyyy');
            }
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
                <AgGridReact
                    rowData={data} columnDefs={colDefs}
                    rowSelection='single'
                    pagination={true} paginationPageSize={25}
                    pivotPanelShow={'always'}
                    rowGroupPanelShow={'always'}
                    onRowDoubleClicked={(e) => {
                        router.push(`/cases/${e?.data?.id}/cases`);
                    }}
                />
            </div>
        </div>
    )
}
