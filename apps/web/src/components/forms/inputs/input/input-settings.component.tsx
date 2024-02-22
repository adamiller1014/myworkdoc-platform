import { Flex, Text, Select, Checkbox } from "@radix-ui/themes";

export function InputSettings() {
    return <>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                    Type
                </Text>
                <Select.Root defaultValue="text">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="color">Color</Select.Item>
                        <Select.Item value="date">Date</Select.Item>
                        <Select.Item value="datetime-local">Local Date Time</Select.Item>
                        <Select.Item value="email">Email</Select.Item>
                        <Select.Item value="month">Month</Select.Item>
                        <Select.Item value="number">Number</Select.Item>
                        <Select.Item value="password">Password</Select.Item>
                        <Select.Item value="tel">Telephone Number</Select.Item>
                        <Select.Item value="text">Text</Select.Item>
                        <Select.Item value="time">Time</Select.Item>
                        <Select.Item value="url">URL</Select.Item>
                        <Select.Item value="week">Week</Select.Item>

                    </Select.Content>
                </Select.Root>
            </label>


            <Text as="label" size="3">
                <Flex gap="2">
                    <Checkbox size="2" defaultChecked
                    // {...register('active')} 
                    /> Multiline
                </Flex>
            </Text>
        </Flex>
    </>
}
