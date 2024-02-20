'use client';

import { DataGrid, DateCell, GridColumn, useGridState } from "@/components/grid/data-grid";
import { api } from "@/utils/react";
import { useRouter } from "next/navigation";


export default function CompaniesGrid({ params }: { params: { companyId: string } }) {

    const gridState = useGridState();

    const cId = parseInt(params.companyId);
    const { data, isLoading } = api.companies.cases.useQuery({ company_id: cId, gridState });
    const { data: count } = api.companies.casesCount.useQuery(cId);
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
            <div className="h-[calc(100vh-70px)]  p-3" >

                <DataGrid
                    columns={colDefs}
                    data={data}
                    total={count}
                    defaultSort={[{ field: "created_on", dir: 'desc' }]}
                    isLoading={isLoading}
                    onRowDoubleClicked={(e) => {
                        router.push(`/companies/${e.id}/cases`);
                    }} />
            </div>
        </div>
    )
}
