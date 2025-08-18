import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import About from "../Components/About";
import html from "../../public/Group 9.png";
import css from "../../public/Group 10.png";
import Js from "../../public/Group 11.png";
import react from "../../public/Group 12.png";
import vs from "../../public/Group 14.png";
import typescript from "../../public/icons8-typescript-500.png";
import git from "../../public/Vector (4).png";
import tailwind from "../../public/Vector (3).png";
import github from "../../public/Vector (2).png";
import redux from "../../public/Vector (1).png";
import next from "../../public/icons8-next.js-240.png";
import ProjectCard from "../Components/ProjectCard";
import { motion } from "framer-motion";
import frentals from "../../public/Frentals.png";
import appolo from "../../public/Appolo.png";
import Ivote from "../../public/Ivote.png";
const Home = () => {
  const techStack = [
    html,
    css,
    Js,
    react,
    vs,
    typescript,
    git,
    tailwind,
    github,
    redux,
    next,
  ];

  const projects = [
    {
      name: "Frentals",
      href: "https://appolo-navy.vercel.app/",
      description:
        "Frentals is a simple, user-friendly platform that connects people to easily rent farm equipments",
      image: frentals,
    },

    {
      name: "Appolo",
      href: "https://frentals.vercel.app/",
      description:
        "A clean and modern landing page that highlights the app’s ability to track expenses",
      image: appolo,
    },

     {
      name: "Ivote",
      href: "https://ivote-gray.vercel.app/	",
      description:
        "A seamless voting platform that allows users to create and participate in polls effortlessly.",
      image: Ivote  ,
    },
  ];
  return (
    <div className="max-w-7xl flex items-center justify-center w-full mx-auto px-1 sm:px-3 md:py-8 py-4">
      <div className="w-full">
        <Nav />

        <div className=" p-3">
          <Hero />

          <motion.div className="flex flex-wrap items-center justify-center py-4 md:gap-10 gap-7 my-10 border-gray-600 rounded-xl border mx-auto w-full">
            {techStack.map((item, idx) => (
              <div className="inline-block m-2" key={idx}>
                <motion.img
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="md:h-12 md:w-12 w-9 h-9 object-contain"
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </motion.div>

          <About />

          <div className="flex items-center justify-between my-10">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                name={project?.name}
                href={project?.href}
                image={project?.image}
                description={project?.description}
              />
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
