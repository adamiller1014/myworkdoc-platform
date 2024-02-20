'use client';

import { api } from '@/utils/react';
import { CreateCompanyInput } from '@myworkdoc/api/src/router/routes/companies/company-types';
import { AutoComplete, ComboBox } from '@progress/kendo-react-dropdowns';
import { Text, TextField } from '@radix-ui/themes';
import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface AddressLookupProps {
    setAddress: (address: any) => void;
}

const AddressLookup = ({ setAddress }: AddressLookupProps) => {

    const [addressesList, setAddressesList] = useState<String[]>([]);
    const { register } = useForm<CreateCompanyInput>();
    const [key, setkey] = useState("");
    const { control } = useForm({});
    const data = api.addresses.fetchingByQuery.useQuery(key)

    useEffect(() => {
        if (data?.isFetched && data?.data?.length > 0) {
            let arr: String[] = [];
            data?.data?.map((item: any) => {
                arr.push(`${item?.address?.formatted} `)
                // arr.push()
            })
            setAddressesList(arr)
        }

    }, [data?.isFetched])


    const onSubmitHandle = (value: string) => {
        if (value !== "" && value !== null && value !== undefined)
            setkey(value);
    }


    return (
        <div>
            <Controller
                name="address_lookup"
                control={control}
                render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => {
                    return (
                        <>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                                    Address
                                </Text>
                                <ComboBox
                                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                                    data={addressesList}
                                    filterable
                                    loading={!data?.isFetched}
                                    suggest
                                    onChange={(e) => {
                                        setAddress(e.value)
                                    }}
                                    placeholder="key word"
                                    onFilterChange={(e) => {
                                        onSubmitHandle(e?.filter?.value)
                                    }}
                                />

                            </label>
                        </>
                    )
                }}
            />

        </div>
    );
};

export default AddressLookup;
