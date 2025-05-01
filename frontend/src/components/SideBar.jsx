import { Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { useAuthStore } from "../store/useAuthStore";

const SideBar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineUsers, setShowOnlineUsers] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineUsers
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  const noOnlineUsers = filteredUsers.length === 0;

  if (isUsersLoading) return <SidebarSkeleton />;
  return (
    <div className="w-[30%] h-[80vh] flex flex-col">
      <div className="p-2 flex flex-col gap-2 border-r-[1px] border-orange-600 bg-gray-900">
        <div className="flex items-center gap-2">
          <Users className="text-orange-600 size-5" />
          <span className="text-sm lg:text-lg">Contacts</span>
        </div>

        <label className="flex items-center">
          <input
            type="checkbox"
            name="showOnline"
            checked={showOnlineUsers}
            onChange={(e) => setShowOnlineUsers(e.target.checked)}
            className="appearance-none w-3 h-3 border border-gray-300 rounded-md checked:bg-green-600 checked:border-transparent focus:outline-none transition duration-300"
          />
          <div className="flex items-center">
            <span className="ml-2 text-[10px] lg:text-sm text-nowrap">
              Show online only
            </span>
            <span className="text-xs ml-2 text-gray-500">
              ({onlineUsers.length - 1} online)
            </span>
          </div>
        </label>
      </div>

      {/* <div className="border-t-[1px] border-orange-600"></div> */}

      <div className="overflow-y-auto w-full scrollbar-thumb-orange-600 scrollbar-thin scrollbar-track-slate-950">
        {noOnlineUsers ? (
          <div className="text-center text-gray-300 py-4">
            No Online Users Found
          </div>
        ) : (
          filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full flex items-center hover:bg-gray-800 transition-colors py-4 lg:py-2 ${
                selectedUser?._id === user._id
                  ? "bg-gray-800 ring-1 ring-gray-800"
                  : ""
              }`}
            >
              <div className="relative mx-auto lg:mx-0 py-3 lg:pl-5">
                <img
                  src={user.profilePic || "/circle-user.svg"}
                  alt={user.name}
                  className={`size-8 lg:size-10 object-cover rounded-full ${
                    !user.profilePic ? "bg-white" : ""
                  }`}
                />
                {onlineUsers.includes(user._id) && (
                  <span className="absolute size-2 -translate-y-10 translate-x-2 bg-green-500 rounded-full ring-2 ring-black" />
                )}
              </div>
              <div className="hidden lg:flex flex-col items-start ml-2 ">
                <div className="ml-2">{user.fullName}</div>
                <span className=" text-gray-400 text-sm ml-2">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </span>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default SideBar;
