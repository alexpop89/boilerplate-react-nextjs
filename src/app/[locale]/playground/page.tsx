'use client'

import Checkbox from "@components/checkbox";
import DatePicker from "@components/datepicker";
import FileInput from "@components/file-input";
import Input from "@components/input";
import RadioButtonGroup from "@components/radio-button-group";
import Select from "@components/select";
import TimeInput from "@components/time-input";
import Form from "@containers/form";
import Page from "@containers/page";
import {emailInputValidation, nameValidation, passwordInputValidation, phoneValidation} from "@utils/validation";
import React, {FC, useCallback, useMemo} from "react";
import {FieldValues} from "react-hook-form";

import './style.scss'

type SignUpPageProps = {

};

const SignUpPage: FC<SignUpPageProps> = (props: SignUpPageProps) => {
    const onSubmit = useCallback((values: FieldValues) => {
        console.debug(values)
    }, [])

    const roleOptions = useMemo(() => {
        return [
            { key: 'option1', label: 'option1' },
            { key: 'option2', label: 'option2' },
            { key: 'option3', label: 'option3' }
        ];
    }, [])

    const radioOptions = useMemo(() => {
        return [
            { key: 'yes', label: 'yes' },
            { key: 'no', label: 'no' },
            { key: 'maybeso', label: 'maybe so' }
        ];
    }, [])

    return (
        <Page name={'playground'}>
            <Form buttonLabel={'label'} onSubmit={onSubmit} title={'form title'}>
                <Input
                    label={true}
                    name="textInput"
                    type="text"
                    validation={nameValidation}
                    placeholder={'placeholder'}
                />
                <Input
                    label={true}
                    name="number"
                    type="number"
                    validation={{ required: 'requiredField' }}
                    placeholder={'number'}
                />
                <Input
                    label={true}
                    name="emailAddress"
                    type="email"
                    validation={emailInputValidation}
                    placeholder={'emailAddress'}
                />
                <Select
                    label={true}
                    name="select"
                    options={roleOptions}
                    validation={{ required: true }}
                />
                <Input
                    label={true}
                    name="pass"
                    type="password"
                    validation={passwordInputValidation}
                    placeholder={'pass'}
                />
                <RadioButtonGroup
                    label={true}
                    name={'radio'}
                    validation={{ required: 'requiredField' }}
                    options={radioOptions}
                />
                <Input
                    label={true}
                    name="phone"
                    type="tel"
                    validation={phoneValidation}
                    placeholder={'phone'}
                />
                <Checkbox name={'checkbox'} label={true} validation={{required: 'requiredField'}}></Checkbox>
                <DatePicker
                    label={true}
                    name="birthday"
                    validation={{required: true}}
                    placeholder={'birthday'}
                />
                <TimeInput
                    label={true}
                    name="time"
                    validation={{required: true}}
                    placeholder={'time'}
                />
                <FileInput
                    name={"file"}
                    label={true}
                    validation={{ required: 'requiredField' }}
                />
            </Form>
        </Page>
    )
};

export default SignUpPage;