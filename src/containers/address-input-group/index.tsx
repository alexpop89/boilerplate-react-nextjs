import Input from "@components/input";
import {useScopedI18n} from "locales/client";
import React, {Fragment} from 'react';
import './style.scss';

type AddressInputGroupProps = {

}

const AddressInputGroup: React.FC<AddressInputGroupProps> = (props: AddressInputGroupProps) => {
    const tInput = useScopedI18n('input')

    return <Fragment>
        <Input
            id={'addressLine1'}
            label={true}
            autoComplete="address-line1"
            name="addressLine1"
            type="text"
            validation={{ required: false}}
            placeholder={tInput('placeholder.addressLine1')}
        />
        <Input
            id={'addressLine2'}
            label={true}
            autoComplete="address-line2"
            name="addressLine2"
            type="text"
            validation={{ required: false}}
            placeholder={tInput('placeholder.addressLine2')}
        />
        <Input
            id={'postalCode'}
            label={true}
            autoComplete="postal-code"
            name="postalCode"
            type="text"
            validation={{ required: false}}
            placeholder={tInput('placeholder.postalCode')}
        />
    </Fragment>
};

export default AddressInputGroup;