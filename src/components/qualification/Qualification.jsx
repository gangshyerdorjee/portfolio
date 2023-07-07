import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div 
                className={
                    toggleState === 1 
                    ? "qualification_button qualification_active button--flex" 
                    : "qualification_button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification_icon"></i>
                    Education
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification_button qualification_active button--flex" 
                    : "qualification_button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification_icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification_section">
                <div 
                className={
                    toggleState === 1
                    ? "qualification_content qualification_content-active" 
                    : "qualification_content"
                }
                >
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Bachelor in Computer</h3>
                            <span className="qualification_subtitle">Aadim National College</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Plus 2</h3>
                            <span className="qualification_subtitle">GoldenGate International College</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2016 - 2018
                            </div>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">SLC</h3>
                            <span className="qualification_subtitle">Shree Mahabauddha Secondary School</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2005 - 2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            {/* <span className="qualification_line"></span> */}
                        </div>

                        <div>
                            <h3 className="qualification_title">Mern Stack</h3>
                            <span className="qualification_subtitle">Dursikshya Transforming Education</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2022
                            </div>
                        </div>
                    </div>
                </div>


                <div className={
                    toggleState === 2
                    ? "qualification_content qualification_content-active" 
                    : "qualification_content"
                }>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Mern Stack</h3>
                            <span className="qualification_subtitle">Dursikshya Transforming Education</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Frontend Developer</h3>
                            <span className="qualification_subtitle">Unitech IT Solution</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2023
                            </div>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Data Cloud</h3>
                            <span className="qualification_subtitle">GrowByData Services</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            {/* <span className="qualification_line"></span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification