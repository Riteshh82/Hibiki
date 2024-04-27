import React from 'react'
import Header from '../../Header';
import ProjectCard from './ProjectCard';
import { Fade } from 'react-awesome-reveal';
import { RoughNotation } from "react-rough-notation";


function Project() {
 
  return (
   <>
    <Header/>
    <Fade direction="up" duration={1000}>
      <div className="mt-[1rem] mb-[1rem] px-5 flex lg:items-center justify-center">
        <RoughNotation
          show="underline"
          animationDelay={400}
          animationDuration={500}
          className="text-[2.5rem] font-bold"
        >
          Projects
        </RoughNotation>
      </div>
    </Fade>
      <div className=" flex lg:items-center flex-col lg:flex-row lg:gap-[5rem] gap-[5rem] max-w-6xl mx-auto py-[1rem] lg:mt-[1rem] mt-[1rem] mb-[5rem] px-5 justify-center">
         <Fade Fade direction="up" duration={1000}>
          <ProjectCard
            photo="https://wallpapercave.com/wp/AB52oQ1.jpg"
            title="Travel With Us"
            tech1="HTML"
            tech2="CSS"
            description="Developed a responsive tour and travel website, prioritizing user
            experience and"
            githubLink="https://github.com/Riteshh82/travelwithus"
            webLink="https://travelwithus.vercel.app"
          />

        
          <ProjectCard
            photo="https://www.desktopbackground.org/download/o/2014/06/25/783635_full-hd-1080p-nature-wallpapers-desktop-backgrounds-hd-downloads_1920x1080_h.jpg"
            title="CODETYPO"
            tech1="React"
            tech2="JavaScript"
            tech3="HTML"
            tech4="CSS"
            description="Create a web platform for practicing Java and Python coding, featuring interactive exercises and real-time performance tracking to improve speed and accuracy."
            githubLink="https://github.com/Riteshh82/codetypo"
            webLink="https://codetypo.vercel.app"
          />

          
      
          </Fade>
      </div>
   </>
  )
}

export default Project;

