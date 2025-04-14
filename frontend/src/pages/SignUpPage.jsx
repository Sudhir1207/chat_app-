import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquareQuote, User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signUp, isSigningUp } = useAuthStore();
  // const validateForm =()={}
  // const handleSubmit =(e)={
  //   e.preventDefault()
  // }

  return (
    <div className="grid lg:grid-cols-2 min-h-screen font-rkt">
      {/* left-side */}
      <div className="flex flex-col justify-center items-center">
        <div className="border-2 border-orange-600 p-1 border-dashed rounded-box">
          <MessageSquareQuote />
        </div>
        <h1>Create account</h1>
        <p className="text-xs font-thin">Get started with your free account</p>
        <form action="" className="flex flex-col gap-y-2 mt-4 w-[60%]">
          <label for="fullname" className="font-extralight text-[14px]">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <User className="size-5" />
            </div>
            <input
              type="text"
              name="fullname"
              placeholder="leodas"
              className="bg-[#36454F] border-[1px] rounded p-1 pl-8 outline-none focus:border-orange-600 w-full text-[#ea580c]"
            />
          </div>

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
              placeholder="dasandco@gmail.com"
              className="bg-[#36454F] border-[1px] rounded p-1 pl-8 outline-none focus:border-orange-600 w-full text-[#ea580c]"
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
              type="password"
              name="password"
              placeholder="password"
              className="bg-[#36454F] border-[1px] rounded p-1 pl-8 outline-none focus:border-orange-600 w-full text-[#ea580c]"
            />
          </div>

          <button className="bg-orange-600 text-black p-2 mt-2 rounded font-semibold text-md">
            Create account
          </button>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="link text-orange-600 hover:text-orange-700"
            >
              Sign In
            </Link>{" "}
          </p>
        </form>
      </div>
      {/* right-side */}
      <div className="flex flex-col gap-2 justify-center items-center bg-[#ea580c]">
        <img
          src="/message-square-quote (1).svg"
          alt=""
          className="w-[30%] border-1  border-white rounded-box"
        />
        <h1 className="bg-[#ea580c] font-mono mt-3 text-xl  ">
          Join our Community
        </h1>
        <p className="bg-[#ea580c] font-thin mt-3 text-sm">
          Connect with Nanbas, Nanbis
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
