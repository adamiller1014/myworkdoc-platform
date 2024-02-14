'use client';
import { useRouter } from "next/navigation";
import { DataGrid, GridColumn, useGridState } from "@myworkdoc/ui";
import { api } from "../../utils/react";

export default function TasksGrid() {

  const gridState = useGridState();
  const { data: count } = api.tasks.count.useQuery(gridState);
  const { data, isLoading } = api.tasks.grid.useQuery(gridState);
  const router = useRouter();

  const colDefs: GridColumn[] = [
    { field: "taskType.name", title: "Type" },
    {
      field: "dueDate", title: "Due On",

    },
    { field: "case.patient.firstName", title: "Employee First Name" },
    { field: "case.patient.lastName", title: "Employee Last Name" },
    {
      field: "createdAt", title: "Created On",

    },
    {
      field: "updatedAt", title: "Updated On",

    }

  ];



  return (
    <div className="px-4 sm:px-6 lg:px-8 p-10 h-full">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Tasks</h1>
          <p className="mt-2 text-sm text-gray-700">

          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="ag-theme-alpine h-[calc(100vh-180px)] mt-5" >
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
