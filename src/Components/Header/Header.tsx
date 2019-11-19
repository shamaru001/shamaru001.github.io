import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header id="header">
            <section id="title">
                <span> WELCOME TO MY PORTFOLIO </span>
            </section>
            <nav id="menu">
                <div className="menu_item">
                    <a href="#portfolio">PORTFOLIO</a>
                </div>
                <div className="menu_item">
                    <a href="#blog">BLOG</a>
                </div>
                <div className="menu_item">
                    <a href="#contact">CONTACT</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
