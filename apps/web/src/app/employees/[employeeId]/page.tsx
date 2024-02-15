import { redirect } from "next/navigation";

export default function CompanyIndex({ params }: { params: { employeeId: string } }) {

    return redirect(`/employees/${params.employeeId}/cases`);
}