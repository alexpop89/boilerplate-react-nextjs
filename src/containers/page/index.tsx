'use client'

import AuthPage from "@containers/page/auth-page";
import PublicPage from "@containers/page/public-page";
import {FC, Fragment, ReactNode} from "react";

import './style.scss'

type PageProps = {
    title?: String
    name?: String
    auth?: boolean;
    children: ReactNode;
};

const Page: FC<PageProps> = (props: PageProps) => {
    if (props.auth) {
        return (
            <Fragment>
                <div className="auth-page page-container" data-name={props.name}>
                    <AuthPage>
                        <h1>{props.title}</h1>
                        {props.children}
                    </AuthPage>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="public-page page-container" data-name={props.name}>
                <PublicPage>
                    <h1>{props.title}</h1>
                    {props.children}
                </PublicPage>
            </div>
        </Fragment>
    )
};

export default Page;