'use client';
import { api } from "~/trpc/react";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import { type ValueFormatterParams, type ColDef } from "ag-grid-community";
import { useRouter } from "next/navigation";
import AddCompany from "./add-company";
import { format } from 'date-fns';

export default function CompaniesGrid() {

    const { data } = api.companies.all.useQuery();

    const router = useRouter();

    const colDefs: ColDef[] = [
        { field: "active", headerName: "Active", width: 100 },
        { field: "name", headerName: "Name", width: 300 },
        {
            field: "joined_on", headerName: "Joined On", type: ['dateColumn'], filter: 'agDateColumnFilter',
            valueFormatter: (v: ValueFormatterParams) => {
                if (!v.value) return '';
                return format(v.value, 'MM/dd/yyyy');
            }
        },
    ];



    return (
        <div className="h-full w-full">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-900">Companies</h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <AddCompany />
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
                        router.push(`/companies/${e?.data?.id}/cases`);
                    }}
                />
            </div>
        </div>
    )
}
