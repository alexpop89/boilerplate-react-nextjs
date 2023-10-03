export default {
    input: {
        options: {
            administrator: 'Administrator',
            user: 'Benutzer',
            guest: 'Gast'
        },
        label: {
            email: 'E-Mail',
            password: 'Passwort',
            rememberMe: 'Angemeldet bleiben',
            agreeToS: 'Ich stimme zu, meine Seele an SFAW zu verkaufen',
            firstName: 'Vorname',
            addressLine1: 'Adresse Zeile 1',
            addressLine2: 'Adresse Zeile 2',
            postalCode: 'Postleitzahl',
            telephone: 'Telefonnummer'
        },
        placeholder: {
            email: 'email@beispiel.com',
            password: 'Dein Passwort',
            firstName: 'Johann',
            addressLine1: 'Adresse Zeile 1',
            addressLine2: 'Adresse Zeile 2',
            postalCode: 'Postleitzahl',
            telephone: 'Telefonnummer'
        },
        errors: {
            requiredField: 'Dieses Feld ist erforderlich!',
            invalidEmail: 'Bitte gib eine gültige E-Mail-Adresse ein!',
            invalidPassword: 'Dein Passwort muss mindestens ein Flugzeug, eine Kuh und ein Huhn gleichzeitig sein!',
            minCharacters: 'Muss mindestens {minLength} Zeichen haben',
            maxCharacters: 'Darf {maxLength} Zeichen nicht überschreiten',
            minDigits: 'Muss mindestens {minLength} Ziffern haben',
            maxDigits: 'Darf {maxLength} Ziffern nicht überschreiten',
            onlyNameCharacters: 'Darf nur Buchstaben, Punkte, Leerzeichen oder Bindestriche enthalten'
        }
    },
    login: {
        title: 'Dies ist der Titel der Anmeldeseite',
        form: {
            title: 'Hier anmelden',
            button: 'Anmelden',
        }
    },
    signup: {
        title: 'Dies ist der Titel der Registrierungsseite',
        form: {
            title: 'Konto erstellen',
            button: 'Registrieren',
        }
    },
    common: {
        appTitle: 'Grundgerüst',
        features: 'Funktionen',
        aboutUs: 'Über uns',
        loremIpsum: `Es gab einmal einen Darius hier, Seine Hobbys, ja die hatten Flair. Mit Gitarre in der Hand, Fährt er durch das ganze Land, Und am Börsemarkt, da war er sehr klär!`
    },
    contact: {
        contactUs: 'Kontaktiere uns',
        contactUsWithEmail: 'Schreib uns eine E-Mail an: <a href="mailto:{email}">{email}</a>'
    },
    home: {
        title: 'Startseite',
        welcome: 'Willkommen!',
        nested: {
            translations: 'Übersetzungen'
        }
    }
} as const;