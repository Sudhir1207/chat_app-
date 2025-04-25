import React from "react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { Divide } from "lucide-react";
import MessagesSkeleton from "./skeletons/MessagesSkeleton";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  // useEffect(() => {
  //   getMessages(selectedUser._id);
  // }, [selectedUser._id, getMessages]);

  if (isMessagesLoading)
    return (
      <div className="flex flex-col flex-1 overflow-auto">
        <ChatHeader />
        <MessagesSkeleton />
        <MessageInput />
      </div>
    );

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <ChatHeader />
      <p>Messages...</p>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
