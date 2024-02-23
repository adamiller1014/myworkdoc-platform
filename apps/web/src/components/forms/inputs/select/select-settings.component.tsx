import { Checkbox, Flex, Select, Text } from "@radix-ui/themes";

export function SelectSettings() {
    return <>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                    Style
                </Text>
                <Select.Root defaultValue="dropdown">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="dropdown">Dropdown</Select.Item>
                        <Select.Item value="rating">Rating</Select.Item>
                        <Select.Item value="list">List</Select.Item>


                    </Select.Content>
                </Select.Root>
            </label>


            <Text as="label" size="3">
                <Flex gap="2">
                    <Checkbox size="2" defaultChecked
                    // {...register('active')} 
                    /> Multiple Choice
                </Flex>
            </Text>

            <div>
                Items here
            </div>
        </Flex>
    </>
}