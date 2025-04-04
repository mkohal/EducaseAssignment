import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100">
      <div className="bg-gray-100 shadow-xl h-full w-full max-w-[500px] flex flex-col">
        <div className="mt-auto p-5">
          <h1 className="text-4xl font-semibold text-black mb-2">
            Welcome to PopX
          </h1>
          <p className="text-xl text-gray-500 mb-8">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="w-full py-3 mb-4 bg-[#6329F5] text-white rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-[#5222C6]"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 bg-[#CABBF7] text-[#3F1D87] rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-[#B4A3E0]"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
