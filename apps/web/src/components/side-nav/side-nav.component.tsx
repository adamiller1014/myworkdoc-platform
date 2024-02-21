'use client'
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { BookOpenIcon, BuildingOffice2Icon, ChartBarIcon, ClipboardDocumentCheckIcon, Cog6ToothIcon, DocumentTextIcon, FolderIcon, Squares2X2Icon, UsersIcon } from '@heroicons/react/24/outline';
import * as React from "react";
import { classNames } from '@/utils/classNames';
import { UserButton } from '@clerk/nextjs';
import { api } from '@/utils/react';
import { SideNavLink } from './side-nav-link.component';

export interface NavItem {
    name: string;
    href: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
}

export interface SideNavLink {
    [x: string]: unknown;
    name: string;
    url: string;
    icon?: string;
    current?: boolean;
    count?: any;
    segmentId?: string;
    entityTypeId?: string;
    filter?: any;
    isExternal?: boolean;
    noFAIcon?: boolean;
}
export interface SideNavParams {
    items?: SideNavGroup[];
}


export interface SideNavGroup {
    name: string;
    items: SideNavLink[];
}

function SideBarGroup({
    group,
    index,
}: {
    group: SideNavGroup;
    index: number;
}) {
    return (
        <>
            <div
                className={index == 0 ? "mt-0" : "pt-7"}
                key={"sidebar-group" + index}
            >
                <h3
                    className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
                    id='projects-headline'
                >
                    {group.name}
                </h3>
                <div
                    className='mt-1 space-y-1'
                    aria-labelledby={group.name + "-headline"}
                >
                    {group.items.map((item, index) => {
                        {
                            //var isActive = useMatch(item.url);
                            // TODO Fix isActive on Side Nav
                            var isActive = false;
                            return (
                                <React.Fragment key={group.name + "-" + index}>
                                    <SideNavLink
                                        key={group.name + "-" + item.url}
                                        href={item.url}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <ItemIcon item={item} />

                                        <span className='truncate'>{item.name}</span>
                                        {item.count || item.showCount ? (
                                            <span
                                                className={classNames(
                                                    isActive
                                                        ? "bg-white"
                                                        : "bg-gray-100 group-hover:bg-gray-200",
                                                    "ml-auto inline-block py-0.5 px-3 text-xs rounded-full"
                                                )}
                                            >
                                                {item.count}
                                            </span>
                                        ) : null}
                                    </SideNavLink>
                                </React.Fragment>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export const SideNavSetting: React.FC<SideNavParams> = (params) => {
    return (
        <nav aria-label='Sidebar'>
            <div className='space-y-1'>
                {params.items?.map((item, index) => (
                    <SideBarGroup
                        group={item}
                        index={index}
                        key={index + "_key_" + item?.items}
                    />
                ))}
            </div>
        </nav>
    );
};

export const ItemIcon: React.FC<{ item: SideNavLink }> = ({ item }) => {
    if (!item.icon) {
        return <></>;
    }

    return (
        <></>
        //   <Icon
        //     name={item.icon.split(" ")[1] as any}
        //     className={classNames(
        //       item.current
        //         ? "text-gray-500"
        //         : "text-gray-400 group-hover:text-gray-500",
        //       "flex-shrink-0 -ml-1 mr-3 h-5 w-5"
        //     )}
        //   />

    );

};

export function SideNav() {

    let topNav: NavItem[] = [];
    let bottomNavigation: NavItem[] = [];

    const { data: user, } = api.auth.user.useQuery();

    if (user?.panelType === 'Provider') {
        topNav = [
            { name: 'Cases', icon: FolderIcon, href: '/cases' },
            { name: 'Companies', icon: BuildingOffice2Icon, href: '/companies' },
            { name: 'Tasks', icon: ClipboardDocumentCheckIcon, href: '/tasks' },
        ];

        bottomNavigation = [
            { name: 'Protocols', icon: BookOpenIcon, href: '/triage-protocol' },
            { name: 'Reports', icon: ChartBarIcon, href: '/reports' },
            { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
        ]
    } else if (user?.panelType === 'Admin') {

        topNav = [

            { name: 'Companies', icon: BuildingOffice2Icon, href: '/companies' },
            { name: 'Cases', icon: FolderIcon, href: '/cases' },
            { name: 'Profiles', icon: UsersIcon, href: '/employees' },
            { name: 'Case Forms', icon: DocumentTextIcon, href: '/case-forms' },
        ];

        bottomNavigation = [
            { name: 'Reports', icon: ChartBarIcon, href: '/reports' },
            { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
        ]

    } else if (user?.panelType === 'End User') {
        topNav = [
            { name: 'Cases', icon: FolderIcon, href: '/cases' },
            { name: 'Employees', icon: UsersIcon, href: '/employees' },
            { name: 'Rooms', icon: Squares2X2Icon, href: '/rooms' },
            { name: 'Forms', icon: DocumentTextIcon, href: '/forms' },
        ];

        bottomNavigation = [
            { name: 'Reports', icon: ChartBarIcon, href: '/reports' },
            { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
        ]
    }

    const pathname = usePathname();
    const activeStyle = 'bg-gray-100  border-l-4 border-blue-900 ml-2'

    return <>
        <div className=" flex flex-col justify-between items-center flex-none w-12 bg-gray-200">
            <div className="flex flex-col  w-full items-center pt-5">
                <div className="rounded-full bg-blue-950 w-8 h-8 mb-5">
                    <Image src="/logo.png" alt="MyWorkDoc" width={32} height={32} />
                </div>
                {topNav.map((item, index) => {

                    const isActive = pathname.startsWith(item.href);

                    return (
                        <Link
                            key={'top-nav-' + index}
                            href={item.href}
                            className={classNames(isActive && activeStyle, "p-4 flex flex-col items-center ")}
                        >
                            {item.icon && <item.icon className={classNames(isActive && " text-blue-800", "w-5 h-5")} />}
                        </Link>
                    );
                })}
            </div>
            <div className="flex flex-col pb-5">
                {bottomNavigation.map((item, index) => {
                    const isActive = pathname.startsWith(item.href);

                    return (
                        <Link

                            key={'bottom-nav-' + index}
                            href={item.href}
                            className={classNames(isActive && activeStyle, "p-2 flex flex-col items-center")}
                        >
                            {item.icon && <item.icon className="w-5 h-5" />}
                        </Link>
                    );
                })}

                <div className="mt-3 rounded-full h-9 w-9 border-gray-300 border-0 bg-gray-300 flex items-center justify-center">
                    <UserButton />
                </div>
            </div>

        </div>
    </>
}
