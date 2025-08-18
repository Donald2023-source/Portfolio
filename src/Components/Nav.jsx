import React from "react";
import logo from "../../public/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  const navItems = [
    { name: "Home", path: "" },
    { name: "About", path: "#about" },
    { name: "Tech Stack", path: "#tech-stack" },
    { name: "Projects", path: "#projects" },
    { name: "Contacts", path: "#contact" },
  ];
  const pathname = useLocation().hash;
  console.log(pathname);

  const [nav, setNav] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + windowScrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behaviour: smooth,
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full mx-auto">
      <nav className="flex items-center justify-between w-full mx-auto">
        <img
          className="md:h-16 h-14 w-14 object-cover rounded-full md:w-16"
          src={logo}
          alt="logo"
        />
        <div className="md:flex hidden items-center">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <Link
                className={`p-3 flex ${
                  pathname === item?.path
                    ? "text-white font-bold"
                    : "text-textGray hover:text-white transition-all hover:font-bold"
                }`}
                to={item?.path}
              >
                {item?.name}
              </Link>
            </div>
          ))}
        </div>

        <div
          className={`${
            nav
              ? "md:hidden absolute inset-0 flex flex-col h-screen items-center gap-5 bg-gradient-to-br from-black to-theBlack justify-center items-center -translate-x-0 transition-all duration-500 ease-in-out"
              : "md:hidden absolute inset-0 flex flex-col h-screen items-center gap-5 bg-gradient-to-br from-black to-theBlack justify-center items-center -translate-x-full transition-all duration-500 ease-in-out"
          }`}
        >
          {navItems.map((item, idx) => (
            <div key={idx}>
              <Link
                onClick={(e) => handleScroll(e, item?.path)}
                className={`p-3 flex ${
                  pathname === item?.path
                    ? "text-white font-bold"
                    : "text-textGray hover:text-white transition-all hover:font-bold"
                }`}
                to={item?.path}
              >
                {item?.name}
              </Link>
            </div>
          ))}
          <h4
            onClick={() => setNav(false)}
            className="text-xl font-bold absolute hover:scale-95 transition-all cursor-pointer top-14 right-10"
          >
            X
          </h4>
        </div>
        <FaBars
          onClick={() => setNav(true)}
          className="text-xl cursor-pointer hover:scale-95 transition md:hidden block"
        />
      </nav>
    </div>
  );
};

export default Nav;
