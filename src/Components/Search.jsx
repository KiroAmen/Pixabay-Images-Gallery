import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

export default function Search({ searchText }) {
  
  const [input, setinput] = useState("");

  const handlechange = (value) => {
    setinput(value);
  };

  const onSubmit = (e) =>{
    e.preventDefault()
    searchText(input.replace(/ /g, "+").toLowerCase())
    setinput("")
  }

  return (
    <div>
      <form className="flex items-center w-full" onSubmit={onSubmit}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch  className="text-xl"/>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-200 hover:bg-gray-300 focus:bg-gray-200 text-gray-900 text-sm rounded-lg ps-10 p-2.5 outline-none w-full"
            placeholder="Search..."
            value={input}
            onChange={(e) => handlechange(e.target.value)}
          />
        </div>

        {/* <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-[#E60023] rounded-lg border border-[#E60023] hover:bg-[#a7273c] hover:border-[#a7273c] focus:outline-none px-4"
        >
          <IoIosSearch />
        </button> */}
      </form>
    </div>
  );
}
