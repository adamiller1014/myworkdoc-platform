import React from 'react';
import { Button, Checkbox, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { api } from '../../utils/react';
import { CreateEmployeeInput } from '@myworkdoc/api/src/router/routes/employees/employee-types';

export default function AddEmployee() {
  const utils = api.useUtils();
  const router = useRouter();
  const { handleSubmit, formState, register } = useForm<CreateEmployeeInput>();

  const mutation = api.employees.create.useMutation({
    onSuccess: async (newEmployee) => {
      await utils.employees.invalidate();
      router.push('/employees/' + newEmployee.id);
    },
  });

  const onSubmit: SubmitHandler<CreateEmployeeInput> = (data) => {
    const { active, ...rest } = data;
    const isActive = active.toString() === "on";

    mutation.mutate({ ...rest, active: isActive });
  };

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className='bg-blue-600' >Add Employee</Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450, overflow: 'unset' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Title>Add Employee</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Please enter the following information to add a new employee.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                  First Name
                </Text>
                <TextField.Input
                  size="2"
                  placeholder="First Name"
                  {...register('first_name', { required: 'Name is required' })}
                  className={`border ${formState.errors.first_name ? 'border-red-500' : 'border-gray-300'
                    } p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500`}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                  Last Name
                </Text>
                <TextField.Input
                  size="2"
                  placeholder="Last Name"
                  {...register('last_name', { required: 'Name is required' })}
                  className={`border ${formState.errors.first_name ? 'border-red-500' : 'border-gray-300'
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
                  {...register('home_address')}
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
                Create Employee
              </Button>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
