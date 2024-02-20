'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { Grid, GridDataStateChangeEvent, type GridColumnProps, type GridProps, GridColumn, GridCellProps } from "@progress/kendo-react-grid";
import { formatDate } from "@progress/kendo-intl";

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

    sort?: { field: string, dir: "asc" | "desc" }[];
}


export function DataGrid(gridProps: DataGridProps) {


    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const gridState = useGridState();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        console.log("DataStateChange", event.dataState)
        router.push(pathname + '?' + createQueryString("gridState", JSON.stringify(event.dataState)))
    };

    const props: GridProps = {
        style: { height: "100%", width: "100%" },
        sortable: true,
        groupable: false,
        resizable: true,
        reorderable: true,
        total: gridProps.total,
        pageable: {
            type: "input",
            pageSizeValue: 50,
        },
        onDataStateChange: dataStateChange,

        onRowDoubleClick: (e) => {
            if (gridProps.onRowDoubleClicked) {
                gridProps.onRowDoubleClicked({ id: e.dataItem.id });
            }
        },
        ...gridProps,

        skip: gridState.skip,
        take: gridState.take,
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



export function CheckboxCell(props: GridCellProps) {
    return <>
        <td>
            <input
                disabled={true}
                type='checkbox'
                checked={props.dataItem[props.field || ""]}
            />
        </td>
    </>
}

export function DateCell(props: GridCellProps) {

    let value: string | null = null;

    if (!props.field) {
        throw new Error("DateCell requires a field property");
    }

    if (props.dataItem[props.field]) {
        value = formatDate(props.dataItem[props.field], "MM/dd/yyyy");
    }

    return <>
        <td>
            {value}
        </td>
    </>
}
