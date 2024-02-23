import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm"

import { TextField } from "@radix-ui/themes"
import { CheckboxFormInput } from "../checkbox/checkbox-input.component"
import { DateInput } from "../date/date-input.component"
import { Description } from "../description/description-input.component"
import { FileUploaderInput } from "../file-uploader/file-uploader-input.component"
import { SelectFormInput } from "../select/select-input.component"
import { SignatureInput } from "../signature/signature-input.component"
import { Header } from "../header/header-input.component"
import { DateTimeInput } from "../date-time/date-time-input.component"
import { FormRichInput } from "../rich-input/rich-input.component"

export function FormInput({ field }: { field: FormField }) {

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