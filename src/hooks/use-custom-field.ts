import {useFormContext} from 'react-hook-form';

type ValidationRules = {
    required?: string | boolean;
    pattern?: RegExp | { value: RegExp; message: string };
    // add other validation rules here
    // ...
};

const useCustomField = (fieldName: string, validation: ValidationRules) => {
    const { register, formState: {errors} } = useFormContext(); // Note that useFormContext's generic can be typed for more specificity

    return {
        customRegister: register(fieldName, validation),
        customErrors: errors[fieldName]
    };
};

export default useCustomField;