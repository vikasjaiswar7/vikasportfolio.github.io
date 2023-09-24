import React from "react";
import "./About.css";
import { SlCalender } from "react-icons/sl";
import { LiaBuildingSolid } from "react-icons/lia";
function About() {
  return (
    <section className='about-section container' id='about'>
      <div className='about-me'>
        <h2>About Me</h2>
        <p>
          Greetings! I'm Vikas Jaiswar, a dedicated aspiring React web developer
          with a deep passion for creating captivating user interfaces. My
          toolkit includes React, HTML, CSS, and JavaScript – ingredients I use
          to craft immersive digital experiences. I thrive in collaborative
          environments that foster innovation and teamwork. Eager to contribute
          fresh perspectives and eager to learn, I'm excited to join forces and
          contribute to cutting-edge web solutions.
        </p>
      </div>
      <div className='work-experience'>
        <h2>Work Experience</h2>
        <div>
          <div className='up'>
            <p className='p-title'>Web Development</p>
            <p className='p-mode'>1 Year Experience</p>
          </div>
          <div className='down'>
            <p>
              <span>
                <LiaBuildingSolid className='logo' />
              </span>
              AN International opc pvt ltd
            </p>
            <p>
              <span>
                <SlCalender className='logo' />
              </span>
              July 2022 - July 2023
            </p>
          </div>
        </div>
      </div>
      <div className='education'>
        <h2>Education</h2>
        <div className='education-1'>
          <div className='up'>
            <p className='p-title'>Bachelor of Science in Information Technology</p>
            <p className='p-mode'>Full Time</p>
          </div>
          <div className='down'>
            <p>
              <span>
                <LiaBuildingSolid className='logo' />
              </span>
              Mumbai University
            </p>
            <p>
              <span>
                <SlCalender className='logo' />
              </span>
              Jul 2017 - Nav 2020
            </p>
          </div>
        </div>
        <div className='education-2'>
          <div className='up'>
            <p className='p-title'>Science</p>
            <p className='p-mode'>Full Time</p>
          </div>
          <div className='down'>
            <p>
              <span>
                <LiaBuildingSolid className='logo' />
              </span>
              Gyanodaya Vidya Mandir Junior & Senior College
            </p>
            <p>
              <span>
                <SlCalender className='logo' />
              </span>
              Jul 2015 - May 2017
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
