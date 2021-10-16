import React, { useState, useRef, useEffect } from "react";
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
  const [getMessages, setGetMessage] = useState([]);
  // const sideref = useRef();
  // console.log(sideref);
  const dispatch = useDispatch();

  const addMemberToGroup = (emial, id, groupname, image) => {
    const body = {
      memberEmail: emial,
      groupId: id,
      groupName: groupname,
      groupImage: image,
    };
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
  // console.log(chatinfo.id);
  const user = useSelector((state) => state.auth.user);
  const chatmenu = useSelector((state) => state.chatmenu.menu);
  // console.log(user);
  // useEffect(() => {
  //   sideref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [getMessages]);
  return (
    <>
      {Object.entries(chatinfo).length !== 0 ? (
        <>
          <Chatheader
            groupName={chatinfo.chatname}
            groupImage={chatinfo.image}
            show={setShow}
            groupID={chatinfo.id}
            groupMember={chatinfo.member}
          />
          {chatmenu.value === "AddMembers" && (
            <div className=" grid  grid-cols-2 gap-2">
              {user.friends?.length ? (
                user.friends.map((user) => (
                  <div
                    className="rounded-lg bg-newsidebarcolor  w-11/12 mx-auto p-3 flex mb-2 justify-between"
                    key={user}
                  >
                    <div className="pt-1 mr-3">
                      <p className="rounded-full w-5 h-5 bg-gray-100 block mx-auto"></p>
                    </div>
                    <div className="text-gray-200">{user}</div>
                    <p
                      className="pt-1"
                      onClick={() =>
                        addMemberToGroup(
                          user,
                          chatinfo.id,
                          chatinfo.chatname,
                          chatinfo.image
                        )
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
          )}

          {chatmenu.value === "Messages" && (
            <Chatmessage groupID={chatinfo.id} />
          )}

          {chatmenu.value === "Members" && (
            <Chatmember groupID={chatinfo.id} groupMember={chatinfo.member} />
          )}
        </>
      ) : (
        <p className="pt-72 h-viewHeight pl-72 bg-newchatbackground">
          Click on the group to open the chat.
        </p>
      )}
    </>
  );
};

export default Chat;
