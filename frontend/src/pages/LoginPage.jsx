import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  MessageSquareQuote,
  User,
  Mail,
  Lock,
  EyeClosed,
  Eye,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();
  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email fromat");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be atleast 6 characters");
    return true;
  };

  const pwToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login(formData);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-screen font-rkt pt-20 md:pt-0 sm:pt-0 bg-[#36454f]">
      {/* left-side */}
      <div className="flex flex-col justify-center items-center">
        <div className="border-2 border-orange-600 p-1 border-dashed rounded-box">
          <MessageSquareQuote />
        </div>
        <h1>Welcome back</h1>
        <p className="text-xs font-thin">Sign in to your account</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-2 mt-4 w-[60%]"
        >
          <label for="email" className="font-extralight text-[14px]">
            Email
          </label>
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center text-gray-400 ">
              <Mail className="size-5" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="dasandco@gmail.com"
              className="bg-[#36454F] border-[1px] rounded p-1 pl-8 outline-none transition-all duration-300 ease-in-out focus:border-orange-600 w-full text-[#ea580c]"
            />
          </div>

          <label for="password" className="font-extralight text-[14px]">
            Password
          </label>
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-gray-400 ">
              <Lock className="size-5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-[#36454F] border-[1px] rounded p-1 pl-8 outline-none transition-all duration-300 ease-in-out focus:border-orange-600 w-full text-[#ea580c]"
            />
            <div
              onClick={pwToggle}
              className="absolute flex items-center right-2 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeClosed className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </div>
          </div>

          <button
            className="group bg-orange-600 flex justify-center items-center gap-2 hover:bg-orange-700 text-black text-center p-2 mt-2 rounded font-semibold text-md w-full"
            type="submit"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="size-5 animate-spin text-black group-hover:text-black bg-orange-600 group-hover:bg-orange-700" />
                Loading...
              </>
            ) : (
              "Sign in"
            )}
          </button>

          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="link text-orange-600 hover:text-orange-700"
            >
              Create an account
            </Link>{" "}
          </p>
        </form>
      </div>
      {/* right-side */}
      <div className="flex flex-col gap-2 justify-center items-center bg-[#ea580c]">
        <img
          src="/message-square-quote (1).svg"
          alt=""
          className="md:w-[30%] sm:w-[25%] border-1 border-white rounded-none md:rounded-2xl bg-[#36454f]"
        />
        <h1 className="bg-[#ea580c] font-mono mt-3 text-xl  ">Join Echo</h1>
        <p className="bg-[#ea580c] text-black font-mono mt-1 text-[14px]">
          Link up, share life, stay connected
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
