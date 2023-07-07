import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">G-Dorjee</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/04_gdt/" className="footer_social-link" target="_self">
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="https://twitter.com/g_dorjee" className="footer_social-link" target="_self">
                    <i class="bx bxl-twitter"></i>
                </a>

                <a href="https://web.whatsapp.com/" className="footer_social-link" target="_self">
                    <i class="bx bxl-whatsapp"></i>
                </a>
            </div>

            <span className="footer_copy">&#169; G-Dorjee. All rights reserved</span>
        </div>
    </footer>
  );
};

export default Footer;