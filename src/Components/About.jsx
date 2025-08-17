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
      className="flex items-center md:flex-row flex-col justify-center gap-20 w-[60%] mx-auto md:w-full py-12 mt-10"
    >
      <div className="w-[50%]">
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
    </motion.div>
  );
};

export default About;
