import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState("Marry Doe");
  const [phone, setPhone] = useState("9778884345");
  const [email, setEmail] = useState("Marry@gmail.com");
  const [password, setPassword] = useState("Marry1234");
  const [company, setCompany] = useState("Marry Inc.");
  const [isAgency, setIsAgency] = useState("");

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone || !company || !isAgency) {
      alert("Please fill all required fields");
      return;
    }

    const newUser = { name, email, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((user) => user.email === newUser.email);

    if (exists) {
      alert("User already exists with this email.");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("userEmail", email);

    navigate("/profile");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100">
      <div className="bg-gray-100 shadow-xl h-full w-full max-w-[500px] flex flex-col p-8">
        <h1 className="text-4xl font-semibold text-black mb-6">
          Create your
          <br />
          PopX account
        </h1>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col flex-grow"
        >
          <div className="relative mb-7">
            <label
              htmlFor="fullName"
              className="absolute left-6 -top-2 text-sm text-[#6329F5] bg-gray-100 px-3"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="full-name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="phoneNumber"
              className="absolute left-6 -top-2 text-sm text-[#6329F5] bg-gray-100 px-3"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phone"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="email"
              className="absolute left-6 -top-2 text-sm text-[#6329F5] bg-gray-100 px-3"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="password"
              className="absolute left-6 -top-2 text-sm text-[#6329F5] bg-gray-100 px-3"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="new-password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="companyName"
              className="absolute left-6 -top-2 text-sm text-[#6329F5] bg-gray-100 px-3"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="company"
              value={company}
              required
              onChange={(e) => setCompany(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  required
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                />
                Yes
              </label>
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                />
                No
              </label>
            </div>
          </div>

          <div className="flex-grow" />

          <button
            type="submit"
            className="mt-auto w-full bg-[#6329F5] text-white py-3 rounded-md text-md font-medium hover:bg-[#5222C6] transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
