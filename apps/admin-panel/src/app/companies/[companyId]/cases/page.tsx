'use client';
import { api } from "~/trpc/react";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import { type ColDef, type ValueFormatterParams } from "ag-grid-community";
import { useRouter } from "next/navigation";
import { format } from 'date-fns';

export default function CompaniesGrid({ params }: { params: { companyId: string } }) {

    const cId = parseInt(params.companyId);
    const { data } = api.cases.all.useQuery({ companyId: cId });
    const router = useRouter();


    const colDefs: ColDef[] = [
        { field: "case_number", headerName: "Case Number", width: 100 },
        { field: "profile.first_name", headerName: "First Name", width: 300 },
        { field: "profile.last_name", headerName: "Last Name", width: 300 },
        {
            field: "created_on", headerName: "Created On", type: ['dateColumn'], filter: 'agDateColumnFilter',
            valueFormatter: (v: ValueFormatterParams) => {

                if (!v.value) return '';
                return format(v.value, 'MM/dd/yyyy');
            }
        },
    ]

    return (
        <div className="h-full w-full">

            <div className="flex justify-between  h-17 p-4 bg-white border-b-2  border-gray-200 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-900">Cases</h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    {/* <AddCompany /> */}
                </div>
            </div>
            <div className="ag-theme-alpine h-[calc(100vh-100px)]  p-5 " >
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
