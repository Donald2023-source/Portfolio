import React, { useState } from "react";
import img from "../../public/Setup.png";
import { AboutItems } from "../data/data";
import { motion } from "framer-motion";
const About = () => {
  const [currentTab, setCurrentTab] = useState(AboutItems[0]);

  const handleClick = (tab) => {
    const selected = AboutItems.find((item) => item.title === tab);
    if (selected) setCurrentTab(selected);
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 py-8 text-center">
        <h2 className="font-bold text-2xl py-4">About Me</h2>
        <p className="md:leading-[3rem] leading-9 text-sm md:text-base text-textGray text-left ">
          My frontend journey began with learning the core web
          technologies—HTML, CSS, and JavaScript—which gave me a strong
          foundation for building clean and responsive interfaces. Over time, I
          transitioned into modern frameworks such as React and Next.js, where I
          gained experience in creating dynamic and scalable applications. I’ve
          worked with tools like Tailwind CSS for styling, Framer Motion for
          animations, and state management libraries like Redux and Zustand to
          handle complex user interactions. Along the way, I’ve also explored
          integrating APIs, Firebase, and third-party services to deliver
          full-featured applications. Each project I build pushes me to refine
          my problem-solving skills, improve user experiences, and stay updated
          with the latest frontend trends.
        </p>
      </div>

      <div className="flex items-center md:flex-row flex-col justify-center gap-20 w-[60%] mx-auto md:w-full py-12 mt-10">
        <div className="md:w-[50%] w-full">
          <img className="rounded-xl" src={img} alt="img" />
        </div>

        <div>
          <div className="flex gap-4 mb-6 py-2">
            {AboutItems.map((tab, index) => (
              <h2
                key={index}
                onClick={() => handleClick(tab.title)}
                className={`cursor-pointer font-semibold ${
                  currentTab.title === tab.title
                    ? "text-blue-500 underline"
                    : "hover:text-blue-500"
                }`}
              >
                {tab.title}
              </h2>
            ))}
          </div>

          {currentTab && (
            <div className="mb-4">
              <ul className="list-disc pl-5">
                {currentTab.items.map((item, index) => (
                  <li key={index} className="text-textGray py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
