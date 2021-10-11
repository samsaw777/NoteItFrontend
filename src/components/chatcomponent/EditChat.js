import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { store, db } from "../../firebase";
import { useSelector } from "react-redux";
const customStyles = {
  content: {
    top: "50%",
    backgroundColor: "#1D2127",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "90%",
    borderRadius: "20px",
    color: "#fff",
  },
};
const EditChat = ({ id, refetch, setRefetch }) => {
  console.log(id);
  const [getData, setGetData] = useState();
  console.log(getData);
  const current = new Date().toTimeString();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [fileN, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  console.log(fileUrl);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [time, setTime] = useState("");
  const chatinfo = useSelector((state) => state.chat.chat);
  const user = useSelector((state) => state.auth.user);
  const [errors, setErrors] = useState("");
  const [fileName, setFilename] = useState("");
  function openModal() {
    setIsOpen(true);
  }
  // const color = new TailwindColor().pick()
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    db.collection("task")
      .doc(`${id}`)
      .get()
      .then((snapshot) => {
        setGetData({ ...snapshot.data() });
      });
  }, [id]);

  useEffect(() => {
    setDescription(getData?.description);
    setTitle(getData?.title);
    setTag(getData?.tag);
    setFileUrl(getData?.file);
    setTime(getData?.time);
    setFilename(getData?.fileName);
  }, [getData]);

  const handleInputChnage = async (e) => {
    var file = e.target.files[0];
    setLoading(true);
    setFileName(file);
    // console.log(file);
    // setFileUrl(file);
    const storageRef = store.ref();
    const fileRef = storageRef.child(file.name);
    console.log(fileRef);
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    setFileUrl(url);
    setLoading(false);
  };

  const sendChat = (e) => {
    e.preventDefault();
    if (title && description && tag) {
      db.collection("task")
        .doc(`${id}`)
        .update({
          title: title,
          description: description,
          postedBy: user._id,
          postedByEmail: user.email,
          onGroup: chatinfo.id,
          tag: tag,
          fileName: fileN.name,
          file: fileUrl,
          time: time,
        })
        .then(() => {
          // alert("Documents added sucessfully");
          setTitle("");
          setDescription("");
          setTag("");
          setFileUrl("");
          setFileName("");
          closeModal();
          setRefetch(!refetch);
        })
        .catch((e) => {
          console.error("Error while sending", e);
        });
    } else {
      setErrors("Enter all documents!");
    }
  };
  return (
    <>
      <div onClick={openModal}>
        <div className="cursor-pointer ml-auto mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-tabbackgroundcolor"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {errors && (
          <div className="w-full text-center bg-red-300 text-black p-3 rounded-lg mb-2">
            {errors}
          </div>
        )}
        <form onSubmit={sendChat}>
          <div className="flex flex-col">
            <h1 className="text-center mb-5">Update Your Task.</h1>
            <div className="w-full flex mb-5 mt-5">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="appearance-none bg-transparent border-b-2 border-gray-400 w-3/6 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Title"
                autoFocus
              />
              <div className="w-3/6 flex ml-10">
                <button
                  type="button"
                  className={
                    tag === "green"
                      ? "w-1/5 border-t-4 border-green-400 mr-5 bg-gray-600 p-2"
                      : "w-1/5 border-t-4 border-green-400 mr-5 p-2"
                  }
                  onClick={() => setTag("green")}
                >
                  G
                </button>
                <button
                  type="button"
                  className={
                    tag === "yellow"
                      ? "w-1/5 border-t-4 border-yellow-400 mr-5 bg-gray-600 p-2"
                      : "w-1/5 border-t-4 border-yellow-400 mr-5 p-2"
                  }
                  onClick={() => setTag("yellow")}
                >
                  M
                </button>
                <button
                  type="button"
                  className={
                    tag === "red"
                      ? "w-1/5 border-t-4 border-red-400 mr-5 bg-gray-600 p-2"
                      : "w-1/5 border-t-4 border-red-400 mr-5 p-2"
                  }
                  onClick={() => setTag("red")}
                >
                  R
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="appearance-none bg-transparent border-b-2 border-gray-400 w-11/12 text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Description"
                // autoFocus
                rows={10}
                cols={10}
              />
              <div className="w-full flex mt-5">
                <label for="fileinput">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer pt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <input
                  id="fileinput"
                  type="file"
                  onChange={handleInputChnage}
                  className="hidden"
                  // value={fileN}
                />
                <p className="text-lg ml-5">
                  {fileN ? fileN.name : fileName || "No File Selected"}
                </p>
                <div
                  className={
                    loading
                      ? "w-5 h-5 ml-auto mr-16 animate-spin block"
                      : "hidden"
                  }
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {!loading && (
              <button
                type="submit"
                className="w-2/4 text-center block mx-auto mt-10 py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
              >
                Submit Task
              </button>
            )}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditChat;
