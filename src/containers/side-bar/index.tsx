// @ts-ignore
import {NavOption} from "@types/nav-option";
import React from 'react';

import './style.scss'

type SideBarProps = {
    navOptions: NavOption[];
};

const SideBar: React.FC<SideBarProps> = ({ navOptions }) => {
    return (
        <aside className="side-bar">
            <nav>
                <ul>
                    {navOptions.map((option, index) => (
                        <li key={index}>
                            <a href={option.route}>{option.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;