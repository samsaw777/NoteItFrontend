import React, { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import Logo from "../images/RFWT.png";
function Landing() {
  const history = useHistory();
  // useEffect(() => {
  //   const userToken = localStorage.getItem("token");
  //   if (userToken) {
  //     history.push("/landing");
  //   } else {
  //     history.push("/");
  //   }
  // }, []);
  return (
    <div className="h-viewHeight background ">
      <div className="w-full">
        <img src={Logo} alt="Logo" className="block mx-auto pt-10" />
      </div>
      {/* Header  */}
      <div className="text-center pt-10 text-textcolor font-black">
        <h1 className="text-xl lg:text-3xl">Remote First Work Tracker</h1>
      </div>
      {/* Information about the app */}
      <div className="text-center pt-16 w-full px-64 text-textcolor">
        <p className="text-lg px-24">
          RFWT help you to track your work which you are doing or done
          previously. You can also share the work with the team to get help from
          the team if required any now with <strong>Loom</strong> support, which
          allow user to record video and send it as message.
        </p>
      </div>
      {/* Login and Sign in */}
      <div className="flex justify-center pt-16">
        <Link to="/login">
          <button class="lg:w-80 sm:w-32 md:w-32  h-10 bg-buttonColor hover:bg-gray-600 hover:text-gray-100 text-white font-bold py-2 px-4 rounded m-1">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button class="lg:w-80 sm:w-32 md:w-32 h-10 bg-buttonColor hover:bg-gray-600 hover:text-gray-100  text-white font-bold py-2 px-4 rounded m-1">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

//#2f3135
