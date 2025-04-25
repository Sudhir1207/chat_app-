import React from "react";
import { useChatStore } from "../store/useChatStore";
import { X } from "lucide-react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  //   const { onlineUsers } = useAuthStore();
  const onlineUsers = [];
  return (
    <div className="w-full h-[8vh] bg-gray-900 border-b-[1px] border-orange-600">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center">
          <img
            src={selectedUser.profilePic || "/circle-user.svg"}
            alt={selectedUser.fullName}
            className={`object-cover rounded-full size-8 mr-2  ${
              !selectedUser.profilePic ? "bg-white" : ""
            }`}
          />

          <div className="flex flex-col items-start">
            <span className="text-orange-600">{selectedUser.fullName}</span>
            <span className="text-[10px] text-gray-400">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </span>
          </div>
        </div>
        <div
          className="mr-3 hover:text-red-800"
          onClick={() => setSelectedUser(null)}
        >
          <X />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
