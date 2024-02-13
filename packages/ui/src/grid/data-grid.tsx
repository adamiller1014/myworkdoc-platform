'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { Grid, GridDataStateChangeEvent, type GridColumnProps, type GridProps, GridColumn } from "@progress/kendo-react-grid";

export type GridColumn = GridColumnProps

export interface DataGridProps {

    columns: GridColumn[];
    data: any;

    total?: number;

    isLoading?: boolean;
    onRowDoubleClicked?: (e: { id: number }) => void;
}

export interface GridState {
    skip: number;
    take: number;
    orderBy?: any;
}


export function DataGrid(gridProps: DataGridProps) {


    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        router.push(pathname + '?' + createQueryString("dataState", JSON.stringify(event.dataState)))
    };

    const props: GridProps = {
        style: { height: "100%" },
        sortable: true,
        groupable: false,
        resizable: true,
        reorderable: true,
        total: gridProps.total,
        pageable: {
            type: "input",
            pageSizeValue: 50
        },
        onDataStateChange: dataStateChange,

        onRowDoubleClick: (e) => {
            // if (!gridProps.editPath) {
            //     router.push(`${pathname}/${e.dataItem[gridProps.keyfield]}`);
            // } else {
            //     router.push(`${gridProps.editPath}/${e.dataItem[gridProps.keyfield]}`);
            // }

            if (gridProps.onRowDoubleClicked) {
                gridProps.onRowDoubleClicked(e.dataItem['id']);
            }
        },
        ...gridProps,
    };

    return <>
        {gridProps.isLoading && loadingPanel}
        <Grid
            {...props}
        >
            {gridProps.columns.map((c, i) => {
                return <GridColumn {...c} key={"col" + i} />;
            })}
        </Grid>
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


const loadingPanel = (
    <div className='k-loading-mask'>
        <span className='k-loading-text'>Loading</span>
        <div className='k-loading-image'></div>
        <div className='k-loading-color'></div>
    </div>
);