import { classNames } from "@/utils/classNames";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { FormField, FormInfo } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";

import { SortableOnDragOverEvent, SortableOnNavigateEvent, Sortable, SortableItemUIProps } from "@progress/kendo-react-sortable";
import { Button, Tabs, Box, Flex, TextField, TextArea, Checkbox, Text, DropdownMenu } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { FormFieldTypes, useEditFormStore } from "./edit-form-store";
import { Settings } from "../inputs/settings";
import { FormInput } from "../inputs/input/input.component";
import { Conditions } from "./input-conditions";
import { CaretDownIcon } from "@radix-ui/react-icons";

export function FormEditor({ formInfo, name }: { formInfo: FormInfo, name: string | null }) {

    const { setFormInfo, addPage, addField, setCurrentPageIndex } = useEditFormStore();

    useEffect(() => {
        if (formInfo) {
            setFormInfo(formInfo);
        }
    }, [formInfo, setFormInfo])

    return <>
        <div className="h-full w-full bg-gray-100">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-400">Edit: <span className="text-md font-thin text-gray-950">{name}</span></h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Button>Save</Button>
                </div>
            </div>


            <div className="flex h-full ">
                <div className="w-3/4 p-10 overflow-auto">

                    <div className="flex justify-end mb-3 gap-2">
                        <Button variant={'outline'} size={'1'} onClick={addPage}>Add Page</Button>

                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant={'outline'} size={'1'}>
                                    Add Field
                                    <CaretDownIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                {FormFieldTypes.map((type, idx) => (
                                    <DropdownMenu.Item key={'add_' + type.value} onClick={() => addField(type.value as any)}>{type.name}</DropdownMenu.Item>
                                ))}

                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </div>

                    <div className="flex justify-between bg-white shadow-sm rounded-md min-h-96">



                        <Tabs.Root defaultValue={formInfo?.pages[0]?.title} className="w-full" >
                            <Tabs.List>
                                {formInfo.pages.map((page, idx) => (
                                    <Tabs.Trigger key={idx} value={page.title} onClick={() => setCurrentPageIndex(idx)}>{page.title}</Tabs.Trigger>
                                ))}

                            </Tabs.List>

                            <Box px="4" pt="3" pb="2">
                                {formInfo?.pages.map((page, idx) => (
                                    <Tabs.Content key={idx} value={page.title} >
                                        <FormFields fields={page.fields} />
                                    </Tabs.Content>
                                ))}
                            </Box>
                        </Tabs.Root>

                    </div>


                </div>
                <div className="w-1/4 p-3 bg-gray-300">
                    <FieldSettings />
                </div>
            </div>
        </div>


    </>
}


function FormFields({ fields }: { fields: FormField[] }) {
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

interface SortableItemProps extends SortableItemUIProps {
    dataItem: FormField;
}



function SortableItem(props: SortableItemProps) {
    const { setSelectedField, selectedField } = useEditFormStore()
    const { isDisabled, isActive, style, attributes, forwardRef, dataItem } =
        props;

    const onClick = () => {
        setSelectedField(dataItem);
    }

    return <>
        <div ref={forwardRef} style={style} {...attributes}
            className={
                classNames("bg-gray-50 p-3 m-2 rounded-md shadow-sm",
                    dataItem.conditions.rules.length == 0 && selectedField?.id == dataItem.id && 'border-2 border-blue-800',
                    dataItem.conditions.rules.length > 0 && selectedField?.id !== dataItem.id && 'border-2 border-dashed border-yellow-400 bg-yellow-50',
                    dataItem.conditions.rules.length > 0 && selectedField?.id == dataItem.id && 'border-2  border-dashed border-blue-800 bg-yellow-50'
                )}
            onClick={onClick}>
            <div className="flex justify-between">
                <div className="flex flex-auto flex-col">

                    <FormInput {...dataItem} />


                </div>
                <div className="flex-none">
                    <Bars4Icon className="h-5 w-5 text-gray-400" />
                </div>

            </div>


        </div>
    </>
}

function FieldSettings() {

    const { selectedField } = useEditFormStore()

    if (!selectedField) {
        return null;
    }

    const showSettings = !['header', 'description', 'checkbox', 'rich-input', 'file-uploader', 'signature'].includes(selectedField.type);

    return <div>

        <Tabs.Root defaultValue="properties">
            <Tabs.List>
                <Tabs.Trigger value="properties">Properties</Tabs.Trigger>
                {showSettings && <Tabs.Trigger value="settings">Settings</Tabs.Trigger>}
                <Tabs.Trigger value="conditions">Conditions</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="properties">
                    <>
                        <Flex direction="column" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                                    Title
                                </Text>
                                <TextField.Input
                                    size="2"
                                    placeholder="Title"
                                    value={selectedField.title}
                                // {...register('name', { required: 'Name is required' })}
                                // className={`border ${formState.errors.name ? 'border-red-500' : 'border-gray-300'
                                //     } p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                                />
                            </label>

                            <label>
                                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                                    Short Title
                                </Text>
                                <TextField.Input
                                    size="2"
                                    placeholder="Short Title"
                                    value={selectedField.shortTitle}
                                // {...register('name', { required: 'Name is required' })}
                                // className={`border ${formState.errors.name ? 'border-red-500' : 'border-gray-300'
                                //     } p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                                />
                            </label>


                            <label>
                                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                                    Description
                                </Text>
                                <TextArea
                                    size="2"
                                    placeholder="Description"
                                    value={selectedField.description}
                                // {...register('name', { required: 'Name is required' })}
                                // className={`border ${formState.errors.name ? 'border-red-500' : 'border-gray-300'
                                //     } p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                                />
                            </label>

                            <Text as="label" size="3">
                                <Flex gap="2">
                                    <Checkbox size="2" defaultChecked
                                    // {...register('active')} 
                                    /> Required
                                </Flex>
                            </Text>
                        </Flex>


                    </>
                </Tabs.Content>

                <Tabs.Content value="settings">
                    <Settings />
                </Tabs.Content>

                <Tabs.Content value="conditions">
                    <Conditions />
                </Tabs.Content>
            </Box>
        </Tabs.Root>

    </div>

}
