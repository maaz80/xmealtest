import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaChevronDown, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase-client";

const Navbar = ({ searchTerm, setsearchTerm }) => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    navigate("/login");  // logout ke baad login page pe
  };

  useEffect(() => {
    getSession();

    // Session change pe listen karna (logout/login)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      {/* PC view  */}
      <div className="lg:flex items-center justify-between w-full py-4 px-52 hidden">
        <div className="text-3xl font-bold italic text-gray-800">XMeals</div>

        <div className="flex items-center w-1/2 bg-white border rounded-full shadow-sm px-4 py-2 ">
          <div className="flex items-center mr-4 text-gray-600">
            <FaMapMarkerAlt className="text-pink-500 mr-1" />
            <span>Lucknow</span>
            <FaChevronDown className="ml-2 text-xs" />
          </div>

          <div className="h-5 border-l mx-3"></div>

          {/* Search */}
          <div className="flex items-center flex-1">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="w-full outline-none text-sm text-gray-600"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-6 text-gray-600 text-lg">
          {session ? (
            <button onClick={handleLogout} className="hover:text-black">
              Logout
            </button>
          ) : (
            <>
              <Link className="hover:text-black" to={"/login"}>
                Log in
              </Link>
              <button className="hover:text-black">Sign up</button>
            </>
          )}
        </div>
      </div>

      {/* Mobile view  */}
      <div className="flex lg:hidden justify-center flex-col">
        <div className="flex items-center justify-between py-2 lg:py-4 px-2 lg:px-52">
          <div className="text-xl lg:text-3xl font-bold italic text-gray-800">XMeals</div>

          {/* Auth Buttons */}
          <div className="flex items-center text-gray-600 text-sm lg:text-lg">
            {session ? (
              <button onClick={handleLogout} className="hover:text-black">
                Logout
              </button>
            ) : (
              <Link className="hover:text-black" to={"/login"}>
                Log in
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center w-full justify-center bg-white border rounded-full shadow-sm px-2 py-2 ">
          <div className="flex items-center mr-4 text-gray-600">
            <FaMapMarkerAlt className="text-pink-500 mr-1" />
            <span className="text-sm lg:text-base">Lucknow</span>
            <FaChevronDown className="ml-2 text-xs" />
          </div>

          <div className="h-5 border-l mx-1 lg:mx-3"></div>

          {/* Search */}
          <div className="flex items-center flex-1">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="w-full outline-none text-sm text-gray-600"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
