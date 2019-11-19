import React from 'react';
import './Home.css'
import AboutMe from "../AboutMe/AboutMe";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

const Home: React.FC = () => {
    return (
        <section id="home">
            <div id="about">
                <AboutMe />
            </div>
            <div id="social_media">
                <SocialNetworks />
            </div>
        </section>
    );
};

export default Home;
