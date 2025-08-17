import React from "react";
import Avatar from "../../public/Avatar.jpg";
const Hero = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col  items-center w-full items-center justify-between gap-5">
        <div className="w-full md:w-[45%] flex flex-col md:items-start items-center gap-2">
          <h1 className="text-3xl font-semibold">Hi 👋</h1>
          <h1 className="text-4xl leading-12 font-extrabold py-2">
            I am Donald Yusuf{" "}
          </h1>
          <h1 className="text-textGray py-2 md:text-base text-sm md:text-left text-center leading-7">
            I am a creative and detail-oriented frontend developer with a
            passion for designing and building seamless user experiences. I
            enjoy bringing ideas to life through clean, responsive, and visually
            appealing interfaces that engage and delight users.{" "}
          </h1>
        </div>
        <img
          className="rounded-full h-64 my-3 w-64 object-cover"
          src={Avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
