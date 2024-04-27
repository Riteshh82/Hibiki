import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectCard = ({ photo, title, tech1, tech2, tech3, tech4, tech5, tech6,description, githubLink, webLink }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-md mx-auto my-4 transition duration-300 transform hover:scale-105">
     {/* <img
        src={photo}
        alt={title}
        className="w-full h-64 object-cover object-center"
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {tech1 && (
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">{tech1}</p>
   )}
    {tech2 && (
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">{tech2}</p>
    )}
    {tech3 && (
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">{tech3}</p>
    )}      
            {tech4 && (
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">{tech4}</p>
   )}
    {tech5 && (
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">{tech5}</p>
    )}
    {tech6 && (
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">{tech6}</p>
    )}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-10 py-4 flex justify-between">
        <a
          href={githubLink}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-300 transition duration-300"
        >
          <GitHubIcon className="mr-1" />
          GitHub
        </a>
        <a
          href={webLink}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 transition duration-300"
        >
          <LanguageIcon className="mr-1" />
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
