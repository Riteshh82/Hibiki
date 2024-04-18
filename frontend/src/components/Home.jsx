import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { RoughNotation } from "react-rough-notation";
import {Link}  from 'react-router-dom';
import Arrow from './Arrow';
import Header from './Header';
import Footer from './Footer';


function Home() {
  return (
    <div>
      <Header/>
      <>
      <Fade Fade direction="up" duration={1000}>
        
        <div className="mx-auto sm:p-10 mb-0 pb-0 flex justify-center flex-col home max-w-[650px] md:max-w-1xl lg:max-w-6xl mt-[2rem] sm:mt-[0]">
          <div
            className="intro_text text-[3.5rem] md:text-[7vw]"
            data-text="I'm Ritesh Yadav"
          >
            I&apos;m Ritesh Yadav
          </div>

          <div className="max-w-4xl">
            <p className="text-gray-600 size">
              MERN Stack Developer 💻 , UX architect and{" "}
              <span className='p-1 text-nowrap'>
              <RoughNotation
                type="highlight"
                show={true}
                color="#F0DB4F"
                animationDelay={300}
                animationDuration={500}
                padding={10}
                className="highlight__text text-[#323330]"
              >
                Quality Assurance (QA)
              </RoughNotation>{" "}
              </span>
              engineer, <span className="highlight__text">Developer</span>{" "}
              Expert, I also love{" "}
              <span className="highlight__text">Spirituality</span>, listening
              to good <span className="highlight__text">Music</span> and sharing
              the good news with people.{" "}
            </p>

            <p className="mt-[2rem] text-gray-600 size">
              A minimalist obsessed with the web world, exploring design with
              curiosity. View my{" "}
              <a href="/project" aria-label="Go to Projects Page">
                <button className="btn" type="button" tabIndex="-1">
                  Projects
                </button>
              </a>
              ,{" "}

              <a href="/Ritesh_Yadav_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Resume Page" title="Resume Page">
                <button className="btn" type="button" tabIndex="-1">
                  Resume
                </button>
              </a>
              ,{" "}
              <a href="/contact" aria-label="Go to Contact Page">
                <button className="btn" type="button" tabIndex="-1">
                  Contact Me
                </button>
              </a>
              , or send me an email at{" "}
              <a href="mailto:riteshky19@gmail.com">
                <button
                  className="btn"
                  title="Email"
                  type="button"
                  aria-label="Send an email"
                >
                  riteshky19@gmail.com
                </button>
              </a>
              .{" "} 
            </p>

            <Arrow className='cursor-grab' link="https://github.com/riteshh82" title='Github'/>
          </div>
      
        </div>
        </Fade>
        <Footer/>
      </>
    </div>
  )
}

export default Home