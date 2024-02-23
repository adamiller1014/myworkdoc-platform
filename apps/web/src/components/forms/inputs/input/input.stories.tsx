import { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./input.component";

const meta = {
    title: 'Forms/Inputs/Input',
    component: FormInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

    },
    decorators: [
        (Story) => <div className="w-96"><Story /></div>
    ]
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextInput: Story = {
    args: {

        type: 'input',
        title: 'Name',
        required: true,
        shortTitle: 'Enter your name',
        id: "",
        hidden: false

    },
};

export const BasicSelectInput: Story = {
    args: {

        type: 'select',
        title: 'Name',
        required: true,
        shortTitle: 'Enter your name',
        id: "",
        hidden: false

    },
};