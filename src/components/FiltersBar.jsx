import React from "react";
import FilterButton from "./FilterButton";
import { LuSettings2 } from "react-icons/lu";

const FilterBar = () => {
  const filters = [
    { label: "Filters", icon: <LuSettings2 /> },
    { label: "Offers" },
    { label: "Rating: 4.5+" },
    { label: "Pet Friendly" },
    { label: "Outdoor Seating" },
    { label: "Serves Alcohol" },
    { label: "Open Now" },
  ];

  return (
    <div className="flex space-x-1 lg:space-x-3 overflow-x-auto no-scrollbar py-2 px-2 lg:px-52">
      {filters.map((item, index) => (
        <FilterButton key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

export default FilterBar;
