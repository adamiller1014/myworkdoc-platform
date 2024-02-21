'use client';

import { api } from "@/utils/react";
import { Box, Button, Tabs } from "@radix-ui/themes";
import { Sortable } from "@progress/kendo-react-sortable";

export default function CaseForm({ params }: { params: { caseFormId: string } }) {

    const { data: caseForm, isLoading } = api.caseForms.get.useQuery(parseInt(params.caseFormId));


    const SortableItem = (props: any) => {

        const { isDisabled, isActive, style, attributes, dataItem, forwardRef } =
            props;

        return <>
            <div ref={forwardRef} style={style} {...attributes} className="bg-white p-3 m-2 rounded-md shadow-sm">
                {dataItem.title}
            </div>
        </>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>
        <div className="h-full w-full bg-gray-200">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-400">Edit: <span className="text-md font-thin text-gray-950">{caseForm?.name}</span></h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Button>Save</Button>
                </div>
            </div>
            <div className="ag-theme-alpine h-[calc(100vh-70px)] " >

                <div className="flex h-full">
                    <div className="w-3/4 p-10 ">


                        <div className="flex justify-between bg-white shadow-sm rounded-md min-h-96">



                            <Tabs.Root defaultValue={caseForm?.form_info?.pages[0]?.title}>
                                <Tabs.List>
                                    {caseForm?.form_info?.pages.map((page, idx) => (
                                        <Tabs.Trigger key={idx} value={page.title}>{page.title}</Tabs.Trigger>
                                    ))}

                                </Tabs.List>

                                <Box px="4" pt="3" pb="2">
                                    {caseForm?.form_info?.pages.map((page, idx) => (
                                        <Tabs.Content key={idx} value={page.title}>
                                            <div>

                                                <Sortable
                                                    data={page.fields}
                                                    idField="id"
                                                    itemUI={SortableItem}
                                                />


                                            </div>
                                        </Tabs.Content>
                                    ))}
                                </Box>
                            </Tabs.Root>

                        </div>


                    </div>
                    <div className="w-1/4 p-3 bg-gray-300">

                    </div>
                </div>




            </div>
        </div>

    </>
}


