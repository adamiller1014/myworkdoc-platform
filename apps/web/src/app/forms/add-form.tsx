import React from 'react';
import { Button, Checkbox, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { api } from '../../utils/react';
import { CreateFormInput } from '@myworkdoc/api/src/router/routes/forms/form-types';



export default function AddForm() {
  const utils = api.useUtils();
  const router = useRouter();
  const { handleSubmit, formState, register } = useForm<CreateFormInput>();

  const mutation = api.forms.create.useMutation({
    onSuccess: async (newForm) => {
      await utils.forms.invalidate();
      router.push('/forms/' + newForm.id);
    },
  });

  const onSubmit: SubmitHandler<CreateFormInput> = (data) => {
    const { active, ...rest } = data;
    const isActive = active.toString() === "on";

    mutation.mutate({ ...rest, active: isActive });
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button value={'solid'}>Add Form</Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450, overflow: 'unset' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Title>Add Form</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Please enter the following information to add a new form.
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
                Create Form
              </Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
