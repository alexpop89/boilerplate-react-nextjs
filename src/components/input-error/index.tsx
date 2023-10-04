import React, {ReactElement} from 'react';
import './style.scss';

type InputErrorProps = {
    forId: string
    children: ReactElement | string
};

const InputError: React.FC<InputErrorProps> = (props: InputErrorProps) => {
    return (
        <span className="error" data-for={props.forId}>
            {props.children}
        </span>
    );
};

export default InputError;