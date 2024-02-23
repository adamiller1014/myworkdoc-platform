import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { Checkbox } from "@radix-ui/themes";

export function CheckboxFormInput({ field }: { field: FormField }) {
    return <>
        <Checkbox size="2" defaultChecked
        // {...register('active')} 
        />
    </>
}
