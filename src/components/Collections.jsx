import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CollectionCard from "./CollectionCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { supabase } from "../supabase-client";
import { RingLoader } from "react-spinners";


// Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRightLong />
  </div>
);

// Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeftLong />
  </div>
);

const CollectionSlider = ({searchTerm}) => {
  const [session, setSession] = useState(null);
  const [items, setItems] = useState([])

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  };

  const fetchItems = async () => {

    const { data, error } = await supabase
      .from("restaurants")
      .select("*")
      .order("id", { ascending: false })

    if (error) {
      console.error(error)
      return
    }
    console.log("Fetched restaurants: ", data);

    setItems(data)
  }

  useEffect(() => {
    fetchItems()
    getSession()
  }, [])

 
  const filteredRestaurants = items.filter(item=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const settings = {
    dots: false,
    infinite: filteredRestaurants.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="my-4 px-1 lg:px-52 bg-gray-100 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Collections</h2>
        <p className="text-pink-500 cursor-pointer text-sm">
          All collections in Lucknow ➝
        </p>
      </div>
      <p className="text-gray-600 text-sm mb-6">
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Lucknow, based on trends
      </p>

      {items.length === 0 ? (
        <div className="flex items-center justify-center h-80 py-4"><RingLoader color="#00d3ff" /></div>
      ) : filteredRestaurants.length > 0 ? (
        <Slider {...settings}>
          {filteredRestaurants.map((item) => (
            <CollectionCard
              key={item.id}
              image={item.image}
              title={item.title}
              places={item.places}
            />
          ))}
        </Slider>
      ) : (
        <div className="flex items-center justify-center h-80 py-4">No results found</div>
      )}
    </div>
  );
};

export default CollectionSlider;