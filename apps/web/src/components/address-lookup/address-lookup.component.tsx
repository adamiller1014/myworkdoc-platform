'use client';

import { api } from '@/utils/react';
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Text } from '@radix-ui/themes';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface AddressLookupProps {
    setAddressSelected: (address: any) => void;
}

const AddressLookup = ({ setAddressSelected }: AddressLookupProps) => {

    const [key, setKey] = useState("");
    const { control } = useForm({});
    const { data, isLoading } = api.addresses.autocomplete.useQuery(key)
    let autocomplete = null;

    return (
        <div>
            <Controller
                name="address-lookup"
                control={control}
                render={({ }) => {
                    return (
                        <>
                            <label>
                                <Text as="div" size="2" mb="1" weight="bold" aria-required>
                                    Address
                                </Text>
                                <AutoComplete
                                    name="address"
                                    size="medium"
                                    fillMode="solid"
                                    data={data}
                                    loading={isLoading}
                                    textField='formatted'
                                    suggest
                                    onFocus={(e) => {
                                        console.log(e, "___________")
                                    }}
                                    onChange={(e) => {
                                        setKey(e.value)
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
