import React from "react";
import logo from "../../public/logo.jpg";
const Nav = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Tech Stack", path: "#tech-stack" },
    { name: "Projects", path: "#projects" },
    { name: "Contacts", path: "#contact" },
  ];
  return (
    <div>
      <nav>
        <img className="h-16 object-cover rounded-full w-16" src={logo} alt="logo" />
      </nav>
    </div>
  );
};

export default Nav;
