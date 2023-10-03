export const emailInputValidation = {
    required: 'requiredField',
    pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'invalidEmail'
    }
}

export const passwordInputValidation = {
    required: 'requiredField',
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, //At least 8 characters | At least one uppercase letter | At least one lowercase letter | At least one number | At least one special character
        message: 'invalidPassword'
    }
}

export const nameValidation = {
    required: 'requiredField',
    minLength: {
        value: 2,
        message: 'minCharacters'
    },
    maxLength: {
        value: 50,
        message: 'maxCharacters'
    },
    pattern: {
        value: /^[A-Za-zÀ-ÖØ-öø-ÿ .-]+$/,
        message: 'onlyNameCharacters'
    }
};

export const phoneValidation = {
    required: 'requiredField',
    minLength: {
        value: 10,
        message: 'minDigits'
    },
    maxLength: {
        value: 15,
        message: 'maxDigits'
    },
    pattern: {
        value: /^[0-9+\-().\s]+$/,
        message: 'onlyValidCharacters'
    }
};