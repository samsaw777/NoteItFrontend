import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../actions/authtype";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [registerinfo, setRegisteInfo] = useState(initialState);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisteInfo({
      ...registerinfo,
      [name]: value,
    });
  };

  const registeruser = () => {
    const { name, email, password } = registerinfo;
    //Create the user
    console.log(name, email, password);
    //Attempt to register
    dispatch(register({ name, email, password }));
  };

  const checkpassword = (e) => {
    e.preventDefault();
    if (password === registerinfo.password) {
      registeruser();
      history.push("/landing");
      toast.success("Registered Sucessfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setRegisteInfo(initialState);
      setPassword("");
    } else {
      alert("password not matched");
    }
  };
  return (
    <div className="h-viewheight bg-sidebarBackgroundColor-color">
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form onSubmit={checkpassword}>
              <h1 class="mb-8 text-3xl text-center">Sign up</h1>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            <div class="text-center text-sm text-grey-300 mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="/"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="/"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-gray-400 mt-6">
            Already have an account?
            <Link
              class="no-underline border-b border-blue text-gray-400"
              to="/login"
            >
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
