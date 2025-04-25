import React from "react";

const MessagesSkeleton = () => {
  const skeletonMessages = Array(30).fill(null);
  return (
    <div className="w-full p-3 pt-1 pb-1 h-[65vh] flex flex-col bg-slate-800">
      <div className="overflow-y-auto flex-1 scrollbar-none ">
        {skeletonMessages.map((_, idx) => (
          <div
            key={idx}
            className={`chat ${idx % 2 == 0 ? "chat-start" : "chat-end"}`}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full skeleton"></div>
            </div>

            <div className="chat-header skeleton h-4 w-16 mb-2"></div>

            <div className="chat-bubble skeleton h-16 w-[120px] lg:w-[200px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesSkeleton;
