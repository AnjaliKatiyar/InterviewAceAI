import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import toast from "react-hot-toast";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

    if (loading) return;

    setLoading(true);

    try {

      const response = await API.post(
        "/auth/register",
        formData
      );

      console.log(response.data);

      toast.success("Registration Successful 🚀");

      navigate("/");

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data || "Registration Failed"
      );

    } finally {

      setLoading(false);
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

          <div className="bg-green-600 p-3 rounded-xl">
            <UserPlus className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-4 mb-6 rounded-xl bg-slate-800 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 transition-all text-white p-4 rounded-xl font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        <p className="text-gray-300 mt-6 text-center">

          Already have an account?

          <Link
            to="/"
            className="text-blue-400 ml-2"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Register;