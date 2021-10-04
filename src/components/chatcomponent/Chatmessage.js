import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import { useSelector } from "react-redux";
import { db } from "../../firebase";

const Chatmessage = ({ groupId, fetchData, setGetMessage }) => {
  const sideref = useRef();
  const [chatmessages, setChatMessages] = useState([]);
  const chatinfo = useSelector((state) => state.chat.chat);
  const user = useSelector((state) => state.auth.user);
  console.log(chatmessages);

  useEffect(() => {
    const getData = async () => {
      const getMessages = [];
      const citiesRef = db.collection("messages");
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
      const getMessages = [];
      const citiesRef = db.collection("messages");
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
                ? "w-2/4 bg-sideBar text-buttonColor p-2 mb-5 rounded-xl relative ml-auto mr-1"
                : "w-2/4 bg-gray-400 text-buttonColor p-2 mb-5 rounded-xl relative ml-1"
            }
            key={message.id}
          >
            <div className="text-xs mb-1 absolute -top-4 text-gray-100">
              {message.postedByEmail}
            </div>
            <div className="flex flex-col">
              <p className="text-md">{message.message}</p>
              <p className="text-sm ml-auto">{message.time}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chatmessage;
