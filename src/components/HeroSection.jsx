// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero">
            <div className="hero-content">
                <h2>Hello, I'm Sahabas Khan</h2>
                <p>Fresher | B.Tech in Computer Science | Full Stack Java Developer</p>
                <a href="#contact" id='touch'>Get in Touch</a>
            </div>
            <div className="hero-image">
                <img src="/FOR Resume.jpeg" alt="Sahabas Khan" className="profile-pic" />
            </div>
        </section>
    );
};

export default HeroSection;
