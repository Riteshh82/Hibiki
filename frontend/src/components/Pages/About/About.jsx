import React, { useEffect, useState } from "react";
import Header from '../../Header'
import { Fade } from 'react-awesome-reveal';
import { RoughNotation } from "react-rough-notation";

function About() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch ('https://api.github.com/users/riteshh82')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      });
  }, [])

  return (
   <>
    <Header/>
    <Fade direction="up" duration={1000}>
      <div className="py-[rem] mt-[1rem] mb-[1rem] px-5 flex   lg:items-center justify-center">
        <RoughNotation
          show="underline"
          animationDelay={400}
          animationDuration={500}
          className="text-[2.5rem] font-bold"
        >
          About Me
        </RoughNotation>
      </div>
    </Fade>
    
    <div className="text-black h-auto">
      <div className="max-w-6xl mx-auto py-[2rem] mt-[1rem] mb-[rem] px-5 flex lg:items-center justify-center flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
        <Fade direction="up" duration={1000}>
          <div className="mx-auto border-black rounded-md max-w-[300px] lg:w-[600]">
            <img
              src={data.avatar_url}
              alt="riteshh82"
              className="rounded-md mx-auto"
            />
          </div>
  
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1080px] mx-auto">
            <div>
              <h1 className="font-bold">Experience 🎖️</h1>
              <p>1+ Years</p>
            </div>
            <div>
              <h1 className="font-bold">Student At 👨🏼‍💻</h1>
              <p>Parul University</p>
            </div>
            <div className="col-span-2">
              <p>
                I'm a versatile web developer skilled in frontend (JavaScript, Tailwind
                CSS, HTML5) and backend (Node.js, Express). Proficient in SQL and
                MongoDB, I create responsive, performance-optimized websites.
                Experienced with Git, I excel in collaborative environments with
                strong communication and problem-solving abilities.
              </p>
            </div>
            <a href="/Ritesh_Yadav_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Resume Page" title="Resume Page">
              <button className="py-2 px-4 mr-20 rounded-lg bg-zinc-900 hover:bg-zinc-800 gap-3">
                <span className="font-bold text-white">
                  Resume
                </span>
              </button>
            </a>
          </div>
        </Fade>
      </div>
    </div>
   </>
  )
}

export default About;
