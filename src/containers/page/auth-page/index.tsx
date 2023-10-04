'use client'

import useAuth from "@hooks/use-auth";
import {FC, ReactNode} from "react";

import './style.scss'


type AuthPageProps = {
    children: ReactNode;
};

const withAuth = function (WrappedComponent: FC<AuthPageProps>) {
    // eslint-disable-next-line react/display-name
    return (props: any) => {
        const {loading} = useAuth();

        if (loading) {
            return null; // Or a fancy spinner
        }

        return <WrappedComponent {...props}>{props.children}</WrappedComponent>;
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