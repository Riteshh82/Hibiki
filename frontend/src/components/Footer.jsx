import React from 'react';
import { Link } from "react-router-dom";
// import { Fade } from 'react-awesome-reveal';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
    
    {/* <Fade Fade direction="up" duration={1000}> */}

        <footer className="footer  lg:max-w-6xl sm:pl-10 m-1 mx-auto gap-5">
          <Link to="https://twitter.com/Imriteshxo" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Twitter Page" title="Twitter Page">
            <XIcon className="" />
          </Link>

          <Link to="https://linkedin.com/in/riteshh82" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Linkedin Page" title="Linkedin Page">
            <LinkedInIcon className=""/>
          </Link>

          <Link to="https://github.com/Riteshh82" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Github Page" title="Github Page">
            <GitHubIcon className="" />
          </Link>

          <Link to="https://www.instagram.com/imriteshxo/" target="_blank" rel="noopener noreferrer" aria-label="Go To Ritesh Yadav Instagram Page" title="Instagram Page">
            <InstagramIcon className="" />
          </Link>
          </footer>
      {/* </Fade> */}
    </>
  );
}

export default Footer
