import React from "react";
import { useChatStore } from "../store/useChatStore";
import SideBar from "../components/SideBar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col bg-[#343434] p-4 rounded-lg w-[80%] h-[600px] mt-12 ring-2 ring-orange-600 ring-inset overflow-hidden">
        <SideBar />
        {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
      </div>
    </div>
  );
};

export default HomePage;
