import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const UpdatePassword = () => {
  const history = useHistory();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const updatePassword = (e) => {
    e.preventDefault();
    const data = { password, token };
    axios
      .post("http://localhost:9000/resetpassword", data)
      .then((response) => {
        console.log(response);
        if (response) {
          toast.success("Password Changed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setPassword("");
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-viewHeight bg-sidebarBackgroundColor-color">
      <div class=" flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 class="font-bold text-center text-2xl mb-5 text-gray-300">
            Note IT
          </h1>

          <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div class="px-5 py-7">
              <h1 class="mb-8 text-xl text-center text-gray-700">
                Enter your password.
              </h1>
              <form onSubmit={updatePassword}>
                <input
                  type="password"
                  class="border border-grey-light rounded-lg px-3 py-3 mt-1 mb-5 text-sm w-full"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="email"
                  placeholder="Password"
                />

                <button
                  type="submit"
                  class="transition duration-200 bg-green-400 hover:bg-green-600 focus:bg-green-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span class="inline-block mr-2">Update Password</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdatePassword;
