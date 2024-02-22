import { FormField, SelectInputSettings } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { Select } from "@radix-ui/themes";

export function SelectFormInput({ field }: { field: FormField }) {

    const settings = field.settings as SelectInputSettings;

    return <>
        <Select.Root defaultValue={settings?.items[0]?.value}>
            <Select.Trigger className="w-full" />
            <Select.Content>

                {settings?.items.map((item) => (
                    <Select.Item key={item.id} value={item.value}>{item.label}</Select.Item>
                ))}

            </Select.Content>
        </Select.Root>
    </>
}