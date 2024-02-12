'use client';

import moment from "moment";
import { api } from "~/trpc/react";

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

import { useState } from "react";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { useRouter } from "next/navigation";
import AddOrganization from "./add-organization";

export default function OrganizationsGrid() {

    const { isLoading, data } = api.organizations.all.useQuery();
    const router = useRouter();

    const [colDefs, setColDefs] = useState<ColDef[]>([
        { field: "name", headerName: "Name", filter: 'agSetColumnFilter' },

        { field: "primaryContact", headerName: "Primary Contact", filter: 'agSetColumnFilter' },
        { field: "phoneNumber", headerName: "Phone Number", filter: 'agSetColumnFilter' },
        { field: "phoneNumber", headerName: "Address", filter: 'agSetColumnFilter' },
        { field: "status", headerName: "Status", filter: 'agSetColumnFilter' },
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
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Organizations</h1>
                    <p className="mt-2 text-sm text-gray-700">

                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <AddOrganization />
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
                        router.push(`/organizations/${e?.data?.id}`);
                    }}
                />
            </div>
        </div>
    )
}
