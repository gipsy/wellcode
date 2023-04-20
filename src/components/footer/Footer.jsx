import React from 'react'
import './footer.css'

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">WellCode</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://instagram.com" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://dribbble.com" className="footer__social-link" target="_blank">
            <i className="bx bxl-dribbble"></i>
          </a>
          <a href="https://github.com/gipsy" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <div className="footer__copy">&#169; WellCode. All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
