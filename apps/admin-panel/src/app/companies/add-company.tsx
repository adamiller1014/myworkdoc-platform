'use client';
import React from 'react';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import { useForm, type SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation';




export default function AddCompany() {

  // const utils = api.useUtils();
  // const router = useRouter();
  // const { handleSubmit, formState } = useForm<CreateCompanyInput>({
  // });

  // const mutation = api.companies.create.useMutation(
  //     {
  //         onSuccess: async (newCompany) => {
  //             await utils.companies.invalidate();
  //             router.push('/companies/' + newCompany.id)
  //         }
  //     }
  // );

  // const onSubmit: SubmitHandler<CreateCompanyInput> = (data) => {
  //     mutation.mutate(data);
  // }

  return <>
    <Dialog.Root>
      <Dialog.Trigger>
        <Button value={'solid'}>Add Company</Button>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450, overflow: 'unset' }}>
        <form >
          <Dialog.Title>Add Company</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Please enter the following information to add a new company.
          </Dialog.Description>
          {/* 
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
                Company
              </Text>
              <Controller
                name="patient"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select  {...field} onInputChange={setCompaniesearch} options={companies} isDisabled={!watch("organization")} />
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
          </Flex> */}

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            {/* <Button type='submit' disabled={!formState.isValid}>Create Company</Button> */}

          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  </>
}