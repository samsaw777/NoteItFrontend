import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import Expand from "./Expandmessage";
import { MessageLoader } from "../loader/Skeleton";
import EditChat from "./EditChat";

const Chatmessage = () => {
  const sideref = useRef();
  const [Loading, setLoading] = useState(false);
  const [deletChat, setDeletChat] = useState(true);
  const [chatmessages, setChatMessages] = useState([]);
  console.log(chatmessages);
  const chatinfo = useSelector((state) => state.chat.chat);
  console.log(chatinfo.id);
  const user = useSelector((state) => state.auth.user);
  console.log(chatmessages);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await db
        .collection("groups")
        .doc(`${chatinfo.id}`)
        .collection("messages")
        .orderBy("time", "asc")
        .onSnapshot((snapshot) => {
          setChatMessages(
            snapshot.docs.map((group) => ({
              ...group.data(),
              ["id"]: group.id,
            }))
          );
          setLoading(false);
        });
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      await db
        .collection("groups")
        .doc(`${chatinfo.id}`)
        .collection("messages")
        .orderBy("time", "asc")
        .onSnapshot((snapshot) => {
          setChatMessages(
            snapshot.docs.map((group) => ({
              ...group.data(),
              ["id"]: group.id,
            }))
          );
          setLoading(false);
        });
    };
    getData();
  }, [chatinfo.id, deletChat]);

  useEffect(() => {
    sideref.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatmessages]);

  const deleteChat = (id) => {
    const body = {
      messageId: id,
      groupId: chatinfo.id,
    };

    if (window.confirm("Are you sure you want to delete this data?")) {
      db.collection("groups")
        .doc(`${body.groupId}`)
        .collection("messages")
        .doc(`${body.messageId}`)
        .delete()
        .then(() => {
          console.log("Document Deleted Sucessfully!");
          setDeletChat(!deletChat);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="pt-10 mr-1 h-chatheight overflow-y-scroll">
      {Loading && <MessageLoader />}
      {chatmessages.map((message) => (
        <div
          ref={sideref}
          className={
            message.postedBy === user._id
              ? `w-1/2 bg-newsidebarcolor text-buttonColor p-2 mb-10 rounded-xl relative ml-auto mr-1 border-t-8 border-${message.tag}-400`
              : `w-1/2 bg-newsidebarcolor text-buttonColor p-2 mb-10 rounded-xl relative ml-1   border-${message.tag}-400 border-t-8 `
          }
          key={message.id}
        >
          <div
            className={
              message.postedByEmail === user.email
                ? "text-xs mb-1 absolute -top-9 text-gray-100 flex"
                : "text-xs mb-1 absolute -top-9 text-gray-100 flex"
            }
          >
            <div className="w-7 h-7 rounded-full">
              <img
                src={message.userImage}
                alt="user avatar"
                className="w-7 h-7 rounded-full"
              />
            </div>
            <p className="pl-3 pt-1">{message.postedByEmail}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex w-full">
              <p className="text-lg font-bold text-gray-300">{message.title}</p>
              <p className="ml-auto flex">
                {message.postedByEmail === user.email && (
                  <EditChat
                    id={message.id}
                    refetch={deletChat}
                    setRefetch={setDeletChat}
                  />
                )}

                {message.postedByEmail === user.email && (
                  <div
                    className="text-red-600 mr-3 ml-2 cursor-pointer"
                    onClick={() => deleteChat(message.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                )}
                <Expand
                  title={message.title}
                  description={message.description}
                  file={message.fileUrl}
                  tag={message.tag}
                  time={message.time}
                  postedBy={message.postedByEmail}
                />
              </p>
            </div>
            <p className="text-sm mt-1 w-full h-10 overflow-hidden text-gray-100">
              {message.description}
            </p>
            {message.fileUrl && (
              <p className="w-full text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </p>
            )}
            <p className="text-sm ml-auto text-gray-100">
              {message.time.slice(0, 9)}
            </p>
          </div>
        </div>
      ))}
      {/* <MessageLoader /> */}
    </div>
  );
};

export default Chatmessage;
