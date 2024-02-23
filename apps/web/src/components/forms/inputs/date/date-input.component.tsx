import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { Field } from "@progress/kendo-react-form";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Error, Label } from "@progress/kendo-react-labels";


export function DateInput({ field }: { field: FormField }) {


    let validator: any;
    if (field.required) {
        validator = (value: any) => !value && field.title + " is required";
    }

    return <>
        <Field
            name={field.id}
            component={ValidatedInput}
            label={field.title}
            validator={validator}
            reqiorequired={field.required}
        />
    </>
}

const ValidatedInput = (fieldRenderProps: {
    [x: string]: any;
    validationMessage: any;
    visited: any;
    required?: boolean;
}) => {
    const { validationMessage, visited, required, ...others } =
        fieldRenderProps;



    return (
        <div>

            <Label className="w-full font-semibold" >{others.label}</Label>
            <DatePicker
                {...others}
                label=""
                required={required}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};