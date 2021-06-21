import React, { useState } from "react";

const initialState = {
  username: "",
  password: "",
};
function Login() {
  const [formdetails, setFormdetails] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdetails({
      ...formdetails,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(formdetails);
    setFormdetails(initialState);
  };
  return (
    <div className='flex justify-center items-center h-screen p-10'>
      <div className='shadow-lg rounded-lg py-4 px-8 bg-white'>
        <h2 className='text-gray-800 text-3xl'>NOTE-IT</h2>
        <div className='mt-2'>
          <form onSubmit={login}>
            <div className='mx-w'>
              <div className='flex-column justify-start items-start my-5'>
                {/* <label className='text-sm text-gray-00'>Username</label> */}
                <input
                  className='w-full px-5 py-1 text-gray-700 bg-gray-100 rounded'
                  name='username'
                  value={formdetails.username}
                  onChange={handleInput}
                  placeholder='Enter Username(eg. abc)'
                />
              </div>
              <div className='flex-column justify-start items-start my-5'>
                {/* <label className='text-sm text-gray-00'>Password</label> */}
                <input
                  className='w-full px-5 py-1 text-gray-700 bg-gray-100 rounded'
                  name='password'
                  value={formdetails.password}
                  onChange={handleInput}
                  placeholder='Enter password(eg. abc@123)'
                />
              </div>
              <button>login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
