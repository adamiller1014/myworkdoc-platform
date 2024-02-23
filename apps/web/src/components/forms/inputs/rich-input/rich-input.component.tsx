import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { Field } from "@progress/kendo-react-form";
import { Error, Label } from "@progress/kendo-react-labels";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    FontSize,
    FontName,
    FormatBlock,
    Link,
    Unlink,
    InsertImage,
    ViewHtml,
    InsertTable,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
} = EditorTools;

export function FormRichInput({ field }: { field: FormField }) {


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
            required={field.required}
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
            <Editor
                {...others}
                tools={[
                    [Bold, Italic, Underline, Strikethrough],
                    [Subscript, Superscript],
                    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                    [Indent, Outdent],
                    [OrderedList, UnorderedList],

                    // FontSize,
                    // FontName,
                    // FormatBlock,
                    [Undo, Redo],
                    // [Link, Unlink, InsertImage, ViewHtml],
                    // [InsertTable],
                    // [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                    // [DeleteRow, DeleteColumn, DeleteTable],
                    // [MergeCells, SplitCell],
                ]}
                contentStyle={{
                    height: 630,
                }}

            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};