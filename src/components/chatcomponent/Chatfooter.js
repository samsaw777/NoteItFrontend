import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
const Chatfooter = () => {
  return (
    <>
      <div className="relative top-chatTop  text-gray-100 h-footerHeight">
        <div className="w-3/6 pl-5">
          <form className="flex justify-between w-full">
            <input
              className="appearance-none bg-transparent border-b-2 border-gray-400 w-11/12 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter your task"
            />
            <ArrowRightIcon className="w-5 h-5 cursor-pointer" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatfooter;
