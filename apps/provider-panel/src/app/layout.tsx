import "../styles/globals.css";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { TRPCReactProvider } from "../utils/react";
import { SideNav } from '@myworkdoc/ui';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "MyWorkDoc - Provider",
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
                                <SideNav app={'customer'} userButton={<UserButton />} />
                                {children}
                            </div>
                        </TRPCReactProvider>
                    </Theme>
                </body>
            </html>
        </ClerkProvider>
    );
}
