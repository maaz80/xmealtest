import React from "react";

const FilterButton = ({ icon, label }) => {
  return (
    <button className="flex items-center space-x-1 border border-gray-300 text-gray-600 px-3 py-0.5 lg:py-1.5 rounded-lg hover:bg-gray-100 transition">
      {icon && <span>{icon}</span>}
      <span className="text-xs lg:text-sm">{label}</span>
    </button>
  );
};

export default FilterButton;
