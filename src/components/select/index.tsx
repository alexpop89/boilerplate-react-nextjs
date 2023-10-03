// Define a type for the options
import useCustomField from "@hooks/use-custom-field";
import {SelectOption} from "@types/select-option";
import {useI18n, useScopedI18n} from "locales/client";

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

    return (
        <div className="select-wrapper">
            {label && <label htmlFor={props.id}>{t(`label.${name}` as any)}</label>}

            <select {...customRegister} {...props}>
                {options.map((option, index) => (
                    <option key={index} value={option.key}>
                        {tAll(option.label as any, {})}
                    </option>
                ))}
            </select>

            {customErrors && <span className="error">
                {/*@ts-ignore*/}
                {t(`errors.${customErrors.message}` as any, {[customErrors.type as string]: validation[customErrors.type]?.value})}
            </span>}
        </div>
    );
};

export default Select;