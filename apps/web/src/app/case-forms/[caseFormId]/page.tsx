'use client';

import { FormEditor } from "@/components/forms/form-edit/form-edit.component";
import { api } from "@/utils/react";

export default function CaseForm({ params }: { params: { caseFormId: string } }) {

    const { data: form, isLoading } = api.caseForms.get.useQuery(parseInt(params.caseFormId));



    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!form) {
        return <div>Case Form not found</div>
    }

    if (!form.form_info) {
        form.form_info = {
            pages: []
        }
    }



    return <FormEditor formInfo={form.form_info} name={form?.name} />

}