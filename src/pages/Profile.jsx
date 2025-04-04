import React from "react";
import { useState, useEffect } from "react";
import { Camera } from "lucide-react";

const Profile = () => {
    const name = sessionStorage.getItem("userName") || "Marry Doe";
    const email = sessionStorage.getItem("userEmail") || "Marry@gmail.com";
    const [imageUrl, setImageUrl] = useState("");

      useEffect(() => {
        fetch("https://randomuser.me/api/")
          .then((res) => res.json())
          .then((data) => {
            setImageUrl(data.results[0].picture.large);
          });
      }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100">
      <div className="bg-gray-100 shadow-xl h-full w-full max-w-[500px] flex flex-col p-0">
        <div className="bg-white shadow-md p-6">
          <h1 className="text-xl mb-0">Account Settings</h1>
        </div>
        <div className="flex flex-col p-6 flex-grow">
          <div className="flex items-center mb-4">
            <div className="relative">
              <img
                src={imageUrl}
                alt="User Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div className="absolute bottom-1 left-11">
                <Camera className="w-5 h-5 text-white bg-[#6329F5] p-0.5 rounded-full" />
              </div>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-medium text-gray-800">{name}</h2>
              <p className="text-sm text-gray-600">{email}</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            dolore id. Deserunt cumque illum incidunt quas doloremque, earum
            sequi unde adipisci in veniam repellendus maxime fugiat! Iusto
            labore distinctio in!
          </p>

          <hr className="border-dashed border-1 border-gray-400 mb-6" />

          <div className="flex-grow" />

          <hr className="border-dashed border-1 border-gray-400 mt-auto mb-6" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
