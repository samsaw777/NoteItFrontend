import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { register } from "../../actions/authtype";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [registerinfo, setRegisteInfo] = useState(initialState);
  const [cpassword, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisteInfo({
      ...registerinfo,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([]);
  let userback = useSelector((state) => state.auth.user);

  const error = useSelector((state) => state.errors.errors.msg);
  useEffect(() => {
    axios
      .get("https://noteitappapi.herokuapp.com/allusers")
      .then((users) => {
        setUsers(users.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const registeruser = async () => {
    const { name, email, password } = registerinfo;
    //Create the user

    dispatch(register({ name, email, password }));
    // console.log(response);
  };

  const validate = () => {
    if (
      !registerinfo.name &&
      !registerinfo.email &&
      !registerinfo.password &&
      !registerinfo.cpassword
    ) {
      setErrors("All the fields are empty");
    } else if (!registerinfo.name) {
      setErrors("Name cannot be empty");
    } else if (!registerinfo.email) {
      setErrors("Email cannot be empty");
    } else if (!registerinfo.password) {
      setErrors("Password cannot be empty");
    } else if (!cpassword) {
      setErrors("Confirm Password cannot be empty");
    } else if (registerinfo.password.length < 6) {
      setErrors("Password should be atleast 6 letters");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerinfo.email)
    ) {
      setErrors("Invalid email address");
    } else if (cpassword !== registerinfo.password) {
      setErrors("Password not equal");
    } else {
      registeruser();
      setRegisteInfo(initialState);
      setPassword("");
      setErrors("");
      // checkerror();
    }
    // return errors;
  };
  const checkpassword = (e) => {
    e.preventDefault();
    validate();
    //Create the user
  };
  useEffect(() => {
    if (Object.keys(userback).length !== 0) {
      history.push("/landing");
    }
  }, [userback]);
  return (
    <div className="h-viewheight background ">
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-buttonColor px-6 py-8 rounded shadow-md text-black w-full">
            <form onSubmit={checkpassword}>
              <h1 class="mb-8 text-3xl text-center text-gray-100">Sign up</h1>
              {errors ? (
                <div class="w-full text-center bg-red-300 text-black p-3 rounded-lg mb-2">
                  {errors}
                </div>
              ) : (
                <div></div>
              )}
              {error ? (
                <div class="w-full text-center bg-red-300 text-black p-3 rounded-lg mb-2">
                  {error}
                </div>
              ) : (
                <div></div>
              )}
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Full Name"
                value={registerinfo.name}
                onChange={handleChange}
              />

              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                value={registerinfo.email}
                onChange={handleChange}
              />

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                value={registerinfo.password}
                onChange={handleChange}
              />
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            <div class="text-center text-sm text-gray-100 mt-4">
              By signing up, you agree to the
              <a class="no-underline border-grey-dark pr-2 pl-2" href="/">
                Terms of Service
              </a>{" "}
              and
              <a class="no-underline border-grey-dark pl-2" href="/">
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-buttonColor mt-6">
            Already have an account?
            <Link class="no-underline border-b  text-buttonColor" to="/login">
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
