import { FormField, FormInfo } from "@myworkdoc/api/src/router/routes/case-forms/caseForm";
import { create } from "zustand";

export const FormFieldTypes = [
    { name: 'Date', value: 'date' },
    { name: 'Select', value: 'select' },
    { name: 'Checkbox', value: 'checkbox' },
    { name: 'Header', value: 'header' },
    { name: 'Description', value: 'description' },
    { name: 'Input', value: 'input' },
    { name: 'Rich Input', value: 'rich-input' },
    { name: 'Date Time', value: 'date-time' },
    { name: 'File Uploader', value: 'file-uploader' },
    { name: 'Signature', value: 'signature' },

]

type EditFormStore = {

    currentPageIndex: number;
    setCurrentPageIndex: (index: number) => void;

    selectedField: FormField | null;
    setSelectedField: (field: FormField) => void;

    formInfo: FormInfo | null;
    setFormInfo: (formInfo: FormInfo) => void;

    addPage: () => void;

    addField: (fieldType: 'date' | 'select' | 'checkbox' | 'header' | 'description' | 'input' | 'rich-input' | 'date-time' | 'file-uploader' | 'signature') => void;
}

function dec2hex(dec: { toString: (arg0: number) => string; }) {
    return dec.toString(16).padStart(2, "0")
}
function generateId(len: number) {
    const arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

export const useEditFormStore = create<EditFormStore>((set, get) => ({
    currentPageIndex: 0,
    setCurrentPageIndex: (index) => set({ currentPageIndex: index }),
    selectedField: null,
    setSelectedField: (field) => set({ selectedField: field }),

    formInfo: null,
    setFormInfo: (formInfo) => set({ formInfo, selectedField: null, currentPageIndex: 0 }),

    addPage: () => {
        const formInfo = get().formInfo;
        if (formInfo) {
            const newPage = {
                id: generateId(9),
                active: true,
                title: `Page ${formInfo.pages.length + 1}`,
                fields: [],
            };
            formInfo.pages.push(newPage);
            set({ formInfo });
        }
    },

    addField: (fieldType) => {
        const formInfo = get().formInfo;
        const pageIndex = get().currentPageIndex;
        if (formInfo) {
            const page = formInfo.pages[pageIndex];
            if (page) {
                const newField: FormField = {
                    id: generateId(9),
                    type: fieldType,
                    title: `Field ${page.fields.length + 1}`,
                    description: '',
                    required: false,
                    shortTitle: "",
                    hidden: false,
                    settings: null,
                    conditions: {
                        rules: [],
                        condition: 'and'
                    }
                };
                page.fields.push(newField);

                set({ formInfo, selectedField: newField });
            }
        }
    },


}));