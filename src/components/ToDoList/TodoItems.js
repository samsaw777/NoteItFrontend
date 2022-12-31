import React, { useState, useEffect } from "react";
import { getTodos, removeTodos } from "../../actions/todosType";
import { TrashIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
const TodoItem = () => {
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = useState(false);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, deleteItem]);
  const deleteTodo = (id) => {
    dispatch(removeTodos(id));
    setDeleteItem(!deleteItem);
  };
  const todos = useSelector((state) => state.todos.todos);
  // console.log(todos);
  return (
    <>
      {todos.map((todo) => (
        <div className="w-11/12 rounded-lg mx-auto mt-1 bg-newchatbackground p-3 flex justify-between">
          <p className="text-gray-500">{todo.work}</p>
          <div className="flex mr-2">
            <p onClick={() => deleteTodo(todo.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 cursor-pointer mr-2  text-green-500 rounded  hover:bg-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
            <p>
              <TrashIcon
                onClick={() => deleteTodo(todo.id)}
                className="w-5 h-5 cursor-pointer  text-red-500 rounded  hover:bg-gray-600"
              />
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
