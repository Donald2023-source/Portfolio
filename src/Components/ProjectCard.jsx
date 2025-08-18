import React from "react";
import img from "../../public/Appolo.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, href, description, image }) => {
  return (
    <div className="w-72 my-7 relative w-[20rem] ">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          className="h-64 w-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
        <div className="absolute inset-0 rounded-2xl  bg-black/30 h-full w-full"></div>
        <Link
          to={href}
          className="absolute bg-black hover:cursor-pointer opacity-0 hover:opacity-65 transition-all w-full text-2xl top-0 h-full items-center flex justify-center left-0 right-0 mx-auto"
        >
          <FaEye className="" />
        </Link>
      </div>
      <div>
        <h1 className="text-xl font-semibold py-2">{name}</h1>
        <p className="text-sm leading-7 text-textGray">{description}</p>
      </div>

      <div></div>
    </div>
  );
};

export default ProjectCard;
