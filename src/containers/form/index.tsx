'use client'

import Button from "@components/button";
import {useI18n} from "locales/client";
import React, {FC, ReactNode} from "react";

import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";
import './style.scss'


type FormProps = {
    children: ReactNode
    onSubmit: SubmitHandler<FieldValues>,
    title?: string,
    buttonLabel: string
};

const Form: FC<FormProps> = (props: FormProps) => {
    const t = useI18n()
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(props.onSubmit)} className='form'>
                <h2>{t(props.title as any || '', {})}</h2>
                {props.children}
                <Button type={"submit"} label={t(props.buttonLabel as any || 'common.submit', {})}></Button>
            </form>
        </FormProvider>
    );
};

export default Form;