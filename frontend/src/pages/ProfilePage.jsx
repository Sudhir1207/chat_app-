import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { ImagePlus, Mail, UserRound } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  const handleImgUpload = async (e) => {};
  return (
    <div className="min-h-screen w-[90%] mx-auto pt-16 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-y-3 shadow-2xl w-[90%] mx-auto p-6 mb-2">
        <h1 className="text-3xl font-rkt text-orange-600">Profile</h1>
        <span className="font-rkt">My Info</span>
        <div className="relative">
          <img
            src="vj.jpg"
            alt=""
            className="max-w-48 rounded-full border-4 border-black"
          />
          <div className="absolute -bottom-2 -right-2  -translate-x-4 -translate-y-7 border-[1px] border-orange-600 rounded-full ">
            <ImagePlus className="size-[25px] bg-black text-white rounded-full p-[5px]" />
          </div>
        </div>
        <span className="text-[13px] font-mono text-gray-500">
          Click the add icon to update your photo
        </span>

        <form action="" className="flex flex-col gap-y-2 m-3">
          <div className="flex gap-x-2 items-center">
            <UserRound className="size-4"/>
            <label htmlFor="fullName" className="text-sm">Full Name</label>
          </div>

          <input type="text" name="fullName" className="rounded-lg pl-3 outline-none border-[1px] border-black focus:border-orange-600 transition-colors duration-300 ease-in-out"/>
          <div className="flex gap-2 items-center">
            <Mail className="size-4"/>
            <label htmlFor="email" className="text-sm">Email</label>
          </div>
          <input type="email" name="email" className="rounded-lg pl-3 outline-none border-[1px] border-black focus:border-orange-600 transition-colors duration-300 ease-in-out"/>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-3 shadow-2xl w-[90%] mx-auto p-6 ">
        <h1 className="pt-3 font-rkt text-xl text-orange-600">Account Information</h1>
        <div className="flex justify-between w-full p-3">
          <span className="font-extralight font-rkt">Member since</span>
          <span>12-07-2002</span>
        </div>
        <hr className="h-[1px] w-full bg-gray-300 my-4" />
        <div className="flex justify-between w-full p-3">
          <span className="font-extralight font-rkt">Account Status</span>
          <span className="text-green-700">Active</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
