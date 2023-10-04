import InputError from "@components/input-error";
import Label from "@components/label";
import {RadioOption} from "@data-types/radio-option";
import useCustomField from "@hooks/use-custom-field";
import {useScopedI18n} from "locales/client";
import React, {useId} from 'react';
import './style.scss';

type RadioButtonGroupProps = {
    label?: boolean;
    name: string;
    options: RadioOption[]
    validation?: any;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({label, name, options, validation}) => {
    const t = useScopedI18n('input');
    const {customRegister, customErrors} = useCustomField(name, validation);
    const id = useId();

    return (
        <div className="radio-group-wrapper">
            {label && <Label forId={id}>{t(`label.${name}` as any)}</Label>}
            {options.map((option, index) => (
                <div key={index} className="radio-option">
                    <input
                        id={`${id}-${option.label}`}
                        type="radio"
                        value={option.label}
                        {...customRegister}
                        name={name}
                    />
                    <label htmlFor={`${id}-${option.label}`}>{option.label}</label>
                </div>
            ))}
            {customErrors && <InputError forId={id}>
                {/*@ts-ignore*/}
                {t(`errors.${customErrors.message}` as any, {[customErrors.type as string]: validation[customErrors.type]?.value})}
            </InputError>}
        </div>
    );
};

export default RadioButtonGroup;