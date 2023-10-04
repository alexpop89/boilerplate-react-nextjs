import {useScopedI18n} from "locales/client";
import React, {ReactElement} from 'react';
import './style.scss';

type LabelProps = {
    forId: string;
    children: ReactElement | string
};

const Label: React.FC<LabelProps> = (props: LabelProps) => {
    const t = useScopedI18n('input');
    return (
        <label className="custom-label" htmlFor={props.forId}>
            {props.children}
        </label>
    );
};

export default Label;