import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
function Landing() {
  const history = useHistory();
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      history.push("/landing");
    } else {
      history.push("/login");
    }
  });
  return (
    <div className="h-viewHeight bg-sidebarBackgroundColor-color ">
      {/* Header  */}
      <div className="text-center pt-10 text-white">
        <h1 className="text-3xl">Remote First Work Tracker</h1>
      </div>
      {/* Information about the app */}
      <div className="text-center pt-16 w-full px-64">
        <p className="text-4xl text-gray-400">
          Track your daily,weekly and monthly work with - RFWT(Remote first work
          tracker)
        </p>
        <p className="text-lg text-gray-300 pt-16 px-24">
          RFWT help you to track your work which you are doing or done
          previously. You can also share the work with the team to get help from
          the team if required any now with <strong>Loom</strong> support, which
          allow user to record video and send it as message.
        </p>
      </div>
      {/* Login and Sign in */}
      <div className="flex justify-center pt-16">
        <Link to="/login">
          <button class="w-80 h-10 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button class="w-80 h-10 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
