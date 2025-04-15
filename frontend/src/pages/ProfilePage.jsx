import React from "react";
import { ImagePlus } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-y-3">
      <h1>Profile</h1>
      <span>My Info</span>
      <div className="w-[15%] h-auto relative">
        <img
          src="/cat.jpg"
          alt=""
          className="rounded-full border-4 border-slate-200 "
        />
        <div className="absolute  top-[100px] left-[90px] -translate-y-1/2 border-3 border-black">
          <ImagePlus className="w-5 h-5 p-1 bg-white text-black rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
