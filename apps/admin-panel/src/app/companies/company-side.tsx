'use client';

import { Avatar, Flex } from "@radix-ui/themes";
import { api } from "~/trpc/react";


export default function CompanySide({ companyId }: { companyId: string }) {


    const cId = parseInt(companyId);

    const { data: company, isLoading } = api.companies.get.useQuery(cId);

    if (isLoading) return <></>

    if (!company) return <></>
    
    const initials = company.name.split(' ').map((n) => n[0]).join('');


    return <>
        <Flex direction="column" gap="3" className="p-5"  align={'center'}>

            <Avatar
                size="8"
               // src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback={initials}
                radius='full'
                className="border-2 border-blue-200"
            />

            <div className="text-lg font-semibold leading-6 text-blue-900">
                {company.name}
            </div>
        </Flex>
    </>

}