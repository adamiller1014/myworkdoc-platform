'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import { ColDef } from "ag-grid-community";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export interface DataGridProps {

    columnDefs: ColDef[];
    data: any;

    onRowDoubleClicked?: (e: any) => void;

    onStateChange?: (state: GridState) => void;
}

export interface GridState {
    skip: number;
    take: number;
}


export function DataGrid(props: DataGridProps) {

    const gridState = useGetGridState();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    );



    return <>
        <AgGridReact
            rowData={props.data} columnDefs={props.columnDefs}
            rowSelection='single'
            pagination={true} paginationPageSize={gridState.take}
            pivotPanelShow={'always'}
            rowGroupPanelShow={'always'}
            onRowDoubleClicked={props.onRowDoubleClicked}

            onPaginationChanged={(e) => {
                console.log('onPaginationChanged', e)
                //router.push(pathname + '?' + createQueryString("dataState", JSON.stringify(event.dataState)))
            }}
        />
    </>
}


export function useGetGridState() {
    const searchParams = useSearchParams();
    let currentDataState: GridState = {
        skip: 0,
        take: 50,
    };
    if (searchParams && searchParams.get("dataState")) {
        currentDataState = JSON.parse(searchParams.get("dataState") as string);
    }

    return currentDataState;
}

