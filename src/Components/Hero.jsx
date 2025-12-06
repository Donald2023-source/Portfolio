import React from "react";
import Avatar from "../../public/Avatar.jpg";
const Hero = () => {
  return (
    <div>
      <div className="flex px-2 my-8  md:flex-row flex-col  items-center w-full justify-between gap-5">
        <div className="w-full md:w-[45%] flex flex-col md:items-start items-center gap-2">
          <h1 className="text-3xl font-semibold">Hi 👋</h1>
          <h1 className="text-4xl leading-12 font-extrabold py-2">
            I am Donald Yusuf{" "}
          </h1>

          <h1 className="text-textGray py-2 md:text-base text-sm md:text-left text-center md:leading-9 leading-8">
            I am a creative and detail-oriented frontend developer with a
            passion for designing and building seamless user experiences. I
            enjoy bringing ideas to life through clean, responsive, and visually
            appealing interfaces that engage and delight users.
          </h1>
        </div>
        <img
          className="rounded-full h-64 my-3 w-64 object-cover"
          src={Avatar}
          alt=""
        />
      </div>
      <a
        href="/Donald-Resume.pdf"
        download="Donald_Yusuf.pdf"
        className="px-1 inline-block border text-center border-gray-100/40 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
      >
        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
          Download CV
        </span>
      </a>
    </div>
  );
};

export default Hero;
