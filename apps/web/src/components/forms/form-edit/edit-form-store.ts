import { FormField, FormInfo } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { create } from "zustand";


type EditFormStore = {
    selectedField: FormField | null;
    setSelectedField: (field: FormField) => void;

    formInfo: FormInfo | null;
    setFormInfo: (formInfo: FormInfo) => void;

    addPage: () => void;
}

export const useEditFormStore = create<EditFormStore>((set, get) => ({
    selectedField: null,
    setSelectedField: (field) => set({ selectedField: field }),

    formInfo: null,
    setFormInfo: (formInfo) => set({ formInfo }),

    addPage: () => {
        const formInfo = get().formInfo;
        if (formInfo) {
            const newPage = {
                id: formInfo.pages.length + 1,
                active: true,
                title: `Page ${formInfo.pages.length + 1}`,
                fields: [],
            };
            formInfo.pages.push(newPage);
            set({ formInfo });
        }
    },
}));