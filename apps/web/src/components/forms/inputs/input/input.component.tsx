import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm"
import { CheckboxFormInput } from "../checkbox/checkbox-input.component"
import { DateInput } from "../date/date-input.component"
import { Description } from "../description/description-input.component"
import { FileUploaderInput } from "../file-uploader/file-uploader-input.component"
import { SelectFormInput } from "../select/select-input.component"
import { SignatureInput } from "../signature/signature-input.component"
import { Header } from "../header/header-input.component"
import { DateTimeInput } from "../date-time/date-time-input.component"
import { FormRichInput } from "../rich-input/rich-input.component"
import { TextBoxInput } from "./text-box-input.component"

export function FormInput(field: FormField) {

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
        default:
            return <TextBoxInput field={field} />
    }
}