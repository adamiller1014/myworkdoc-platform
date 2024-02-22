import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";

export function Header({ field }: { field: FormField }) {

    return <>
        <h1>{field.title}</h1>
    </>
}