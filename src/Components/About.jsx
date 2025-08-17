import React from "react";
import img from "../../public/Setup.png";
const About = () => {

  
  return (
    <div className="flex items-center gap-5 w-full py-10">
      <div className="w-1/2">
        <img className="rounded-xl" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
