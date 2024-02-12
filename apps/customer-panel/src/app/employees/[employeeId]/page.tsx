import { Flex } from "@radix-ui/themes";

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
    return <>

        <Flex direction={'row'} className="bg-red-50 w-full" >
            <Flex className=" w-72 bg-gray-100 border-r-2">
                Side
            </Flex>
            <Flex  className="bg-gray-50 w-full" >
                content
                {children}
            </Flex>
        </Flex>
    </>
}