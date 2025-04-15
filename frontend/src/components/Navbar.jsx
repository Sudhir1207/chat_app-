import { MessageSquareQuote, Bolt, UserRound, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <header className="flex justify-between pr-2 font-rkt w-full fixed z-40 border-b-[1px] border-b-black drop-shadow-xl bg-[#36454f]">
      <div className="flex gap-x-2 p-4 pr-1">
        <MessageSquareQuote className="text-orange-600" />
        <h2>Echo</h2>
      </div>

      <div className="flex items-center gap-x-2 p-4 pr-1">
        <Bolt className="text-orange-600 size-5" />
        <p className="hidden sm:inline">Settings</p>
        {authUser && (
          <>
            <Link to={"/profile"} className="flex items-center gap-2">
              <UserRound className="size-5 text-orange-600" />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            <button onClick={logout} className="flex items-center gap-2">
              <LogOut className="size-5 text-orange-600" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
