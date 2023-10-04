import InputError from "@components/input-error";
import Label from "@components/label";
import {SelectOption} from "@data-types/select-option";
import useCustomField from "@hooks/use-custom-field";
import {useI18n, useScopedI18n} from "locales/client";
import React, {useId} from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: boolean;
    name: string;
    options: SelectOption[];
    validation?: any;
}

const Select: React.FC<SelectProps> = ({label, name, options, validation, ...props}) => {
    const t = useScopedI18n('input');
    const tAll = useI18n()
    const {customRegister, customErrors} = useCustomField(name, validation);
    const id = useId()

    return (
        <div className="select-wrapper">
            {label && <Label forId={id}>{t(`label.${name}` as any)}</Label>}

            <select {...customRegister} {...props} id={id}>
                {options.map((option) => (
                    <option key={option.key} value={option.key}>
                        {tAll(option.label as any, {})}
                    </option>
                ))}
            </select>

            {customErrors && <InputError forId={id}>
                {/*@ts-ignore*/}
                {t(`errors.${customErrors.message}` as any, {[customErrors.type as string]: validation[customErrors.type]?.value})}
            </InputError>}
        </div>
    );
};

export default Select;