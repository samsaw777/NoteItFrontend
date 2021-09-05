import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Loginauth } from "../../actions/authtype";
import { useDispatch, useSelector } from "react-redux";
import GLogin from "./GLogin";
const initialState = {
  email: "",
  password: "",
};
function Login() {
  const [formdetails, setFormdetails] = useState(initialState);
  const [redirectuser, setRedirectuser] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  let userback = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  console.log(userback);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdetails({
      ...formdetails,
      [name]: value,
    });
  };
  //Login in to the application
  const loginin = (e) => {
    e.preventDefault();
    setRedirectuser(!redirectuser);
    const { email, password } = formdetails;
    console.log(formdetails);
    dispatch(Loginauth({ email, password }));
    setFormdetails(initialState);
  };

  //route to the default page if user exists
  useEffect(() => {
    if (Object.keys(userback).length !== 0) {
      history.push("/notebook");
    }
  }, [userback]);

  return (
    <>
      {loading ? (
        <span class="flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      ) : (
        <>
          <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
              <h1 class="font-bold text-center text-2xl mb-5">Note IT</h1>

              <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div class="px-5 py-7">
                  <h1 class="mb-8 text-3xl text-center">Sign In</h1>
                  <form onSubmit={loginin}>
                    <input
                      type="text"
                      class="border border-grey-light rounded-lg px-3 py-3 mt-1 mb-5 text-sm w-full"
                      onChange={handleInput}
                      value={formdetails.email}
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      class="border border-grey-light rounded-lg px-3 py-3 mt-1 mb-5 text-sm w-full"
                      onChange={handleInput}
                      value={formdetails.password}
                      name="password"
                      placeholder="Password"
                    />
                    <button
                      type="submit"
                      class="transition duration-200 bg-green-400 hover:bg-green-600 focus:bg-green-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                    >
                      <span class="inline-block mr-2">Login</span>
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
                  <p className="text-center w-full mt-2">OR</p>
                  <GLogin />
                </div>
                <div class="py-5">
                  <div class="grid grid-cols-2 gap-1">
                    <div class="text-center sm:text-left whitespace-nowrap">
                      <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="w-4 h-4 inline-block align-text-top"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                          />
                        </svg>
                        <span class="inline-block ml-1">Forgot Password</span>
                      </button>
                    </div>
                    <div class="text-center sm:text-right  whitespace-nowrap">
                      <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-5">
                <div class="grid grid-cols-2 gap-1">
                  <div class="text-center sm:text-left whitespace-nowrap">
                    <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-4 h-4 inline-block align-text-top"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      <Link to="/" class="inline-block ml-1">
                        Back to your-app.com
                      </Link>
                    </button>
                    {/* <GoogleLoginScreen /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
