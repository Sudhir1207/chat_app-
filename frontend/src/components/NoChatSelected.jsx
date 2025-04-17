import { MessageSquareQuote } from "lucide-react";
import React from "react";

const NoChatSelected = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <MessageSquareQuote className="text-orange-600 animate-bounce bg-black rounded-full size-7 border-2 border-black p-[2px]" />
        <span className="text-xl">Welcome to Echo !</span>
        <span className="text-xs pt-2">
          Select a conversation from the sidebar to start chatting
        </span>
      </div>
    </div>
  );
};

export default NoChatSelected;
