import React from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  {
    id: 1,
    name: "Dining Out",
    icon: "🍽️",
    path: "/",
  },
  {
    id: 2,
    name: "Delivery",
    icon: "🛵",
    path: "/delivery",
  },
  {
    id: 3,
    name: "Nightlife",
    icon: "🍷",
    path: "/nightlife",
  },
];

const CategoryTabs = () => {
  return (
    <div className="flex items-center space-x-5 lg:space-x-10 py-4 relative px-2 lg:px-52 ">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          className={({ isActive }) =>
            `flex flex-col items-center cursor-pointer ${
              isActive ? "text-pink-500 font-semibold" : "text-gray-600"
            }`
          }
        >
          {/* Icons*/}
          {({ isActive }) => (
            <>
              <div
                className={`w-7 lg:w-14 h-7 lg:h-14 flex items-center justify-center rounded-full mb-1 ${
                  isActive ? "bg-pink-100" : "bg-gray-100"
                }`}
              >
                <span className="text-sm lg:text-2xl">{tab.icon}</span>
              </div>

              <p className="text-xs lg:text-sm">{tab.name}</p>

              {/* Active underline */}
              {isActive && (
                <div className="w-16 lg:w-10 h-0.5 lg:h-1 rounded-full bg-pink-500 mt-2 absolute bottom-0"></div>
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryTabs;
