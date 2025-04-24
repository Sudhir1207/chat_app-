import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { ImagePlus, Mail, UserRound } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState();

  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File is too large (max 5MB)");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Img = reader.result;
      setSelectedImg(base64Img);
      await updateProfile({ profilePic: base64Img });
    };
  };
  return (
    <div className="min-h-screen w-[90%] mx-auto pt-9 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-y-3 shadow-2xl w-[90%] mx-auto p-6 mb-2 ">
        <h1 className="text-2xl font-rkt text-orange-600">Profile</h1>
        <span className="font-rkt">My Info</span>
        <div className="relative">
          <img
            src={
              isUpdatingProfile
                ? "/waiting_pablo.jpg"
                : selectedImg || authUser.profilePic || "vj.jpg"
            }
            alt=""
            className={`size-32 rounded-full border-4 border-black object-cover ${
              isUpdatingProfile ? "animate-pulse" : ""
            }`}
          />
          <label
            htmlFor="img-upload"
            className={`absolute -bottom-2 -right-2  -translate-x-2 -translate-y-7 border-[1px] border-orange-600 rounded-full ${
              isUpdatingProfile ? "animate-pulse" : ""
            } `}
          >
            <ImagePlus className="size-[25px] bg-black text-white rounded-full p-[5px]" />
            <input
              type="file"
              id="img-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImgUpload}
              disabled={isUpdatingProfile}
            />
          </label>
        </div>
        <span className="text-[11px] font-mono text-gray-500 text-nowrap">
          {isUpdatingProfile
            ? "Uploading..."
            : "Click the add icon to update the profile pic"}
        </span>

        <div className="flex flex-col gap-y-2 m-3">
          <div className="flex gap-x-2 items-center">
            <UserRound className="size-4" />
            <label htmlFor="fullName" className="text-sm">
              Full Name
            </label>
          </div>
          <p className="border-2 pl-3 pr-3 rounded-lg border-orange-600">
            {authUser.fullName}
          </p>
          <div className="flex gap-2 items-center">
            <Mail className="size-4" />
            <label htmlFor="email" className="text-sm">
              Email
            </label>
          </div>
          <p className="border-2 pl-3 pr-3 rounded-lg border-orange-600">
            {authUser.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-3 shadow-2xl w-[90%] mx-auto p-6 ">
        <h1 className="pt-3 font-rkt text-xl text-orange-600">
          Account Information
        </h1>
        <div className="flex justify-between w-full p-3">
          <span className="font-extralight font-rkt">Member since</span>
          <span>{authUser.createdAt?.split("T")[0]}</span>
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
