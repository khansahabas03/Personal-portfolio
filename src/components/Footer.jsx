// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <p>
//                 <a href="https://www.linkedin.com/in/sahabaskhan/" target="_blank" rel="noopener noreferrer">
//                     <img src="https://img.icons8.com/?size=100&id=tvG-nQ3s2hZL&format=png&color=000000" alt="LinkedIn" className="footer-icon" />
//                 </a>
//                 <span> | </span>
//                 <a href="https://github.com/khansahabas03" target="_blank" rel="noopener noreferrer">
//                     <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" className="footer-icon" />
//                 </a>
//             </p>
//         </footer>


//     );
// };

// export default Footer;



import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://www.facebook.com/profile.php?id=100009726124345" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/sahabaskhan/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/khansahabas03" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/khan_shahbaz__7/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

