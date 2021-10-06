import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import Expand from "./Expandmessage";
const Chatmessage = ({ groupId, fetchData, setGetMessage }) => {
  const sideref = useRef();
  const [chatmessages, setChatMessages] = useState([]);
  const chatinfo = useSelector((state) => state.chat.chat);
  const user = useSelector((state) => state.auth.user);
  console.log(chatmessages);

  useEffect(() => {
    const getData = async () => {
      // const getMessages = [];
      const citiesRef = db.collection("task");
      await citiesRef
        .orderBy("time", "asc")
        .where("onGroup", "==", chatinfo.id)
        .onSnapshot((snapshot) => {
          setChatMessages(snapshot.docs.map((doc) => doc.data()));
          setGetMessage(snapshot.docs.map((doc) => doc.data()));
        });
    };
    getData();
  }, [chatinfo.id]);
  useEffect(() => {
    const getData = async () => {
      // const getMessages = [];
      const citiesRef = db.collection("task");
      await citiesRef
        .orderBy("time", "asc")
        .where("onGroup", "==", chatinfo.id)
        .onSnapshot((snapshot) =>
          setChatMessages(snapshot.docs.map((doc) => doc.data()))
        );
    };
    getData();
  }, [fetchData]);

  useEffect(() => {
    sideref.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatmessages]);

  return (
    <div className="pt-5">
      {chatmessages &&
        chatmessages.map((message) => (
          <div
            ref={sideref}
            className={
              message.postedBy === user._id
                ? `w-3/5 bg-gray-700 text-buttonColor p-2 mb-6 rounded-xl relative ml-auto mr-1 border-t-8 border-${message.tag}-500`
                : `w-3/5 bg-gray-700 text-buttonColor p-2 mb-6 rounded-xl relative ml-1 border-${message.tag}-500 border-t-8`
            }
            key={message.id}
          >
            <div className="text-xs mb-1 absolute -top-6 text-gray-100">
              {message.postedByEmail}
            </div>

            <div className="flex flex-col">
              <div className="flex w-full">
                <p className="text-lg font-bold text-gray-300">
                  {message.title}
                </p>
                <div className="ml-auto">
                  <div className="cursor-pointer ml-auto mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-gray-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                </div>
                <Expand
                  title={message.title}
                  description={message.description}
                  file={message.file}
                  tag={message.tag}
                  time={message.time}
                  postedBy={message.postedByEmail}
                />
              </div>
              <p className="text-sm mt-1 w-full h-10 overflow-hidden text-gray-100">
                {message.description}
              </p>
              {message.file && (
                <p className="w-32 h-20">
                  <img src={message.file} alt="Attachment" className="h-20" />
                </p>
              )}
              <p className="text-sm ml-auto text-gray-100">{message.time}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chatmessage;
