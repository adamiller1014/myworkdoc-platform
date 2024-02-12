'use client';
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { api } from "~/trpc/react";
import CompanySide from "../company-side";

export default function CompanyLayout({ children, params }: { children: React.ReactNode, params: { companyId: string } }) {
    return <>
        <Flex direction={'row'} className="bg-red-50 w-full" >
            <Flex className=" w-60 bg-gray-100 border-r-0">
                <CompanySide companyId={params.companyId} />
            </Flex>
            <Flex className="bg-gray-50 w-full border-0"  direction={'column'} >
                <CompanyTabs companyId={params.companyId} />
                {children}
            </Flex>
        </Flex>
    </>
}



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function CompanyTabs({ companyId }: { companyId: string }) {

    const pathname = usePathname();
    const cId = parseInt(companyId);
    const { data: companyCases } = api.companies.casesCount.useQuery({ companyId: cId });
    const { data: companyEmployees } = api.companies.employeesCount.useQuery({ companyId: cId });
    const { data: companyForms } = api.companies.formsCount.useQuery({ companyId: cId });


    const tabs = [
        { name: 'Cases', href: `/companies/${companyId}/cases`, count: companyCases?.toLocaleString() },
        { name: 'Employees', href: `/companies/${companyId}/employees`, count: companyEmployees?.toLocaleString() },
        { name: 'Forms', href: `/companies/${companyId}/forms`, count: companyForms?.toLocaleString() },
        { name: 'Details', href: `/companies/${companyId}/details`, }
    ]


    return (
        <div className="pl-5 bg-white">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                //defaultValue={tabs.find((tab) => tab.href.indexOf(pathname) > 0).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => {

                            const isActive = tab.href.startsWith(pathname);

                            return <Link
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    isActive
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                                    'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                                )}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {tab.name}
                                {tab.count ? (
                                    <span
                                        className={classNames(
                                            isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                                            'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                                        )}
                                    >
                                        {tab.count}
                                    </span>
                                ) : null}
                            </Link>
                        }
                        )}
                    </nav>
                </div>
            </div>
        </div>
    )
}
