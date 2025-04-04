import React from "react";

const Login = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100">
      <div className="bg-gray-100 shadow-xl h-full w-full max-w-[500px] flex flex-col p-8">
        <h1 className="text-4xl font-semibold text-black mb-3 leading-tight">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <form autoComplete="off">
          <div className="relative mb-5">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" Enter email address "
              className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#6a5bc1]"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-2 text-sm text-[#6329F5] bg-gray-100 px-1"
            >
              Email Address
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" Enter password "
              className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#6a5bc1]"
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-2 text-sm text-[#6329F5] bg-gray-100 px-1"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 bg-gray-400 text-white rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-gray-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
