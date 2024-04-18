// Card.js
import React from 'react';

const Card = ({ title, imageUrl, link }) => {
  return (
    <a href={link} className="max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-sm">Click to view</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
