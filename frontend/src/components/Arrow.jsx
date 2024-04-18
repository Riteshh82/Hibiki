import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

function Arrow({ link, title }) {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <div className="text-black flex items-center gap-3 py-8 w-fit pb-[6rem] md:pb-0 up">
        <span>{title}</span>
        <EastIcon className="arrow-animation" />
      </div>
    </Link>
  );
}

export default Arrow;
