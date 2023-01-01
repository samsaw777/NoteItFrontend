import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Loginauth } from "../../actions/authtype";
import { useDispatch, useSelector } from "react-redux";
import GLogin from "./GLogin";
import { toast } from "react-toastify";
import Loading from "../loader/Userloading";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
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
  const error = useSelector((state) => state.errors.errors.msg);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdetails({
      ...formdetails,
      [name]: value,
    });
  };
  const [errors, setErrors] = useState("");
  //Login in to the application
  const loginin = (e) => {
    e.preventDefault();
    setRedirectuser(!redirectuser);
    const { email, password } = formdetails;
    // console.log(formdetails);
    if (!email && !password) {
      setErrors("All fields are required");
    } else if (!email) {
      setErrors("Email is required");
    } else if (!password) {
      setErrors("Password cannot be empty");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors("Invalid email address");
    } else {
      dispatch(Loginauth({ email, password }));

      setFormdetails(initialState);
    }
  };

  //route to the default page if user exists
  useEffect(() => {
    if (Object.keys(userback).length !== 0) {
      history.push("/landing");
    }
  }, [userback]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="h-viewHeight background flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
              <h1 className="font-bold text-center text-2xl mb-5 text-buttonColor">
                Note IT
              </h1>

              <div className="bg-buttonColor shadow w-full rounded-lg divide-y divide-gray-200">
                <div className="px-5 py-7">
                  <h1 className="mb-8 text-3xl text-center text-gray-100">
                    Sign In
                  </h1>
                  <form onSubmit={loginin}>
                    {errors ? (
                      <div className="w-full text-center bg-red-300 text-black p-3 rounded-lg mb-2">
                        {errors}
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {error ? (
                      <div className="w-full text-center bg-red-300 text-black p-3 rounded-lg mb-2">
                        {error}
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <input
                      type="text"
                      className="border border-grey-light rounded-lg px-3 py-3 mt-1 mb-5 text-sm w-full"
                      onChange={handleInput}
                      value={formdetails.email}
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      className="border border-grey-light rounded-lg px-3 py-3 mt-1 mb-5 text-sm w-full"
                      onChange={handleInput}
                      value={formdetails.password}
                      name="password"
                      placeholder="Password"
                    />
                    <button
                      type="submit"
                      className="transition duration-200 bg-green-400 hover:bg-green-600 focus:bg-green-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                    >
                      <span className="inline-block mr-2">Login</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 inline-block"
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
                  <p classNameName="text-center w-full mt-2 text-gray-100">
                    OR
                  </p>
                  <GLogin />
                </div>
                <div className="py-5">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-center sm:text-left whitespace-nowrap group">
                      <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-100 group-hover:bg-gray-200 group-hover:text-black focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4 inline-block align-text-top"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                          />
                        </svg>
                        <Link to="/reset">
                          <span className="inline-block ml-1 text-gray-100 group-hover:text-black">
                            Forgot Password
                          </span>
                        </Link>
                      </button>
                    </div>
                    <div className="text-center sm:text-right  whitespace-nowrap">
                      <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="grid grid-cols-2 gap-1">
                  <div className="text-center sm:text-left whitespace-nowrap">
                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        classNameName="w-4 h-4 inline-block align-text-top"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      <Link to="/" className="inline-block ml-1">
                        Back to the app.
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
