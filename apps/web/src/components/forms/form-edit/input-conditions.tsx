import { Flex, Select } from "@radix-ui/themes";
import { useEditFormStore } from "./edit-form-store";

export function Conditions() {

    const { selectedField } = useEditFormStore()

    if (!selectedField) {
        return null;
    }
    return <>


        <Flex direction="column" gap="3">
            <label>

                <Select.Root defaultValue="and">
                    <Select.Trigger />
                    <Select.Content>

                        <Select.Item value="and">And</Select.Item>
                        <Select.Item value="or">Or</Select.Item>

                    </Select.Content>
                </Select.Root>
            </label>


            <div>
                rulesets here
            </div>
        </Flex>
    </>
}
