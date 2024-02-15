import { redirect } from "next/navigation";

export default function CompanyIndex({ params }: { params: { companyId: string } }) {

    return redirect(`/companies/${params.companyId}/cases`);
}