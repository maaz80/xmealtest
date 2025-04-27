import React from "react";

const CollectionCard = ({ image, title, places }) => {
  return (
    <div className="w-20 lg:w-64 h-28 lg:h-80 rounded-xl overflow-hidden relative cursor-pointer shadow-lg transition-all duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-0.5 lg:p-4 flex flex-col justify-end">
        <h3 className="text-white text-xs lg:text-lg font-semibold">{title}</h3>
        <p className="text-white text-[10px] lg:text-sm mt-1 flex items-center">
          {places} Places{" "}
          <span className="ml-1">➝</span>
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
