'use client';

import { api } from "@/utils/react";
import { Box, Button, Tabs, TextField } from "@radix-ui/themes";
import { Sortable, SortableItemUIProps, SortableOnDragOverEvent, SortableOnNavigateEvent } from "@progress/kendo-react-sortable";
import { useState } from "react";
import { Bars4Icon } from "@heroicons/react/20/solid";
import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";

export default function CaseForm({ params }: { params: { caseFormId: string } }) {

    const { data: caseForm, isLoading } = api.caseForms.get.useQuery(parseInt(params.caseFormId));

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>
        <div className="h-full w-full bg-gray-100">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-400">Edit: <span className="text-md font-thin text-gray-950">{caseForm?.name}</span></h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Button>Save</Button>
                </div>
            </div>


            <div className="flex h-full ">
                <div className="w-3/4 p-10 overflow-auto">


                    <div className="flex justify-between bg-white shadow-sm rounded-md min-h-96">



                        <Tabs.Root defaultValue={caseForm?.form_info?.pages[0]?.title} className="w-full">
                            <Tabs.List>
                                {caseForm?.form_info?.pages.map((page, idx) => (
                                    <Tabs.Trigger key={idx} value={page.title}>{page.title}</Tabs.Trigger>
                                ))}

                            </Tabs.List>

                            <Box px="4" pt="3" pb="2">
                                {caseForm?.form_info?.pages.map((page, idx) => (
                                    <Tabs.Content key={idx} value={page.title} >
                                        <FormFields fields={page.fields} />
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


    </>
}

function FormFields({ fields }: { fields: FormField[] }) {

    const SortableItem = (props: SortableItemUIProps) => {

        const { isDisabled, isActive, style, attributes, forwardRef } =
            props;

        const dataItem = props.dataItem as FormField;

        return <>
            <div ref={forwardRef} style={style} {...attributes} className="bg-gray-50 p-3 m-2 rounded-md shadow-sm">
                <div className="flex justify-between">
                    <div className="flex flex-auto flex-col">
                        <input type="text" className="w-full bg-gray-50 font-semibold" defaultValue={dataItem.title} />

                        <div className="m-2">
                            <TextField.Input className="text-gray-400" />
                        </div>

                    </div>
                    <div className="flex-none">
                        <Bars4Icon className="h-5 w-5 text-gray-400" />
                    </div>

                </div>


            </div>
        </>
    }

    const [fieldItems, setFieldItems] = useState<FormField[]>(fields);
    const onDragOver = (event: SortableOnDragOverEvent) => {
        setFieldItems(event.newState as FormField[]);
    };
    const onNavigate = (event: SortableOnNavigateEvent) => {
        setFieldItems(event.newState as FormField[]);
    };

    return <>
        <Sortable
            data={fieldItems}
            idField="id"
            itemUI={SortableItem}
            onDragOver={onDragOver}
            onNavigate={onNavigate}
        />
    </>
}
