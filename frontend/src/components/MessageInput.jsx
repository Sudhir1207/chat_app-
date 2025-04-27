import React, { useState, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imgPrv, setImgPrv] = useState(null);
  const inputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPrv(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImgPrv(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleSndMsg = async (e) => {
    e.preventDefault();
    console.log("Clicked send button");
    if (!text.trim() && !imgPrv) return;

    try {
      console.log("Sending to backend:", {
        text: text.trim(),
        image: imgPrv,
      });

      await sendMessage({
        text: text.trim(),
        image: imgPrv,
      });

      setText("");
      setImgPrv(null);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="w-full relative z-50">
      <div className="absolute -translate-y-24 translate-x-2 px-2">
        {imgPrv && (
          <div className="relative bg-slate-900 p-2 w-full">
            <img
              src={imgPrv || "/vj.jpg"}
              alt="prev"
              className="w-20 h-20 object-cover rounded-lg  "
            />
            <button
              onClick={removeImage}
              className="absolute -translate-y-[78px] translate-x-[68px] hover:text-orange-600 cursor-pointer"
            >
              <X className="size-3" />
            </button>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSndMsg}
        className="flex items-center gap-1 bg-slate-900 p-3 pb-4"
      >
        <div className="flex-1 flex gap-1">
          <input
            type="text"
            value={text}
            className="w-full input input-bordered rounded-lg input-sm lg:input-md focus:outline-none "
            placeholder="write a message"
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={handleImgChange}
          />
          <button
            type="button"
            className={`hidden sm:flex btn btn-sm lg:btn-md btn-circle border-2 ${
              imgPrv ? "text-emerald-500" : "text-zinc-400"
            }`}
            onClick={() => inputRef.current?.click()}
          >
            <Image className="size-4 rounded-full" />
          </button>
        </div>
        <button
          className="btn btn-circle btn-sm hover:btn-accent"
          disabled={!text.trim() && !imgPrv}
          type="submit"
        >
          <Send className="size-4 text-orange-600" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
