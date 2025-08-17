import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import About from "../Components/About";
const Home = () => {
  return (
    <div className="max-w-7xl flex items-center justify-center w-full mx-auto px-1 sm:px-3 md:py-8 py-4">
      <div className="w-full">
        <Nav />

        <div className="border p-3">
        <Hero />
        <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
