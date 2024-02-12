'use client';
import React from 'react';
import { Button, Dialog } from '@radix-ui/themes';





export default function AddCase() {

  // const utils = api.useUtils();
  // const router = useRouter();
  // const { control, handleSubmit, getValues, formState, watch } = useForm<CreateCaseInput>({
  // });

  // const mutation = api.cases.create.useMutation(
  //   {
  //     onSuccess: (newCase) => {
  //       utils.cases.invalidate();
  //       router.push('/cases/' + newCase.id)
  //     }
  //   }
  // );

  const [orgSearch, setOrgSearch] = React.useState('');
  const [employeeSearch, setEmployeeSearch] = React.useState('');


  // const { data: organizations } = api.organizations.list.useQuery({ search: orgSearch });
  // const { data: employees } = api.employees.list.useQuery({ search: employeeSearch, orgId: watch("organization.value") });
  // const { data: injuryTypes } = api.injuryTypes.list.useQuery()
  // const { data: bodyParts } = api.bodyParts.list.useQuery();
  // const { data: painLevels } = api.painLevels.list.useQuery();


  // const onSubmit: SubmitHandler<CreateCaseInput> = (data) => {
  //   mutation.mutate(data);
  // }

  return <>
    <Dialog.Root>
      <Dialog.Trigger>
        <Button value={'solid'}>Add Case</Button>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450, overflow: 'unset' }}>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <Dialog.Title>Add Case</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Please enter the following information to add a new case.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Organization
              </Text>
              <Controller
                name="organization"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select  {...field} onInputChange={setOrgSearch} options={organizations} />
                )}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Employee
              </Text>
              <Controller
                name="patient"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select  {...field} onInputChange={setEmployeeSearch} options={employees} isDisabled={!watch("organization")} />
                )}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Injury Type
              </Text>
              <Controller
                name="injuryType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select  {...field} options={injuryTypes} isDisabled={!watch("organization")} />
                )}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Body Part
              </Text>
              <Controller
                name="bodyPart"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select  {...field} options={bodyParts} isDisabled={!watch("organization")} />
                )}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Pain Level
              </Text>
              <Controller
              
                name="painLevel"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} options={painLevels} isDisabled={!watch("organization")} />
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
            <Button type='submit' disabled={!formState.isValid}>Create Case</Button>

          </Flex>
        </form> */}
      </Dialog.Content>
    </Dialog.Root>
  </>
}