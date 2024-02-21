'use client'
import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@/utils/classNames";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function SideNavLink(props: CustomLinkProps) {
  const pathname = usePathname();
  const is_active = pathname.indexOf(props.href.toString()) > -1;

  return (
    <Link
      {...props}
      className={classNames(
        is_active
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
      )}
    >
      {props.children}
    </Link>
  );
}
