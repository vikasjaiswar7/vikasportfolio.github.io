import React, { useState } from "react";
import NavSocialLogo from "../../assets/Group 1.png";
import NavbarLogo from "../../assets/{vikas_logo}.png";
import "./Navbar.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleNavigationClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className='nav'>
      <div className='nav-content container'>
        <div
          className='logo'
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <img src={NavbarLogo} alt='' />
        </div>

        <div className='group'>
          <ul
            id='nav-links'
            className={`${clicked ? "#nav-links active" : "#nav-links"}`}
          >
            <li>
              <Link
                to='home'
                smooth={true}
                duration={1000}
                offset={-100}
                onClick={handleNavigationClick}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to='about'
                smooth={true}
                duration={1000}
                offset={-70}
                onClick={handleNavigationClick}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to='tech-stack'
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}
              >
                TECH STACK
              </Link>
            </li>
            <li>
              <Link
                to='projects'
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={handleNavigationClick}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to='contact'
                smooth={true}
                duration={1000}
                offset={-70}
                onClick={handleNavigationClick}
              >
                CONTACT
              </Link>
            </li>
            <li className='cv'>
              {/* <a href='https://drive.google.com/uc?export=download&id=18wZCwQN3nwOR_AiXACQlTyyJ3sOafLi6'>
                CV
              </a> */}
              <a href='https://drive.google.com/file/d/1xYinIEZAiufaf2x-Y_U4MMSIwi2XvZaO/view?usp=drive_link' target="_blank">
                CV
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/vikas-jaiswar-418541149/'
                target='_blank'
                onClick={handleNavigationClick}
              >
                <AiFillLinkedin className='linkedin-icon' />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/vikasjaiswar7'
                target='_blank'
                onClick={handleNavigationClick}
              >
                <AiFillGithub className='github-icon' />
              </a>
            </li>
          </ul>
          <div className='mobile'>
            <p className='responsive-contact last-para'>
              <a href='https://drive.google.com/uc?export=download&id=18wZCwQN3nwOR_AiXACQlTyyJ3sOafLi6'>
                CV
              </a>
            </p>
            <p className='responsive-contact last-para'>
              <Link to='contact' smooth={true} duration={1000} offset={-70}>
                Contact
              </Link>
            </p>
            <p className='last-para' onClick={handleClick}>
              {clicked ? <RxCross2 id='close' /> : <FaBars id='open' />}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
