'use client';

import { FormEditor } from "@/components/forms/form-edit/form-edit.component";
import { api } from "@/utils/react";

export default function CaseForm({ params }: { params: { formId: string } }) {

    const { data: form, isLoading } = api.forms.get.useQuery(parseInt(params.formId));



    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!form) {
        return <div>Form not found</div>
    }

    if (!form.form_info) {
        form.form_info = {
            pages: []
        }
    }



    return <FormEditor formInfo={form.form_info} name={form?.name} />

}