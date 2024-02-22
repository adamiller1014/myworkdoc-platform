import { useEditFormStore } from "../form-edit/edit-form-store";
import { DateTimeInputSettings } from "./date-time/date-time-settings.component";
import { InputSettings } from "./input/input-settings.component";
import { SelectSettings } from "./select/select-settings.component";

export function Settings() {
    const { selectedField } = useEditFormStore()

    switch (selectedField?.type) {
        case 'input':
            return <InputSettings />
        case 'select':
            return <SelectSettings />
        case 'date-time':
            return <DateTimeInputSettings />
        default:
            return null;
    }
}