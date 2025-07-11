import React from "react";

const Navigation = () => {
  return (
    <div className=" Area flex justify-between items-center py-8  uppercase font-medium">
      <div className="logo">
        <span className="text-lg font-bold ">Shium Hossen</span>
      </div>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul className="flex items-center space-x-4">
        <li>English</li>
        <li>Bangla</li>
      </ul>
    </div>
  );
};

export default Navigation;
