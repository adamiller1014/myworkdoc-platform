import React from 'react';
import { Button, Checkbox, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { api } from '../../utils/react';
import { CreateCompanyInput } from '@myworkdoc/api/src/router/routes/companies/company-types';

export default function AddCompany() {
  const utils = api.useUtils();
  const router = useRouter();
  const { handleSubmit, formState, register } = useForm<CreateCompanyInput>();

  const mutation = api.companies.create.useMutation({
    onSuccess: async (newCompany) => {
      await utils.companies.invalidate();
      router.push('/companies/' + newCompany.id);
    },
  });

  const onSubmit: SubmitHandler<CreateCompanyInput> = (data) => {
    const { active, ...rest } = data;
    const isActive = active.toString() === "on";

    mutation.mutate({ ...rest, active: isActive });
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button >Add Company</Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450, overflow: 'unset' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Title>Add Company</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Please enter the following information to add a new company.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                  Name
                </Text>
                <TextField.Input
                  size="2"
                  placeholder="Name"
                  {...register('name', { required: 'Name is required' })}
                  className={`border ${formState.errors.name ? 'border-red-500' : 'border-gray-300'
                    } p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Address
                </Text>
                <TextField.Input
                  size="2"
                  placeholder="Address"
                  {...register('address')}
                />
              </label>

              <Text as="label" size="3">
                <Flex gap="2">
                  <Checkbox size="2" defaultChecked {...register('active')} /> Active
                </Flex>
              </Text>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Button type="submit" disabled={!formState.isValid} variant="soft" color="blue">
                Create Company
              </Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
