import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../images/RFWT.png";
function Landing() {
  const history = useHistory();
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      history.push("/landing");
    } else {
      history.push("/");
    }
  }, []);
  return (
    <div className="h-viewHeight bg-sidebarBackgroundColor ">
      <div className="w-full">
        <img src={Logo} alt="Logo" className="block mx-auto pt-20" />
      </div>
      {/* Header  */}
      <div className="text-center pt-10 text-white">
        <h1 className="text-xl lg:text-3xl">Remote First Work Tracker</h1>
      </div>
      {/* Information about the app */}

      {/* Login and Sign in */}
      <div className="flex justify-center pt-16">
        <Link to="/login">
          <button class="lg:w-80 sm:w-32 md:w-32  h-10 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button class="lg:w-80 sm:w-32 md:w-32 h-10 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
