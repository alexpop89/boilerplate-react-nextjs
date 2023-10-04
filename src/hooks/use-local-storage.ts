import {useEffect, useState} from 'react';

type UseLocalStorageResponse<T> = [T, React.Dispatch<React.SetStateAction<T>>];

/**
 * const [name, setName] = useLocalStorage<string>('user_name_key', 'Alex');
 */
function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageResponse<T> {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Could not parse local storage value for key: ${key}`);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`Could not set local storage key: ${key} to value: ${storedValue}`);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;