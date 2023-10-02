import Page from "@containers/page";

import './style.scss'
export default function Index() {
    return (
        <Page name={'index'} title={'this is my index title'}>
            <section id="hero">
                <h2>Welcome to My Site</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, dolore?</p>
            </section>

            <section id="features">
                <h2>Features</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, dolore?</p>
            </section>

            <section id="about">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, dolore?</p>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>Email us at: <a href="mailto:info@example.com">info@example.com</a></p>
            </section>
        </Page>
    )
}
