import { useChatStore } from "../store/useChatStore";

import SideBar from "../components/SideBar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import { MessageSquareQuote } from "lucide-react";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-700 rounded-lg w-[80%] h-[80vh] mt-11">
        <div className="overflow-hidden flex">
          <SideBar />
          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
