'use client';

import { CheckboxCell, DataGrid, DateCell, GridColumn, useGridState } from "@/components/grid/data-grid";
import { api } from "@/utils/react";
import { useRouter } from "next/navigation";


export default function CompaniesGrid({ params }: { params: { companyId: string } }) {

    const defaultSort = [{ field: "last_name", dir: 'asc' }];

    const gridState = useGridState({ defaultSort });

    const cId = parseInt(params.companyId);
    const { data, isLoading } = api.companies.forms.useQuery({ company_id: cId, gridState });
    const { data: count } = api.companies.formsCount.useQuery(cId);
    const router = useRouter();


    const colDefs: GridColumn[] = [
        { field: "active", title: "Active", width: 100, cell: CheckboxCell },
        { field: "last_name", title: "Last Name", width: 300 },
        { field: "first_name", title: "First Name", width: 300 },
        { field: "company.name", title: "Company Name" },
        { field: "company.active", title: "Company Active", cell: CheckboxCell },
        { field: "created_on", title: "Created On", cell: DateCell },
    ]

    return (
        <div className="h-full w-full">

            <div className="flex justify-between  h-17 p-4 bg-white border-b-2  border-gray-200 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-900">Forms</h3>
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
                        router.push(`/companies/${e.id}/forms`);
                    }} />
            </div>
        </div>
    )
}
