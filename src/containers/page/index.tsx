import {FC, Fragment, ReactNode} from "react";

import AuthPage from "@containers/page/auth-page";
import PublicPage from "@containers/page/public-page";

import './style.scss'
import Head from "next/head";

type PageProps = {
    title?: String
    name?: String
    auth?: boolean;
    children: ReactNode;
};

const Page: FC<PageProps> = (props: PageProps) => {
    if (props.auth) {
        return (
            <div className="auth-page page-container" data-name={props.name}>
                <AuthPage>
                    <h1>{props.title}</h1>
                    {props.children}
                </AuthPage>
            </div>
        )
    }

    return (
        <Fragment>
            <Head>
                <title>{props.title}</title>
            </Head>
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