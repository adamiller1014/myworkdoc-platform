'use client';

import { useRouter } from "next/navigation";

import { api } from '../../../../utils/react';
import { DataGrid, DateCell, GridColumn, useGridState } from '@myworkdoc/ui';

export default function CompaniesGrid({ params }: { params: { companyId: string } }) {

    const gridState = useGridState();
    const cId = parseInt(params.companyId);
    const { data, isLoading } = api.cases.grid.useQuery({ companyId: cId, gridState });
    const { data: count } = api.cases.count.useQuery({ companyId: cId });
    const router = useRouter();


    const colDefs: GridColumn[] = [
        { field: "case_number", title: "Case Number", width: 100 },
        { field: "profile.first_name", title: "First Name", width: 300 },
        { field: "profile.last_name", title: "Last Name", width: 300 },
        { field: "created_on", title: "Created On", cell: DateCell },
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

                <DataGrid
                    columns={colDefs}
                    data={data}
                    total={count}
                    isLoading={isLoading}
                    onRowDoubleClicked={(e) => {
                        router.push(`/companies/${e.id}/cases`);
                    }} />
            </div>
        </div>
    )
}
