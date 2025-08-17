import React, { useState } from "react";
import img from "../../public/Setup.png";
import { AboutItems } from "../data/data";
const About = () => {
  const [currentTab, setCurrentTab] = useState([]);

  const handleClick = (tab) => {
    if (tab === "Skills") {
      setCurrentTab(AboutItems[0]);
    } else if (tab === "Education") {
      setCurrentTab(AboutItems[2]);
    } else if (tab === "Certifications") {
      setCurrentTab(AboutItems[3]);
    }
  };
  return (
    <div className="flex items-center gap-5 w-full py-10">
      <div className="w-1/2">
        <img className="rounded-xl" src={img} alt="img" />
      </div>
      <div>
        <h2 onClick={handleClick("Skills")}>Skills</h2>
        {currentTab.map((item, idx) => (
          <div>
            {item.title === "Skills" && (
                <div key={idx} className="mb-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <ul className="list-disc pl-5">
                    {item.items.map((skill, index) => (
                        <li key={index} className="text-textGray">
                        {skill}
                        </li>
                    ))}
                    </ul>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
