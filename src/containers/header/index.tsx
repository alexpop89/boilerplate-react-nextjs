// @ts-ignore
import {NavOption} from "@data-types/nav-option";
import {FC} from "react";

import './style.scss'

type HeaderProps = {
    navOptions: NavOption[];
};

const Header: FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header>
            <nav>
                <ul>
                    {props.navOptions.map((option, index) => (
                        <li key={index}>
                            <a href={option.route}>{option.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Header;