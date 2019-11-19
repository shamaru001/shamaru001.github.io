import React from 'react';
import './SocialNetworks.css';


const SocialNetworks: React.FC = () => {
    return (
        <div id="social_networks">
            <div className="sn">
                <a href="https://www.facebook.com/shamaru.primera"><span>Facebook</span> </a>
            </div>
            <div className="sn">
                <a href="https://twitter.com/shamaru_01"><span>Twitter</span> </a>
            </div>
            <div className="sn">
                <a href="https://www.linkedin.com/in/shamaruprimera/"><span>LinkedIn</span> </a>
            </div>
            <div className="sn">
                <a href="https://github.com/shamaru001"><span>Github</span> </a>
            </div>
        </div>
    );
};

export default SocialNetworks;
