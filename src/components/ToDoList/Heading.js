import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../actions/todosType";
import { PlusIcon } from "@heroicons/react/outline";
const Heading = () => {
  const dispatch = useDispatch();

  const [openTask, setOpenTask] = useState(false);
  const [todoItem, setToDoItem] = useState("");
  const submitTodo = (e) => {
    e.preventDefault();
    const body = {
      todo: todoItem,
    };
    dispatch(addTodos(body));
    setToDoItem("");
    setOpenTask(false);
  };
  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-100 pr-2.5 pt-2 pl-2">To Do List</p>
        <p className="pr-2.5 pt-2.5" onClick={() => setOpenTask(!openTask)}>
          <PlusIcon className="w-5 h-5 cursor-pointer text-blue-600 rounded  hover:bg-gray-600" />
        </p>
      </div>
      {openTask && (
        <>
          <div className="flex  ml-2 mr-2 bg-newchatbackground p-3 rounded-lg mt-2">
            <div onClick={() => setOpenTask(false)} className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-400 ml-auto cursor-pointer hover:bg-gray-600 rounded"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <form onSubmit={submitTodo}>
              <div className="flex">
                <input
                  value={todoItem}
                  onChange={(e) => setToDoItem(e.target.value)}
                  className="bg-transparent border-gray-700 border-b-2 text-gray-300 focus:outline-none focus:shadow-outline"
                  placeholder="Enter Task"
                />

                <svg
                  type="submit"
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
      )}
    </>
  );
};

export default Heading;
