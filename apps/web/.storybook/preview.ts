import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';
import '@radix-ui/themes/styles.css';

import { ThemeDecorator } from "./theme-decorator";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  ThemeDecorator
];


export default preview;
