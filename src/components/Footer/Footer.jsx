import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import NavbarLogo from "../../assets/{vikas_logo}.png";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer className='container'>
      <audio className='audio-element'>
        <source src='https://assets.coderrocketfuel.com/pomodoro-times-up.mp3'></source>
      </audio>
      <div
        className='footer-1'
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <img src={NavbarLogo} />
        <div>
          <span className='info-1'>
            <a href="tel: +91 8286813701"> +91 8286813701</a></span>
          <span className='info-2'><a href="mailto: vikasjaiswar130@gmail.com">vikasjaiswar130@gmail.com</a> </span>
          <span>
            <a
              href='https://www.linkedin.com/in/vikas-jaiswar-418541149/'
              target='_blank'
            >
              <AiFillLinkedin className='footer-social-icon' />
            </a>
          </span>
          <span>
            <a href='https://github.com/vikasjaiswar7' target='_blank'>
              <AiFillGithub className='footer-social-icon' />
            </a>
          </span>
        </div>
      </div>
      <div className='footer-2'>
        <h4>
          Designed and built by <span>Vikas Jaiswar</span>
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
