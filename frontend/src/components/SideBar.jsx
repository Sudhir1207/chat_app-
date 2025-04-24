import { Users } from "lucide-react";
import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const SideBar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const onlineUsers = [];

  // useEffect(() => {
  //   getUsers();
  // }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;
  return (
    <div className="bg-gray-900 md:w-[25%] w-[40%]  h-[80vh]">
      <div className="p-4 flex gap-2 items-center">
        <Users className="text-orange-600 size-5" />
        <span>Contacts</span>
      </div>
      <label className="ml-3">
        <input
          type="checkbox"
          name="showOnline"
          className="appearance-none w-3 h-3 border border-gray-300 rounded-md checked:bg-green-600 checked:border-transparent focus:outline-none transition duration-200"
        />
        <span className="ml-2">Show online only</span>
      </label>
      <div className="border-t-[1px] border-orange-600 mt-4"></div>
    </div>
  );
};

export default SideBar;
