import React, { useState } from "react";
import Modal from "react-modal";
import { PlusIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooks, addNotebook } from "../../actions/typeactions";
import { getrandomColor } from "../../actions/typeactions";
import { RandomColor } from "../Color/color";
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    backgroundColor: "#15191C",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    color: "#fff",
  },
};
Modal.setAppElement("#root");
function ModalNotebook() {
  const dispatchdata = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const colors = useSelector((state) => state.notebook.color);
  // console.log(colors);
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  function openModal() {
    setIsOpen(true);
    const random = RandomColor();
    dispatchdata(getrandomColor(random));
  }
  // const color = new TailwindColor().pick()
  function closeModal() {
    setIsOpen(false);
  }
  const subvalue = (e) => {
    e.preventDefault();
    const newnotebook = {
      text: val,
      color: colors.color,
      weight: colors.weight,
    };

    dispatchdata(addNotebook(newnotebook));
    setval("");
    setIsOpen(!modalIsOpen);
  };
  const [val, setval] = useState("");
  // console.log(val);
  return (
    <div>
      <p onClick={openModal} className="pr-2.5 pt-2.5">
        <PlusIcon className="w-5 h-5 cursor-pointer text-blue-600 rounded  hover:bg-gray-600" />
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={subvalue}>
          <div className="flex flex-col">
            <h1 className="text-center mb-5">Group Name.</h1>
            <input
              value={val}
              onChange={(e) => setval(e.target.value)}
              className="appearance-none bg-transparent border-b-2 border-gray-400 w-11/12 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter group Name"
              autoFocus
            />

            <button
              type="submit"
              className="w-2/4 text-center block mx-auto mt-10 py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ModalNotebook;
