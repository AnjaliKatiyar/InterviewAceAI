import {
  LayoutDashboard,
  FileText,
  Mic,
  Code2,
  BarChart3,
  User,
  Moon,
  LogOut
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (

    <div className="fixed left-0 top-0 h-screen w-64 
                    bg-[#081028] text-white p-6 
                    border-r border-gray-800">

      {/* LOGO */}

      <div className="mb-12">

        <h1 className="text-3xl font-bold">
          InterviewAce AI
        </h1>

      </div>

      {/* MENU */}

      <div className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-blue-600
                     transition duration-300
                     p-4 rounded-xl"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/mock-interview"
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-purple-600
                     transition duration-300
                     p-4 rounded-xl"
        >
          <Mic size={20} />
          AI Interview
        </Link>

        <Link
          to="/resume-analyzer"
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-green-600
                     transition duration-300
                     p-4 rounded-xl"
        >
          <FileText size={20} />
          Resume Analyzer
        </Link>

        <Link
          to="/coding-evaluator"
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-yellow-600
                     transition duration-300
                     p-4 rounded-xl"
        >
          <Code2 size={20} />
          Coding Evaluator
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-pink-600
                     transition duration-300
                     p-4 rounded-xl"
        >
          <BarChart3 size={20} />
          Analytics
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-cyan-600
                     transition duration-300
                     p-4 rounded-xl"
        >
          <User size={20} />
          Profile
        </Link>

        <button
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-gray-600
                     transition duration-300
                     p-4 rounded-xl text-left"
        >
          <Moon size={20} />
          Theme
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 
                     bg-[#17233f] hover:bg-red-600
                     transition duration-300
                     p-4 rounded-xl text-left"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;