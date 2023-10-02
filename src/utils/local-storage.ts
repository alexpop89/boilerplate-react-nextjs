export const Keys = {
    USER: {
        TOKEN: 'user.token'
    }
}

class LocalStorageSingleton {
    private static instance: LocalStorageSingleton;
    private constructor() {
        // Private to prevent direct instantiation
    }

    public static getInstance(): LocalStorageSingleton {
        if (!LocalStorageSingleton.instance) {
            LocalStorageSingleton.instance = new LocalStorageSingleton();
        }
        return LocalStorageSingleton.instance;
    }

    public set(key: string, value: any): void {
        if (typeof value === 'object') {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    }

    public get<T>(key: string): T | null {
        const value = localStorage.getItem(key);
        if (value === null) return null;

        try {
            return JSON.parse(value) as T;
        } catch {
            return (value as unknown) as T;
        }
    }
}

export default LocalStorageSingleton.getInstance()