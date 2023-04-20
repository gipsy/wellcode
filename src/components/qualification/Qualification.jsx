import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState( 1 );

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleTab(1)}
            className={`qualification__button button--flex ${toggleState === 1 ? "qualification__active" : ""}`}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            onClick={() => toggleTab(2)}
            className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={`qualification__content ${toggleState === 1 ? "qualification__content-active" : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">English preparation courses</h3>
                <span className="qualification__subtitle">Thailand - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">upWork platform freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2011 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">upWork platform freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2011 - Present
                </div>
              </div>
            </div>
          </div>

          <div className={`qualification__content ${toggleState === 2 ? "qualification__content-active" : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Work experience</h3>
                <span className="qualification__subtitle">Thailand - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">upWork platform freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2011 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">upWork platform freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2011 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Qualification
