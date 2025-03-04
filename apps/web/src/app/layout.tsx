import "../styles/globals.css";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import '@radix-ui/themes/styles.css';

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Theme } from '@radix-ui/themes';
import { TRPCReactProvider } from "../utils/react";
import { SideNav } from "@/components/side-nav/side-nav.component";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "MyWorkDoc",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <ClerkProvider>
            <html lang="en" className="h-full" suppressHydrationWarning>
                <head>

                </head>
                <body className={`font-sans ${inter.variable} bg-gray-100 h-full`}>
                    <Theme>
                        <TRPCReactProvider>
                            <div className="flex flex-row h-screen bg-gray-100">
                                <SideNav />
                                {children}
                            </div>
                        </TRPCReactProvider>
                    </Theme>
                </body>
            </html>
        </ClerkProvider>
    );
}
