import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Search from "./Search";


export default function CardsList() {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [term, setTerm] = useState("")


  useEffect(() => {
    const getImages = async () => {
      try {
        setisLoading(true);
        const response = await axios.get(
          `https://pixabay.com/api/?key=40150501-a9e1e0488f9fe6c108ee8ad3e&per_page=50&q=${term}`
        );
        {
          images == [] ? setisLoading(true) : setisLoading(false);
        }
        setImages(response.data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    getImages();
  }, [term]);

  return (
    <>
      <div className="md:w-10/12 my-3 md:mt-0 md:mx-auto mx-5">
        <Search searchText={(text) => setTerm(text)} />
      </div>
      <div className="columns-1 sm:columns-2 md:columns-4 gap-1 space-y-4 pb-10">
        {isLoading == true ? (
          // Loading
          <div className="mt-14 md:mt-32">
            <div className="flex flex-row gap-2 justify-center w-screen">
              <div className="w-4 h-4 rounded-full bg-[#4d85b6] animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-[#254D70] animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-[#4d85b6] animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        ) : (
          // Cards
          images.map((img) => (
            <Card
              key={img.id}
              imageSrc={img.webformatURL}
              likes={img.likes}
              comments={img.comments}
            />
          ))
        )}
      </div>
    </>
  );
}
