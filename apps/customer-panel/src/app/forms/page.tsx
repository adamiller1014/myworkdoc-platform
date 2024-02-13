'use client';
import { api } from '../../utils/react';
import { DataGrid, GridColumn, useGridState } from '@myworkdoc/ui';
import { useRouter } from 'next/router';

export default function FormsGrid() {

  const router = useRouter();
  const gridState = useGridState();
  const { data: count } = api.forms.count.useQuery(gridState);
  const { data, isLoading } = api.forms.grid.useQuery(gridState);

  const colDefs: GridColumn[] = [
    { field: "name", title: "Title" },
    { field: "description", title: "Description" }
  ];



  return (
    <div className="h-full w-full">

      <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 ">

        <h3 className="text-2xl font-semibold leading-6 text-gray-900">Forms</h3>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">

          {/* <Addemployee /> */}

        </div>
      </div>
      <div className="ag-theme-alpine h-[calc(100vh-80px)]  p-5 " >
        <DataGrid
          columns={colDefs}
          data={data}
          total={count}
          isLoading={isLoading}
          onRowDoubleClicked={(e) => {
            router.push(`/forms/${e.id}`);
          }} />
      </div>
    </div>
  )
}
