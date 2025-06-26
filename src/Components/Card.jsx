import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import placeholderImage from "../assets/Images/placeholder.jpg";

export default function Card(props) {
  return (
    <div>
      {/* <!-- Card --> */}
      <div
        className="group relative overflow-hidden rounded-[20px] m-4 my-2 h-auto max-w-full" 
        target="_blank"
        rel="noreferrer noopener"
      >
        {/* <!-- Card Image --> */}
        <img
          className="ease-in-out duration-500 scale-[100%] group-hover:scale-[110%]"
          src={props.imageSrc ? props.imageSrc : placeholderImage}
          alt="Image"
        />
        {/* <!-- Card Info Shade --> */}
        <div className="w-full h-full absolute bottom-0 left-0 right-0 top-0 rounded-[20px] bg-black/25 ease-in-out duration-300 opacity-0 group-hover:opacity-100">
          {/* <!-- Title --> */}
          <div className="text-4xl md:text-2xl font-bold text-white absolute bottom-[15px] left-4 sm:bottom-3 sm:left-3 flex">
            <div className="flex me-4"><FaHeart className="cursor-pointer hover:text-red-600"/> <span className="ms-2 text-2xl md:text-xl cursor-pointer">{props.likes}</span></div>
            <div className="flex"><FaCommentDots className="text-white cursor-pointer hover:text-[#4d85b6]"/> <span className="ms-2 text-2xl md:text-xl text-white cursor-pointer">{props.comments}</span></div>
          </div>

        </div>
      </div>
    </div>
  );
}
