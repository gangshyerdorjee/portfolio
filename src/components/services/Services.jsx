import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>

      <div className="services_container container grid">
        <div className="services_content">
            <div>
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">Web Design <br/> and Development</h3>
            </div>

            <span className="services_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services_buttun-icon"></i></span>

            <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Web Design and Development</h3>
                    <p className="services_modal-description">Services with more than 1years of experience. Providing quality work to clients and companies.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Custom website design tailored to your brand</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Responsive web development for optimal user experience</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Content management system integration (WordPress, etc.)</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">E-commerce solutions for online stores</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Website maintenance and updates</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
            <div>
                <i className="uil uil-arrow services_icon"></i>
                <h3 className="services_title">Graphic <br/> Design</h3>
            </div>

            <span className="services_button"  onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services_buttun-icon"></i></span>

            <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Graphic Design</h3>
                    <p className="services_modal-description">Services with more than 1years of experience. Providing quality work to clients and companies.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Logo design and branding</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Packaging design</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Social media graphics and banners</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Print collateral (business cards, brochures, flyers, etc.)</p>
                        </li>

                        {/* <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Design and mockups of product for companies.</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
            <div>
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">UI/UX <br/> Design</h3>
            </div>

            <span className="services_button"  onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services_buttun-icon"></i></span>

            <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">UI/UX Design</h3>
                    <p className="services_modal-description">Services with more than 1years of experience. Providing quality work to clients and companies.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Creation of visually appealing and intuitive user interfaces</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Wireframing and prototyping of UI elements and layouts</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Icon and graphic design for UI components</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">User research and persona development</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Information architecture and user flow mapping</p>
                        </li>
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Interaction design and usability testing</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services