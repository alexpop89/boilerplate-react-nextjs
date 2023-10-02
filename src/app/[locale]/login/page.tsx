import { FC, ReactNode } from "react";
import Page from "@containers/page";

import './style.scss'

type LoginProps = {

};

const Login: FC<LoginProps> = (props: LoginProps) => {
    return (
        <Page name={'Login'} title={'this is my title'}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor erat eleifend nunc eleifend pharetra. Phasellus aliquam ante quis diam malesuada mollis. Fusce rhoncus mollis lorem quis molestie. Curabitur laoreet, lectus sed placerat porttitor, libero justo molestie mi, sed condimentum nulla enim at metus. Sed nec elementum odio, in tincidunt leo. Nam accumsan mauris dignissim metus convallis convallis. Etiam eros magna, bibendum ut ex nec, volutpat semper mauris. Nullam turpis orci, egestas ut risus eu, volutpat euismod eros. Curabitur mollis id magna vel efficitur. Fusce sed lectus lorem. Cras in dui nec diam accumsan ullamcorper sit amet id libero.
            </p>
        </Page>
    )
};

export default Login;