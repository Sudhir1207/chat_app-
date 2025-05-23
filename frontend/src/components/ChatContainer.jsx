import React, { useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessagesSkeleton from "./skeletons/MessagesSkeleton";
import { useAuthStore } from "../store/useAuthStore";
const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subToMsgs,
    unSubToMsgs,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const autoScrollRef = useRef();

  useEffect(() => {
    getMessages(selectedUser._id);
    subToMsgs();

    return () => unSubToMsgs();
  }, [selectedUser._id, getMessages, subToMsgs, unSubToMsgs]);

  useEffect(() => {
    if (autoScrollRef.current && messages) {
      autoScrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading)
    return (
      <div className="flex flex-col flex-1 overflow-auto">
        <ChatHeader />
        <MessagesSkeleton />
        <MessageInput />
      </div>
    );

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <ChatHeader />
      <div className="w-full p-3 pt-1 pb-1 h-[64vh] lg:h-[63vh]  flex flex-col bg-slate-800">
        <div className="overflow-y-auto p-4 space-y-4 scrollbar-none flex-1">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`chat ${
                message.senderId === authUser._id ? "chat-end" : "chat-start"
              }`}
              ref={autoScrollRef}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={
                      message.senderId === authUser._id
                        ? authUser.profilePic
                        : "/circle-user.svg"
                    }
                    alt="profile"
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {message.createdAt}
                </time>
              </div>
              <div className="chat-bubble flex flex-col text-sm">
                {message.image && (
                  <img
                    src={message.image}
                    alt="attachment"
                    className="sm:max-w-[120px] rounded-lg mb-2"
                  />
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
