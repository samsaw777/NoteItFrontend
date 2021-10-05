import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    backgroundColor: "#363a37",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "70%",
    color: "#fff",
  },
};
Modal.setAppElement("#root");
const Chatmodel = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  // const color = new TailwindColor().pick()
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={openModal} className="bg-sideBar text-buttonColor p-2">
        Create Task
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <div className="flex flex-col">
            <h1 className="text-center mb-5">Enter Your Task</h1>
            <div className="w-full flex mb-5 mt-5">
              <input
                //   value={val}
                //   onChange={(e) => setval(e.target.value)}
                className="appearance-none bg-transparent border-b-2 border-gray-400 w-3/6 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Title"
                autoFocus
              />
              <div className="w-3/6 flex ml-10">
                <button className="w-1/5 border-t-4 border-green-300 mr-5">
                  G
                </button>
                <button className="w-1/5 border-t-4 border-yellow-300 mr-5">
                  M
                </button>
                <button className="w-1/5 border-t-4 border-red-400 mr-5">
                  R
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <textarea
                //   value={val}
                //   onChange={(e) => setval(e.target.value)}
                className="appearance-none bg-transparent border-b-2 border-gray-400 w-11/12 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Description"
                autoFocus
                rows={10}
                cols={10}
              />
              <div className="w-full flex mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="w-2/4 text-center block mx-auto mt-10 py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
            >
              Submit Task
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Chatmodel;

/* 

<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
</svg>
*/
