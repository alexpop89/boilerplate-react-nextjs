'use client'

import {FC, Fragment, ReactNode} from "react";

import './style.scss'

type PublicPageProps = {
    children: ReactNode;
};

const PublicPage: FC<PublicPageProps> = (props: PublicPageProps) => {
    return (
        <main>
            {props.children}
        </main>
    )
};

export default PublicPage;