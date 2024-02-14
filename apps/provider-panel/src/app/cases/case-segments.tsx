'use client';

import {
    FolderOpenIcon,
    FolderPlusIcon,
    FolderMinusIcon,
    ClockIcon,
    ClipboardDocumentListIcon,
    DocumentTextIcon,
    QueueListIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { api } from '../../utils/react';

interface SecondaryNavItem {
    name: string
    href: string
    initial: string
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function CaseSegments() {

    const pathname = usePathname();

    const { data: companies } = api.companies.list.useQuery();
    const { data: roomTypes } = api.roomTypes.list.useQuery();

    if (!roomTypes) {
        return <></>
    }

    const navigation: { name: string, href: string, icon: any, room_type_id?: number }[] = [];
    navigation.push({ name: 'All', href: '/cases/segments/all', icon: QueueListIcon });
    roomTypes?.map((roomType) => {

        // Pick icon based on room type
        let icon = FolderOpenIcon;
        switch (roomType.name) {
            case "All":
                icon = QueueListIcon;
                break;
            case "Initial":
                icon = FolderPlusIcon;
                break;
            case "Follow-up":
                icon = ClockIcon;
                break;
            case "Case Management":
                icon = ClipboardDocumentListIcon;
                break;
            case "Form":
                icon = DocumentTextIcon;
                break;
            case "Closed":
                icon = FolderMinusIcon;
                break;
            default:
                icon = FolderOpenIcon;
        }

        navigation.push({ name: roomType.name as string, href: `/cases/segments/${roomType.id}`, icon, room_type_id: parseInt(roomType.id.toString()) })
    });

    navigation.push({ name: 'Closed', href: '/cases/segments/closed', icon: FolderMinusIcon });


    let secondaryItems: SecondaryNavItem[] = [];

    if (companies) {
        secondaryItems = companies.map((company: any) => {
            return {
                name: company.name,
                href: `/companies/${company.id}`,
                initial: company.name.charAt(0),
            }
        });
    }

    return (
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname.indexOf(item.href) === 0;


                            return <>
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            isActive
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                        {item.room_type_id && <RoomTypeCount room_type_id={item.room_type_id} />}
                                        {!item.room_type_id && <CountByStatus status={item.name.toLowerCase() as 'closed' | 'all'} />}

                                    </Link>
                                </li></>
                        })}
                    </ul>
                </li>
                <li>
                    <div className="text-xs font-semibold leading-6 text-gray-400">Companies</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {secondaryItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={classNames(
                                        false
                                            ? 'bg-gray-50 text-indigo-600'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                >
                                    <span
                                        className={classNames(
                                            false
                                                ? 'text-indigo-600 border-indigo-600'
                                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                        )}
                                    >
                                        {item.initial}
                                    </span>
                                    <span className="truncate">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul >
        </nav >
    )
}

function RoomTypeCount({ room_type_id }: { room_type_id: number }) {
    const { data: count } = api.cases.countBasedOnRoomType.useQuery({ room_type_id });

    return <><span
        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
        aria-hidden="true"
    >
        {count?.toLocaleString()}
    </span>
    </>
}

function CountByStatus({ status }: { status: 'closed' | 'all' }) {
    const { data: count } = api.cases.count.useQuery({ closed: status === 'closed' });

    return <><span
        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
        aria-hidden="true"
    >
        {count?.toLocaleString()}
    </span>
    </>
}