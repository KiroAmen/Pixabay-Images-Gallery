import React, { useState } from "react";
import Logo from "../assets/Images/Pixabay-logo.png";
import Pfp from "../assets/Images/Profile.jpg";



export default function NavbarTop() {
    
  return (
    <>
      <nav className="bg-white border-gray-200">
        {/* Logo */}
        <div className=" flex space-x-4 p-4 px-10 justify-between">
          <a href="https://pixabay.com/api/docs/" className="w-fit">
            <img src={Logo} className="h-10" alt="Flowbite Logo" />
          </a>


          {/* Profile */}
          <div className="block">
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
              src={Pfp}
              alt="Bordered avatar"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
