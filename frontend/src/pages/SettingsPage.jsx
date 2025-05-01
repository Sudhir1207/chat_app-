import { Pencil, Trash, X } from "lucide-react";
import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

const SettingsPage = () => {
  const {
    authUser,
    updateUsername,
    isUpdatingUsername,
    deleteAccount,
    isDeletingAccount,
    changePassword,
  } = useAuthStore();
  const [activeModal, setActiveModal] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [text, setText] = useState(authUser.fullName);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const changeUserName = async () => {
    if (!text.trim()) {
      toast.error("Username cannot be empty");
      return;
    }
    await updateUsername({ fullName: text.trim() });
    setActiveModal(null);
  };

  const handleDelete = async () => {
    await deleteAccount();
    setActiveModal(null);
  };

  const handleApply = () => {
    if (!currentPassword || !newPassword) {
      setErrorMessage("Please fill in both fields");
      return;
    }

    changePassword(currentPassword, newPassword);

    setErrorMessage("");
    setCurrentPassword("");
    setNewPassword("");
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen w-[75%] mx-auto pt-[94px] font-rkt flex justify-center items-center">
      {activeModal === "username" && (
        <div className=" w-[40%] h-[60vh] lg:h-[50vh] fixed m-auto bg-black bg-opacity-90 ring-2 ring-orange-600 rounded-lg z-50 flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <span className="text-orange-600">Change Username</span>
            <input
              type="text"
              className="bg-white rounded text-black pl-2 w-[80%] h-8"
              value={text}
              onChange={handleChange}
            />
            <button
              className="bg-orange-600 p-2 rounded text-black hover:bg-orange-700"
              onClick={changeUserName}
              disabled={isUpdatingUsername}
            >
              {isUpdatingUsername ? "Updating..." : "Apply Changes"}
            </button>
            <button
              className="absolute top-2 right-2 hover:text-red-600"
              onClick={() => setActiveModal(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
      {activeModal === "password" && (
        <div className=" w-[40%] h-[60vh] lg:h-[50vh] fixed m-auto bg-black bg-opacity-80 ring-2 ring-orange-600 rounded-lg z-50 flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex gap-2 items-center">
              <label for="current-password"> Current Password</label>
              <input
                type="text"
                name="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="bg-white rounded text-black pl-2 w-[40%] h-7"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label for="new-password">New Password</label>
              <input
                type="text"
                name="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-white rounded text-black pl-2 w-[40%] h-7 ml-5"
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm text-center">
                {errorMessage}
              </div>
            )}

            <button
              className="bg-orange-600 p-2 rounded text-black hover:bg-orange-700 mt-4"
              onClick={handleApply}
            >
              Change Password
            </button>
            <button
              className="absolute top-2 right-2 hover:text-red-600"
              onClick={() => setActiveModal(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}

      {activeModal === "delete" && (
        <div className=" w-[40%] h-[60vh] lg:h-[50vh] fixed m-auto bg-black bg-opacity-80 ring-2 ring-orange-600  rounded-lg z-50 flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <span className=" text-justify mx-auto p-2 text-lg">
              Are you sure about that ?
            </span>
            <span>Warning: This Action is Irreversible</span>
            <button
              className="bg-orange-600 p-2 rounded text-black hover:bg-orange-700"
              onClick={handleDelete}
              disabled={isDeletingAccount}
            >
              {isDeletingAccount ? "Deleting..." : "Delete Account"}
            </button>
            <button
              className="absolute top-2 right-2 hover:text-red-600 "
              onClick={() => setActiveModal(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}

      <div className="flex  justify-center items-center h-[80vh] w-full bg-slate-700 ">
        <div className="flex flex-col gap-y-4 w-[40%] bg-slate-900 p-6 shadow-lg rounded-lg ring-2 ring-orange-600">
          <button
            className="flex justify-between items-center gap-2 text-green-600 hover:text-green-800"
            onClick={() => setActiveModal("username")}
          >
            Change Username
            <Pencil className="size-5 " />
          </button>
          <hr className="border-t-gray-400 border-t-[1px]" />
          <button
            className="flex justify-between items-center gap-2 text-green-600 hover:text-green-800"
            onClick={() => {
              setActiveModal("password");
            }}
          >
            Change Password
            <Pencil className="size-5 " />
          </button>
          <hr className="border-t-gray-400 border-t-[1px]" />
          <button
            className="flex justify-between items-center gap-2 text-red-700 hover:text-red-900"
            onClick={() => setActiveModal("delete")}
          >
            Delete Account
            <Trash className="size-5 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
