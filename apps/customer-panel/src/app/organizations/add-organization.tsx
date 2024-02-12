'use client';
import React from 'react';
import { Button, Dialog, Flex, Separator, Text, TextField } from '@radix-ui/themes';
import { useForm, SubmitHandler } from "react-hook-form"
import { api } from '~/trpc/react';
import { useRouter } from 'next/navigation';
import { CreateOrganizationInput } from '~/server/api/routers/organizations/organization-types';


export default function AddOrganization() {

    const utils = api.useUtils();
    const router = useRouter();
    const { control, handleSubmit, register, formState, watch } = useForm<CreateOrganizationInput>({
    });

    const mutation = api.organizations.create.useMutation(
        {
            onSuccess: (newOrganization) => {
                utils.organizations.invalidate();
                router.push('/organizations/' + newOrganization.id)
            }
        }
    );



    const onSubmit: SubmitHandler<CreateOrganizationInput> = (data) => {
        mutation.mutate(data);
    }

    return <>
        <Dialog.Root>
            <Dialog.Trigger>
                <Button value={'solid'}>Add Organization</Button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 800, overflow: 'unset' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Dialog.Title>Add Organization</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Please enter the following information to add a new organization.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Name
                            </Text>
                            <TextField.Input {...register("name", { required: true })} />
                        </label>
                        <Separator my="3" size="4" title={'Primary Contact'} />
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Primary Contact
                            </Text>
                            <TextField.Input {...register("primaryContactName", { required: true })} />
                        </label>
                        <Flex direction="row" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Primary Contact Phone
                                </Text>
                                <TextField.Input {...register("primaryContactPhone", { required: true })} />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Primary Contact Email
                                </Text>
                                <TextField.Input {...register("primaryContactEmail", { required: true })} />
                            </label>

                        </Flex>

                        <Separator my="3" size="4" title={'Address'} />
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Address Line 1
                            </Text>
                            <TextField.Input {...register("addressLine1", { required: true })} />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Line 2
                            </Text>
                            <TextField.Input {...register("addressLine2")} />
                        </label>

                        <Flex direction="row" gap="3">
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    City
                                </Text>
                                <TextField.Input {...register("city", { required: true })} />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    State
                                </Text>
                                <TextField.Input {...register("state", { required: true })} />
                            </label>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold">
                                    Postal Code
                                </Text>
                                <TextField.Input {...register("postalCode", { required: true })} />
                            </label>
                        </Flex>

                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Button type='submit' disabled={!formState.isValid}>Create Organization</Button>

                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    </>
}