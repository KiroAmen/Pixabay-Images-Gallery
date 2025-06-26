import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from "../assets/Images/404.png";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center">
      <img src={errorImg} alt="Error" />
      <h1 className='text-8xl text-gray-400 font-bold'>404</h1>
      <p className='text-2xl'>Page not Found..!</p></div>
      <Link variant="text" className="flex items-center gap-2 border border-black rounded-lg px-3 py-2 transition-all hover:bg-black hover:text-white" to={"/"}>
        Back to Pixabay{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Link>
    </div>
  )
}
