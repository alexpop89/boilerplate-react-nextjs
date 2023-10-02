import {FC, ReactNode, useEffect, useState} from "react";

import {useRouter} from "next/router";
import LocalStorage, {Keys} from "@utils/local-storage";

import './style.scss'


type AuthPageProps = {
    children: ReactNode;
};

const withAuth = function(WrappedComponent: FC<AuthPageProps>) {
    // eslint-disable-next-line react/display-name
    return (props: any) => {
        const [loading, setLoading] = useState(true);
        const router = useRouter();

        useEffect(() => {
            const userToken = LocalStorage.get(Keys.USER.TOKEN);

            if (!userToken) {
                void router.replace('/login');
            } else {
                setLoading(false);
            }
        }, [router]);

        if (loading) {
            return null;  // Or a fancy spinner
        }

        return <WrappedComponent {...props}>
            {props.children}
        </WrappedComponent>;
    };
}

const AuthPage: FC<AuthPageProps> = (props: AuthPageProps) => {
    return (
        <main>
            {props.children}
        </main>
    )
};

export default withAuth(AuthPage);