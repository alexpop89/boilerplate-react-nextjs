export default {
    input: {
        options: {
            administrator: 'Administrator',
            user: 'User',
            guest: 'Guest'
        },
        label: {
            email: 'Email',
            password: 'Password',
            rememberMe: 'Remember me',
            agreeToS: 'I agree to sell my soul to SFAW',
            firstName: 'First Name',
            addressLine1: 'Address Line 1',
            addressLine2: 'Address Line 2',
            postalCode: 'Postal Code',
            telephone: 'Phone number'
        },
        placeholder: {
            email: 'email@example.com',
            password: 'Your password',
            firstName: 'John',
            addressLine1: 'Address Line 1',
            addressLine2: 'Address Line 2',
            postalCode: 'Postal Code',
            telephone: 'Phone number'
        },
        errors: {
            requiredField: 'This field is required!',
            invalidEmail: 'Please input a valid email address!',
            invalidPassword: 'Your password must meet the be at least an airplane, a cow and a chicken at the same time!',
            minCharacters: 'Must be at least {minLength} characters',
            maxCharacters: 'Must not exceed {maxLength} characters',
            minDigits: 'Must be at least {minLength} digits',
            maxDigits: 'Must not exceed {maxLength} digits',
            onlyNameCharacters: 'Must contain only letters, dots, spaces, or dashes'
        }
    },
    login: {
        title: 'This is the login page title',
        form: {
            title: 'Login here',
            button: 'Log in',
        }
    },
    signup: {
        title: 'This is the signup page title',
        form: {
            title: 'Create your account',
            button: 'Sign up',
        }
    },
    common: {
        appTitle: 'Boilerplate',
        features: 'Features',
        aboutUs: 'About us',
        loremIpsum: `There once was a coder named Darius, Whose hobbies were quite complex. He strummed on his guitar, Rode motorcycles far, And turned all his funds into checks!`
    },
    contact: {
        contactUs: 'Contact Us',
        contactUsWithEmail: 'Email us at: <a href="mailto:{email}">{email}</a>'
    },
    home: {
        title: 'Home Page',
        welcome: 'Welcome!',
        nested: {
            translations: 'Translations'
        }
    }
} as const