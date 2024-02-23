import { FormField, SelectInputSettings } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { Field } from "@progress/kendo-react-form";
import { Error, Label } from "@progress/kendo-react-labels";
import { ComboBox } from "@progress/kendo-react-dropdowns";

export function SelectFormInput({ field }: { field: FormField }) {

    const settings = field.settings as SelectInputSettings;

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
            data={settings.items}
            required={field.required}
        />
    </>
}

const ValidatedInput = (fieldRenderProps: {
    [x: string]: any;
    validationMessage: any;
    visited: any;
    data: any;
    required?: boolean;
}) => {
    const { validationMessage, visited, data, required, ...others } =
        fieldRenderProps;

    return (
        <div>

            <Label className="w-full font-semibold" >{others.label}</Label>
            <ComboBox
                {...others}
                label=''
                data={data}
                textField='label'
                suggest={true}
                required={required}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};