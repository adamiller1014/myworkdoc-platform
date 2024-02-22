import { FormField } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { create } from "zustand";


type EditFormStore = {
    selectedField: FormField | null;
    setSelectedField: (field: FormField) => void;
}

export const useEditFormStore = create<EditFormStore>((set) => ({
    selectedField: null,
    setSelectedField: (field) => set({ selectedField: field })
}));