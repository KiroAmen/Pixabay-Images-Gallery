import React, { useState } from "react";
import Logo from "../assets/Images/Pixabay-logo.png";
import Pfp from "../assets/Images/Profile.jpg";
import { IoNotificationsOutline } from "react-icons/io5";

export default function NavbarTop() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap"
        rel="stylesheet"
      />

      <nav className="bg-white border-gray-200 flex row justify-between">
        <div className=" flex space-x-4 p-4 px-10 justify-between w-full">
          
          {/* Profile */}
          <div className="flex flex-row justify-center items-center gap-2">
            <img
              className="w-12 h-12 p-[5px] rounded-full cursor-pointer"
              src={Pfp}
              alt="Bordered avatar"
            />
            <div className="notifications relative">
              <IoNotificationsOutline className="text-3xl cursor-pointer" />
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">
                20
              </div>
            </div>
          </div>

        {/* Logo */}

          <div className="flex gap-2 flex-row-reverse">
            <a href="https://pixabay.com/api/docs/" className="w-fit ms-4 translate-y-1">
              <img src={Logo} className="h-14" alt="Flowbite Logo" />
            </a>
            <div
              className="bg-black text-white md:flex justify-between items-center px-4 rounded-full cursor-pointer hidden "
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              الصفحة الرئيسية
            </div>
            <div
              className=" text-black md:flex justify-between items-center px-4 rounded-full cursor-pointer hover:bg-gray-300 hidden"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              أنشاء
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
