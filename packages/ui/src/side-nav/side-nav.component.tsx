'use client'
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { BookOpenIcon, BuildingOffice2Icon, ChartBarIcon, ClipboardDocumentCheckIcon, Cog6ToothIcon, DocumentTextIcon, FolderIcon, Squares2X2Icon, UsersIcon } from '@heroicons/react/24/outline';
import * as React from "react";

export interface NavItem {
    name: string;
    href: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
}

function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

export interface SideNavProps {
    app: 'customer' | 'admin' | 'provider';
    userButton: React.ReactNode
}

export function SideNav({ app, userButton }: SideNavProps) {

    let topNav: NavItem[] = [];
    let bottomNavigation: NavItem[] = [];

    if (app === 'provider') {
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
    } else if (app === 'admin') {

        topNav = [

            { name: 'Companies', icon: BuildingOffice2Icon, href: '/companies' },
            { name: 'Cases', icon: FolderIcon, href: '/cases' },
            { name: 'Profiles', icon: UsersIcon, href: '/profiles' },
            { name: 'Rooms', icon: Squares2X2Icon, href: '/rooms' },
            { name: 'Forms', icon: DocumentTextIcon, href: '/forms' },
        ];

        bottomNavigation = [
            { name: 'Reports', icon: ChartBarIcon, href: '/reports' },
            { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
        ]

    } else if (app === 'customer') {
        topNav = [
            { name: 'Cases', icon: FolderIcon, href: '/cases' },
            { name: 'Employees', icon: UsersIcon, href: '/employees' },
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

                            {/* <div className="text-xs text-gray-700 ">{item.name}</div> */}
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

                            {/* <div className="text-xs text-gray-700 ">{item.name}</div> */}
                        </Link>
                    );
                })}

                <div className="mt-3 rounded-full h-11 w-11 border-gray-300 border-0 bg-gray-300 flex items-center justify-center">
                    {userButton}
                </div>
            </div>

        </div>
    </>
}
