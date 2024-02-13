'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import { ColDef, GridApi } from "ag-grid-community";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";

export interface DataGridProps {

    columnDefs: ColDef[];
    data: any;

    rowCount: number;

    onRowDoubleClicked?: (e: any) => void;
}

export interface GridState {
    skip: number;
    take: number;
    orderBy?: any;
}


export function DataGrid(props: DataGridProps) {

    const gridState = useGridState();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const gridRef = useRef<AgGridReact<any>>(null);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    );

    function onGridChange(e: { api: GridApi; }) {

        const currentPage = e.api.paginationGetCurrentPage();
        const pageSize = e.api.paginationGetPageSize();
        const columnState = e.api.getColumnState();

        const orderBy = columnState
            .filter((c) => c.sort).map((c) => {
                return {
                    [c.colId]: c.sort
                }
            });

        const newGridState: GridState = {
            skip: currentPage * pageSize,
            take: pageSize,
            orderBy: orderBy
        }
        router.push(pathname + '?' + createQueryString("gridState", JSON.stringify(newGridState)))
    }

    useEffect(() => {
        if (gridRef.current) {
            gridRef.current?.api?.setRowCount(props.rowCount);
        }
    }, [props]);

    return <>
        <AgGridReact
            ref={gridRef}
            rowData={props.data} columnDefs={props.columnDefs}
            rowSelection='single'
            pagination={true}
            paginationPageSize={gridState.take}


            onRowDoubleClicked={props.onRowDoubleClicked}
            onPaginationChanged={onGridChange}
            onSortChanged={onGridChange}

        />
    </>
}


export function useGridState() {
    const searchParams = useSearchParams();
    let currentDataState: GridState = {
        skip: 0,
        take: 50,
    };
    if (searchParams && searchParams.get("gridState")) {
        currentDataState = JSON.parse(searchParams.get("gridState") as string);
    }

    return currentDataState;
}

