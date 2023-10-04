import useLocalStorage from "@hooks/use-local-storage";
import {Keys} from "@utils/local-storage-keys";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const useAuth = () => {
    const [token] = useLocalStorage(Keys.USER.TOKEN, '');
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            void router.replace('/login');
        } else {
            setLoading(false);
        }
    }, [token, router]);

    return { loading };
};

export default useAuth;