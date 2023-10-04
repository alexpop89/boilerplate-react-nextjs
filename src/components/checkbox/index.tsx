import InputError from "@components/input-error";
import Label from "@components/label";
import useCustomField from "@hooks/use-custom-field";
import {useScopedI18n} from "locales/client";
import React, {InputHTMLAttributes, useId} from 'react';
import './style.scss';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label?: boolean;
    name: string;
    validation?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, validation, ...props }) => {
    const t = useScopedI18n('input');
    const { customRegister, customErrors } = useCustomField(name, validation);
    const id = useId()

    return (
        <div className="checkbox-wrapper">
            <input {...customRegister} {...props} type="checkbox" id={id}/>
            {label && <Label forId={id}>{t(`label.${name}` as any)}</Label>}
            {customErrors && <InputError forId={id}>{t(`errors.${customErrors.message}` as any)}</InputError>}
        </div>
    );
};

export default Checkbox;