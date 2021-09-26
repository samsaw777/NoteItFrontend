import React from "react";
import { useSelector } from "react-redux";
import Chatheader from "./Chatheader";
import ChatFooter from "./Chatfooter";
const Chat = () => {
  const chatinfo = useSelector((state) => state.chat.chat);
  console.log(chatinfo);
  return (
    <>
      {Object.entries(chatinfo).length !== 0 ? (
        <>
          <Chatheader groupName={chatinfo.chatname} />

          <ChatFooter />
        </>
      ) : (
        <p className="pt-72 h-groupHeight pl-72">
          Click on the group to open the chat.
        </p>
      )}
    </>
  );
};

export default Chat;
