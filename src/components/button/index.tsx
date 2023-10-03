import React, {ButtonHTMLAttributes} from 'react';

import './style.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;  // optional onClick
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button {...props}>
            {props.label}
        </button>
    );
};

export default Button;