// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
    const skills = [
        "Core Java", "Advanced Java", "React JS", "HTML5", "CSS3", "JavaScript", "SQL", "Spring Framework",
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
