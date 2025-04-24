import { Users } from "lucide-react";
import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const SideBar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const onlineUsers = [];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;
  return (
    <div className="bg-gray-900 w-[30%] h-[80vh]">
      <div className="p-4 flex gap-2 items-center">
        <Users className="text-orange-600 size-5" />
        <span className="text-sm lg:text-lg">Contacts</span>
      </div>
      <label className="ml-3 flex items-center">
        <input
          type="checkbox"
          name="showOnline"
          className="appearance-none w-3 h-3 border border-gray-300 rounded-md checked:bg-green-600 checked:border-transparent focus:outline-none transition duration-200"
        />
        <span className="ml-2 text-[10px] lg:text-lg text-nowrap">
          Show online only
        </span>
      </label>
      <div className="border-t-[1px] border-orange-600 mt-4"></div>

      <div className="overflow-y-auto w-full">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full flex items-center hover:bg-gray-800 transition-colors ${
              selectedUser?._id === user._id
                ? "bg-gray-800 ring-1 ring-gray-800"
                : ""
            }`}
          >
            <div className="relative mx-auto lg:mx-0 py-3 lg:pl-5">
              <img
                src={user.profilePic || "/circle-user.svg"}
                alt="user.name"
                className={`size-8 lg:size-10 object-cover rounded-full ${
                  !user.profilePic ? "bg-white" : ""
                }`}
              />
              <span className="absolute size-2 -translate-y-9 translate-x-2 bg-green-500 rounded-full ring-2 ring-black"></span>
            </div>
            <div className="hidden lg:flex flex-col items-start ml-2 ">
              <div className="ml-2">{user.fullName}</div>
              <span className=" text-gray-400 text-sm ml-2">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
