import React, { useState } from "react";
import axios from "axios";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import Chatmodal from "./Chatmodel";
import "firebase/firestore";
import * as firebase from "firebase/compat";
import { db } from "../../firebase";
// import { db } from "../../firebase";
const Chatfooter = ({ show, fetchData, setFetchData }) => {
  // console.log(current);
  const [text, setText] = useState("");
  const chatinfo = useSelector((state) => state.chat.chat);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div
        className={
          show
            ? "relative top-chatTop  text-gray-100 h-footerHeight border-2 border-gray-200 bg-buttonColor"
            : "relative top-chattop  text-gray-100 h-footerHeight border-2 border-gray-200 bg-borderColor"
        }
      >
        <Chatmodal setFetchData={setFetchData} fetchData={fetchData} />
        {/* <div className="w-3/6 pl-5">
          <form
            className="flex justify-between w-full pt-3"
            onSubmit={sendChat}
          >
            <input
              className="appearance-none bg-transparent border-b-2 border-gray-400 w-11/12 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter your task"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button type="submit">
              <ArrowRightIcon className="w-5 h-5 cursor-pointer" />
            </button>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default Chatfooter;
