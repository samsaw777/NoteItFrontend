import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chatheader from "./Chatheader";
import { toast } from "react-toastify";
import { PlusIcon } from "@heroicons/react/outline";
import { getGroupsMembers } from "../../actions/typeactions";
import Chatmessage from "./Chatmessage";
import Chatmember from "./Groupmembers";
import axios from "axios";
import ChatFooter from "./Chatfooter";

import { joingroup } from "../../actions/joinedGroup";
const Chat = () => {
  const [friends, setFriends] = useState([]);
  // console.log(friends);
  const chatinfo = useSelector((state) => state.chat.chat);
  // const sideref = useRef();
  // console.log(sideref);
  const dispatch = useDispatch();

  const addMemberToGroup = (
    email,
    memberId,
    memberImage,
    id,
    groupname,
    image
  ) => {
    const body = {
      memberId,
      memberImage,
      memberEmail: email,
      groupId: id,
      groupName: groupname,
      groupImage: image,
    };
    // console.log(memberId);
    axios
      .post("https://remotetracker.onrender.com/addmember", body)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    axios
      .get(`https://remotetracker.onrender.com/showfriends/${user.id}`)
      .then((response) => {
        setFriends(response.data);
      });
  }, [user.id]);

  useEffect(() => {
    dispatch(getGroupsMembers(chatinfo.id));
  }, [chatinfo.id]);

  const [toggleValue, setToggleValue] = useState(1);
  // console.log(toggleValue);
  const changeToggleValue = (value) => {
    setToggleValue(value);
  };
  const [show, setShow] = useState(false);

  // console.log(chatinfo.id);

  const members = useSelector((state) => state.notebook.members);
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
              {friends?.length ? (
                friends.map((friend) => (
                  <div
                    className="rounded-lg bg-newsidebarcolor  w-11/12 mx-auto p-3 flex mb-2 justify-between"
                    key={friend.friendId}
                  >
                    <div className="pt-1 mr-3">
                      <img
                        src={friend.friendImage}
                        referrerPolicy="no-referrer"
                        alt="friend"
                        className="rounded-full w-5 h-5  block mx-auto"
                      />
                    </div>
                    <div className="text-gray-200">{friend.friendEmail}</div>
                    <p
                      className="pt-1"
                      onClick={() =>
                        addMemberToGroup(
                          friend.friendEmail,
                          friend.friendId,
                          friend.friendImage,
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
            <Chatmember groupID={chatinfo.id} groupMember={members} />
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
