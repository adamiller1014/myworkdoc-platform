import React from 'react';
import { Button, Dialog, Flex, Text, Select } from '@radix-ui/themes';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import {
    PencilSquareIcon,
} from '@heroicons/react/20/solid'


import { api } from '@/utils/react';
import { z } from 'zod';

const createNoteSchema = z.object({
    form_id: z.string(),

})

type CreateNoteInput = z.infer<typeof createNoteSchema>;

export default function CreateCaseNote() {

    const params = useParams();
    const router = useRouter();
    const { handleSubmit, formState, control } = useForm<CreateNoteInput>();

    const { data: caseForms, isLoading } = api.caseForms.list.useQuery();

    const onSubmit: SubmitHandler<CreateNoteInput> = (data) => {
        router.push(`/cases/segments/${params.segmentId}/${params.caseId}/forms/create/${data.form_id}`);
    };

    if (isLoading || !caseForms) {
        return null
    }

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button value={'solid'} className='bg-blue-500'>
                        <PencilSquareIcon width="16" height="16" /> New Case Note
                    </Button>
                </Dialog.Trigger>
                <Dialog.Content style={{ maxWidth: 600, overflow: 'unset' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Dialog.Title>Create Case note</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                            Please select the type of case not you would like to create.
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                                    Note Type
                                </Text>
                                <Controller
                                    control={control}
                                    name="form_id"
                                    rules={{ required: 'Note Type is required' }}
                                    render={({ field }) => (
                                        <Select.Root onValueChange={field.onChange}>
                                            <Select.Trigger className='w-full' />
                                            <Select.Content>
                                                {caseForms.map((form) => {
                                                    return <Select.Item value={form.id.toString()}>{form.name}</Select.Item>
                                                })}
                                            </Select.Content>
                                        </Select.Root>
                                    )}
                                />

                            </label>

                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button type="submit" disabled={!formState.isValid} variant="soft" color="blue">
                                    Create Case Note
                                </Button>
                            </Dialog.Close>
                        </Flex>
                    </form>
                </Dialog.Content>
            </Dialog.Root>
        </>
    );
}
