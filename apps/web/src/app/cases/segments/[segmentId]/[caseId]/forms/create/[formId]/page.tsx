'use client';

import { FormInput } from "@/components/forms/inputs/input/input.component";
import { api } from "@/utils/react";
import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { Box, Button, Tabs } from "@radix-ui/themes";
import { Form } from "react-hook-form";


export default function CreateFormPage({ params }: { params: { segmentId: string, caseId: string, formId: string } }) {

    const { data: form, isLoading } = api.caseForms.get.useQuery(parseInt(params.formId));


    if (isLoading) {
        return <></>
    }

    const formInfo = form?.form_info;

    return <>
        <div className="h-full w-full bg-gray-100 overflow-auto">

            <div className="flex justify-between  h-17 p-4 bg-gray-50 border-b-2 border-gray-300 ">

                <h3 className="text-2xl font-semibold leading-6 text-gray-400"><span className="text-md font-thin text-gray-950">{form?.name}</span></h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <Button>Submit</Button>
                </div>
            </div>


            <div className="flex h-full ">
                <div className="w-full p-5 overflow-auto">


                    <div className="flex justify-between bg-white shadow-sm rounded-md min-h-96">
                        <Tabs.Root defaultValue={formInfo?.pages[0]?.title} className="w-full" >
                            <Tabs.List>
                                {formInfo?.pages.map((page, idx) => (
                                    <Tabs.Trigger key={idx} value={page.title} >{page.title}</Tabs.Trigger>
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
            </div>
        </div>
    </>
}


function FormFields({ fields }: { fields: FormField[] }) {


    return <>
        {fields.map((field, idx) => {
            return <div key={idx} className="flex flex-col gap-3 mb-3">
                <FormInput {...field} />
            </div>
        })}
    </>
}