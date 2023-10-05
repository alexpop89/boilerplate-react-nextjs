'use client'

import Checkbox from "@components/checkbox";
import Input from "@components/input";
import Form from "@containers/form";
import Page from "@containers/page";
import {usersApi} from "@services/users";
import {emailInputValidation, passwordInputValidation} from "@utils/validation";
import {RootState} from 'app/store';
import {useScopedI18n} from "locales/client";
import {FC, useCallback} from "react";
import {FieldValues} from "react-hook-form";
import {useAppSelector} from "redux/hooks";

import './style.scss'

type LoginProps = {};


const Login: FC<LoginProps> = (props: LoginProps) => {
    const t = useScopedI18n('login')
    const tCommon = useScopedI18n('common')
    const tInput = useScopedI18n('input')
    const user = useAppSelector((state: RootState) => state.user);

    const [login, {isLoading, isError, data}] = usersApi.useLoginMutation();
    const onSubmit = useCallback((values: FieldValues) => {
        login({email: values.email, password: values.password})
    }, [login])

    return (
        <Page name={'login'} title={t('title')}>
            <p>
                {tCommon('loremIpsum')}
            </p>
            <Form buttonLabel={'login.form.button'} onSubmit={onSubmit} title={'login.form.title'}>
                <Input
                    id={'email'}
                    label={true}
                    autoComplete="email"
                    name="email"
                    type="email"
                    validation={emailInputValidation}
                    placeholder={tInput('placeholder.email')}
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
                <Checkbox id={"rememberMe"} name={'rememberMe'} label={true}
                          validation={{required: 'requiredField'}}></Checkbox>
            </Form>
        </Page>
    )
};

export default Login;