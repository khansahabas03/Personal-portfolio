import React from "react";
import './Resume.css'; // Optional CSS for styling if you want

const Resume = () => {
    return (
        <section id="resume">
            <h2>My Updated Resume</h2>
            <a
                href="/Sahabas_Khan_CV_2023P.pdf" target="_blank" rel="noopener noreferrer"
                className="resume-download-button"
            >
                View Resume
            </a>
        </section>
    );
};

export default Resume;
