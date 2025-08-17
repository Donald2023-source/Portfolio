import React from "react";
import img from "../../public/Appolo.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({name, href, description, image}) => {
  return (
    <div className="w-72 relative">
      <div className="relative rounded-2xl overflow-hidden">
        <img className="h-64 w-72 object-cover rounded-2xl" src={image} alt="" />

        <Link
          to={href}
          className="absolute bg-black hover:cursor-pointer opacity-0 hover:opacity-65 transition-all w-full text-2xl top-0 h-full items-center flex justify-center left-0 right-0 mx-auto"
        >
          <FaEye className="" />
        </Link>
      </div>
      <div>
        <h1 className="text-xl font-semibold py-2">{name}</h1>
        <p className="text-sm leading-7">
          {description}
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default ProjectCard;
