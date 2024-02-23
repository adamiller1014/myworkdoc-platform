import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";

export function Description({ field }: { field: FormField }) {

    return <>
        <p>{field.description}</p>
    </>
}