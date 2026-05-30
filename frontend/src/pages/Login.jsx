import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import toast from "react-hot-toast";

import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      toast.success("Login Successful 🚀");

      navigate("/dashboard");

    } catch (error) {

      toast.error("Invalid Credentials");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-[400px]"
      >

        <div className="flex items-center gap-3 mb-8">

          <div className="bg-blue-600 p-3 rounded-xl">
            <LogIn className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            InterviewAce AI
          </h1>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 mb-6 rounded-xl bg-slate-800 text-white outline-none"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white p-4 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-gray-300 mt-6 text-center">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-400 ml-2"
          >
            Register
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Login;