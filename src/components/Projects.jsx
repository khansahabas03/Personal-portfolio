// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
    const projectList = [
        { title: "E-commerce Shopping Cart", description: "React JS shopping cart with filtering." },
        { title: "Employee Management Web Application", description: "A JSP and SQL-based app for managing employee details." },
        { title: "Timetable Manager", description: "IoT project to automate scheduling tasks." },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
