import React from "react";
import { Theme } from '@radix-ui/themes';

export function ThemeDecorator(Story: any) {
    return <>
        <Theme>
            <Story />
        </Theme>
    </>
}