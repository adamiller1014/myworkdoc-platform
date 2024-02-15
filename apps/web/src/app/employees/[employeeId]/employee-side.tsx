'use client';

import { api } from "@/utils/react";
import { Avatar, Flex } from "@radix-ui/themes";



export default function EmployeeSide({ employeeId }: { employeeId: string }) {


    const cId = parseInt(employeeId);

    const { data: employee, isLoading } = api.employees.get.useQuery(cId);

    if (isLoading) return <></>

    if (!employee) return <></>

    let initials = '';


    if (employee.first_name && employee.last_name) {
        initials = employee.first_name?.substring(0, 1) + employee.last_name?.substring(0, 1);
    }


    return <>
        <Flex direction="column" gap="3" className="p-5" align={'center'}>

            <Avatar
                size="8"
                // src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback={initials}
                radius='full'
                className="border-2 border-blue-200"
            />

            <div className="text-lg font-semibold leading-6 text-blue-900">
                {employee.first_name} {employee.last_name}
            </div>
        </Flex>
    </>

}