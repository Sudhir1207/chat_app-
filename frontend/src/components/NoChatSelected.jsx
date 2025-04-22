import { MessageSquareQuote } from "lucide-react";
import React from "react";

const NoChatSelected = () => {
  return (
    <div className="flex flex-1 justify-center items-center h-[30rem] font-rkt">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="border-2 p-2 rounded-full border-orange-600 animate-bounce">
          <MessageSquareQuote className="size-5 text-orange-600" />
        </div>

        <h1>Welcome to Echo !</h1>
      </div>
    </div>
  );
};

export default NoChatSelected;
