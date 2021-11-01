import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
const Heading = () => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-100 pr-2.5 pt-2 pl-2">To Do List</p>
        <p className="pr-2.5 pt-2.5">
          <PlusIcon className="w-5 h-5 cursor-pointer text-blue-600 rounded  hover:bg-gray-600" />
        </p>
      </div>
      <div className="flex  ml-2 mr-2 bg-newchatbackground p-3 rounded-lg">
        <form>
          <div className="flex">
            <input
              className="bg-transparent border-newsidebarcolor border-b-2"
              placeholder="Enter Task"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 transform rotate-90 text-green-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
        </form>
      </div>
    </>
  );
};

export default Heading;
