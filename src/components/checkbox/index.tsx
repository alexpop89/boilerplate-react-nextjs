import useCustomField from "@hooks/use-custom-field";
import {useScopedI18n} from "locales/client";
import React, {InputHTMLAttributes} from 'react';
import './style.scss';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label?: boolean;
    name: string;
    validation?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, validation, ...props }) => {
    const t = useScopedI18n('input');
    const { customRegister, customErrors } = useCustomField(name, validation);

    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" {...customRegister} {...props} />
            {label && <label htmlFor={props.id}>{t(`label.${name}` as any)}</label>}
            {customErrors && <span className="error">{t(`errors.${customErrors.message}` as any)}</span>}
        </div>
    );
};

export default Checkbox;