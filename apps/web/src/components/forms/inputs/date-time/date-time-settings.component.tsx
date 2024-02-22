import { Flex, Text, Select, Checkbox } from "@radix-ui/themes";

export function DateTimeInputSettings() {
    return <>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                    Mode
                </Text>
                <Select.Root defaultValue="date">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="date">Date</Select.Item>
                        <Select.Item value="date-time">Date Time</Select.Item>
                        <Select.Item value="time">Time</Select.Item>

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
