import { FormField, TextBoxInputSettings } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { Field } from "@progress/kendo-react-form";
import { TextBox } from "@progress/kendo-react-inputs";
import { Error, Label } from "@progress/kendo-react-labels";


export function TextBoxInput({ field }: { field: FormField }) {

    const settings = field.settings as TextBoxInputSettings;

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
            <TextBox
                {...others}
                required={required}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};