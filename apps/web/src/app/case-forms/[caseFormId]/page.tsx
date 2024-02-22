'use client';

import { api } from "@/utils/react";
import { Box, Button, Flex, Tabs, TextField, Text, Checkbox, TextArea, Select } from "@radix-ui/themes";
import { Sortable, SortableItemUIProps, SortableOnDragOverEvent, SortableOnNavigateEvent } from "@progress/kendo-react-sortable";
import { useState } from "react";
import { Bars4Icon } from "@heroicons/react/20/solid";
import { FormField, SelectInputSettings } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { create } from 'zustand';
import { classNames } from "@/utils/classNames";




type EditFormStore = {
    selectedField: FormField | null;
    setSelectedField: (field: FormField) => void;
}

export const useEditFormStore = create<EditFormStore>((set) => ({
    selectedField: null,
    setSelectedField: (field) => set({ selectedField: field })
}));


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

                    <div className="flex justify-end">
                        <button className="text-blue-700 m-3 text-sm">Add Page</button>
                        <button className="text-blue-700 m-3 text-sm">Add Field</button>
                    </div>

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
                classNames("bg-gray-50 p-3 m-2 rounded-md shadow-sm border-2 border-gray-300",
                    selectedField?.id == dataItem.id && 'border-2 border-blue-800',
                    dataItem.conditions.rules.length > 0 && selectedField?.id !== dataItem.id && 'border-dashed border-yellow-400 bg-yellow-50',
                    dataItem.conditions.rules.length > 0 && selectedField?.id == dataItem.id && 'border-dashed border-blue-800 bg-yellow-50',
                )}
            onClick={onClick}>
            <div className="flex justify-between">
                <div className="flex flex-auto flex-col">

                    <div className="w-full font-semibold" >{dataItem.title} {dataItem.required && <span className="ml-1 text-red-700">*</span>}</div>
                    <div className="m-2">
                        <FormInput field={dataItem} />
                    </div>

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

function Settings() {
    const { selectedField } = useEditFormStore()

    switch (selectedField?.type) {
        case 'input':
            return <InputSettings />
        case 'select':
            return <SelectSettings />
        case 'date-time':
            return <DateTimeInputSettings />
        default:
            return null;
    }
}


function InputSettings() {
    return <>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                    Type
                </Text>
                <Select.Root defaultValue="text">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="color">Color</Select.Item>
                        <Select.Item value="date">Date</Select.Item>
                        <Select.Item value="datetime-local">Local Date Time</Select.Item>
                        <Select.Item value="email">Email</Select.Item>
                        <Select.Item value="month">Month</Select.Item>
                        <Select.Item value="number">Number</Select.Item>
                        <Select.Item value="password">Password</Select.Item>
                        <Select.Item value="tel">Telephone Number</Select.Item>
                        <Select.Item value="text">Text</Select.Item>
                        <Select.Item value="time">Time</Select.Item>
                        <Select.Item value="url">URL</Select.Item>
                        <Select.Item value="week">Week</Select.Item>

                    </Select.Content>
                </Select.Root>
            </label>


            <Text as="label" size="3">
                <Flex gap="2">
                    <Checkbox size="2" defaultChecked
                    // {...register('active')} 
                    /> Multiline
                </Flex>
            </Text>
        </Flex>
    </>
}

function SelectSettings() {
    return <>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                    Style
                </Text>
                <Select.Root defaultValue="dropdown">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="dropdown">Dropdown</Select.Item>
                        <Select.Item value="rating">Rating</Select.Item>
                        <Select.Item value="list">List</Select.Item>


                    </Select.Content>
                </Select.Root>
            </label>


            <Text as="label" size="3">
                <Flex gap="2">
                    <Checkbox size="2" defaultChecked
                    // {...register('active')} 
                    /> Multiple Choice
                </Flex>
            </Text>

            <div>
                Items here
            </div>
        </Flex>
    </>
}



function DateTimeInputSettings() {
    return <>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                    Mode
                </Text>
                <Select.Root defaultValue="date">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="date">Date</Select.Item>
                        <Select.Item value="date-time">Date Time</Select.Item>
                        <Select.Item value="time">Time</Select.Item>

                    </Select.Content>
                </Select.Root>
            </label>


            <Text as="label" size="3">
                <Flex gap="2">
                    <Checkbox size="2" defaultChecked
                    // {...register('active')} 
                    /> Multiline
                </Flex>
            </Text>
        </Flex>
    </>
}


function Conditions() {

    const { selectedField } = useEditFormStore()

    if (!selectedField) {
        return null;
    }
    return <>


        <Flex direction="column" gap="3">
            <label>

                <Select.Root defaultValue="and">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="and">And</Select.Item>
                        <Select.Item value="or">Or</Select.Item>

                    </Select.Content>
                </Select.Root>
            </label>


            <div>
                rulesets here
            </div>
        </Flex>
    </>
}




function SelectFormInput({ field }: { field: FormField }) {


    const settings = field.settings as SelectInputSettings;

    return <>
        <Select.Root defaultValue={settings?.items[0]?.value}>
            <Select.Trigger className="w-full" />
            <Select.Content>

                {settings?.items.map((item) => (
                    <Select.Item key={item.id} value={item.value}>{item.label}</Select.Item>
                ))}

            </Select.Content>
        </Select.Root>
    </>
}

function CheckboxFormInput({ field }: { field: FormField }) {
    return <>
        <Checkbox size="2" defaultChecked
        // {...register('active')} 
        />
    </>
}

function Header({ field }: { field: FormField }) {

    return <>
        <h1>{field.title}</h1>
    </>
}

function Description({ field }: { field: FormField }) {

    return <>
        <p>{field.description}</p>
    </>
}

function FormInput({ field }: { field: FormField }) {

    switch (field.type) {
        case 'select':
            return <SelectFormInput field={field} />
        case 'date-time':
            return <DateTimeInput field={field} />
        case 'date':
            return <DateInput field={field} />
        case 'checkbox':
            return <CheckboxFormInput field={field} />
        case 'header':
            return <Header field={field} />
        case 'description':
            return <Description field={field} />
        case 'rich-input':
            return <FormRichInput field={field} />
        case 'file-uploader':
            return <FileUploaderInput field={field} />
        case 'signature':
            return <SignatureInput field={field} />
    }



    return <>
        <TextField.Input
            size="2"


        // {...register('name', { required: 'Name is required' })}
        // className={`border ${formState.errors.name ? 'border-red-500' : 'border-gray-300'
        //     } p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
        />
    </>
}

function DateTimeInput({ field }: { field: FormField }) {
    return <>
    </>
}


function DateInput({ field }: { field: FormField }) {
    return <>
    </>
}

function FormRichInput({ field }: { field: FormField }) {
    return <>
    </>
}

function FileUploaderInput({ field }: { field: FormField }) {
    return <>
    </>
}


function SignatureInput({ field }: { field: FormField }) {
    return <>
    </>
}