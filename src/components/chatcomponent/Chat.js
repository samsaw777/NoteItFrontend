import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chatheader from "./Chatheader";
import { toast } from "react-toastify";
import { PlusIcon } from "@heroicons/react/outline";
import Chatmessage from "./Chatmessage";
import Chatmember from "./Groupmembers";
import axios from "axios";
import ChatFooter from "./Chatfooter";

import { joingroup } from "../../actions/joinedGroup";
const Chat = () => {
  const dispatch = useDispatch();
  const addMemberToGroup = (emial, id, groupname) => {
    const body = { memberEmail: emial, groupId: id, groupName: groupname };
    axios
      .post("https://noteitappapi.herokuapp.com/addmember", body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [toggleValue, setToggleValue] = useState(1);
  console.log(toggleValue);
  const changeToggleValue = (value) => {
    setToggleValue(value);
  };
  const [show, setShow] = useState(false);
  const chatinfo = useSelector((state) => state.chat.chat);
  console.log(chatinfo);
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  return (
    <>
      {Object.entries(chatinfo).length !== 0 ? (
        <>
          <Chatheader
            groupName={chatinfo.chatname}
            show={setShow}
            groupID={chatinfo.id}
            groupMember={chatinfo.member}
          />
          {show ? (
            <div className={show ? "block h-chatheight " : "hidden"}>
              <div
                className="w-full cursor-pointer"
                onClick={() => setShow(false)}
              >
                close
              </div>
              {user && user.friends.length ? (
                user.friends.map((user) => (
                  <div
                    className="border bg-chatBackgroundColor w-full p-3 flex mb-2 justify-between"
                    key={user}
                  >
                    <div className="pt-1 mr-3">
                      <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
                    </div>
                    <div className="text-gray-200">{user}</div>
                    <p
                      className="pt-1"
                      onClick={() =>
                        addMemberToGroup(user, chatinfo.id, chatinfo.chatname)
                      }
                    >
                      <PlusIcon className="w-5 h-5 cursor-pointer text-green-600 rounded  hover:bg-gray-600" />
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-gray-200 p-2">
                  Make friends to join to your group.
                </div>
              )}
            </div>
          ) : (
            <div className={!show ? "block h-chatheight " : "hidden"}>
              <div className=" bg-chatBackgroundColor flex flex-col ">
                <div className="flex justify-between p-3 pl-20 pr-20">
                  <div
                    onClick={() => changeToggleValue(1)}
                    className="cursor-pointer text-gray-100"
                  >
                    <p>Messages</p>
                  </div>
                  <div
                    onClick={() => changeToggleValue(2)}
                    className="cursor-pointer text-gray-100"
                  >
                    <p>Group Members</p>
                  </div>
                </div>
                <div>
                  <p
                    className={
                      toggleValue === 1
                        ? "block h-memberheight overflow-scroll"
                        : "hidden"
                    }
                  >
                    <Chatmessage />
                  </p>
                  <p
                    className={
                      toggleValue === 2
                        ? "block h-memberheight overflow-scroll"
                        : "hidden"
                    }
                  >
                    <Chatmember
                      groupID={chatinfo.id}
                      groupMember={chatinfo.member}
                    />
                  </p>
                </div>
              </div>
            </div>
          )}
          <ChatFooter show={show} />
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
