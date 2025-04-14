import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquareQuote } from "lucide-react";
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
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="border-2 border-orange-600 p-1 border-dashed rounded-box">
          <MessageSquareQuote />
        </div>
        <h1>Create account</h1>
        <p className="text-xs font-thin">Get started with your free account</p>
        <form action="" className="flex flex-col gap-y-2 mt-4 w-[60%]">
          <label for="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            className="bg-[#36454F] border-[1px] rounded p-1 pl-3 outline-none focus:border-orange-600"
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            className="bg-[#36454F] border-[1px] rounded p-1 pl-3 outline-none focus:border-orange-600"
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            className="bg-[#36454F] border-[1px] rounded p-1 pl-3 outline-none focus:border-orange-600"
          />
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
    </div>
  );
};

export default SignUpPage;
