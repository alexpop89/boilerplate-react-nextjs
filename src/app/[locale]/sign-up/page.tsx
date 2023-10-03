'use client'

import Checkbox from "@components/checkbox";
import Input from "@components/input";
import Select from "@components/select";
import AddressInputGroup from "@containers/address-input-group";
import Form from "@containers/form";
import Page from "@containers/page";
import {emailInputValidation, nameValidation, passwordInputValidation, phoneValidation} from "@utils/validation";
import {useScopedI18n} from "locales/client";
import {FC, useCallback, useMemo} from "react";
import {FieldValues} from "react-hook-form";

import './style.scss'

type SignUpPageProps = {

};

const SignUpPage: FC<SignUpPageProps> = (props: SignUpPageProps) => {
    const t = useScopedI18n('signup')
    const tInput = useScopedI18n('input')

    const onSubmit = useCallback((values: FieldValues) => {
        console.debug(values)
    }, [])

    const roleOptions = useMemo(() => {
        return [
            { key: 'admin', label: 'input.options.administrator' },
            { key: 'user', label: 'input.options.user' },
            { key: 'guest', label: 'input.options.guest' }
        ];
    }, [])

    return (
        <Page name={'signup'} title={t('title')}>
            <Form buttonLabel={'signup.form.button'} onSubmit={onSubmit} title={'signup.form.title'}>
                <Input
                    id={'firstName'}
                    label={true}
                    autoComplete="given-name"
                    name="firstName"
                    type="text"
                    validation={nameValidation}
                    placeholder={tInput('placeholder.firstName')}
                />
                <Input
                    id={'email'}
                    label={true}
                    autoComplete="email"
                    name="email"
                    type="email"
                    validation={emailInputValidation}
                    placeholder={tInput('placeholder.email')}
                />
                <Select
                    id="role"
                    label={true}
                    name="role"
                    options={roleOptions}
                    validation={{ required: true }}
                />
                <Input
                    id={'password'}
                    label={true}
                    autoComplete="current-password"
                    name="password"
                    type="password"
                    validation={passwordInputValidation}
                    placeholder={tInput('placeholder.password')}
                />
                <Input
                    id={'telephone'}
                    label={true}
                    autoComplete="tel"
                    name="telephone"
                    type="tel"
                    validation={phoneValidation}
                    placeholder={tInput('placeholder.telephone')}
                />
                <AddressInputGroup />
                <Checkbox id={"agreeToS"} name={'agreeToS'} label={true} validation={{required: 'requiredField'}}></Checkbox>
            </Form>
        </Page>
    )
};

export default SignUpPage;