import useCustomField from "@hooks/use-custom-field";
import {useScopedI18n} from "locales/client";
import React, {InputHTMLAttributes} from 'react';
import './style.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: boolean;
    name: string;
    validation?: any;
}

const Input: React.FC<InputProps> = ({label, name, validation, ...props}) => {
    const t = useScopedI18n('input')
    const {customRegister, customErrors} = useCustomField(name, validation);

    return (
        <div className="input-wrapper">
            {label && <label htmlFor={props.id}>{t(`label.${name}` as any)}</label>}
            <input {...customRegister} {...props} />
            {customErrors && <span className="error">
                {/*@ts-ignore*/}
                {t(`errors.${customErrors.message}` as any, {[customErrors.type as string]: validation[customErrors.type]?.value})}
            </span>}
        </div>
    );
};

export default Input;