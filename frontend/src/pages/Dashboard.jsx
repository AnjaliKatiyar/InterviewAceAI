import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AnalyticsChart from "../components/AnalyticsChart";

import API from "../services/api";

import { useNavigate } from "react-router-dom";
function Dashboard() {

  const [analytics, setAnalytics] = useState({
    resumeCount: 0,
    interviewCount: 0,
    codingCount: 0,
  });

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics = async () => {

    try {

      const response =
        await API.get("/analytics");

      setAnalytics(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="flex bg-gray-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-10">

        <Navbar />

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-gradient-to-r 
                          from-blue-600 to-blue-800
                          p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl mb-4">
              Resume Analyses
            </h2>

            <p className="text-6xl font-bold">
              {analytics.averageScore || 0}%
            </p>

          </div>

          <div className="bg-gradient-to-r 
                          from-green-600 to-green-800
                          p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl mb-4">
              Interviews Taken
            </h2>

            <p className="text-6xl font-bold">
               {analytics.totalInterviews || 0}
            </p>

          </div>

          <div className="bg-gradient-to-r 
                          from-purple-600 to-purple-800
                          p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl mb-4">
              Coding Evaluations
            </h2>

            <p className="text-6xl font-bold">
                {analytics.codingStreak || 0}
            </p>

          </div>

        </div>

        <AnalyticsChart />

      </div>

    </div>
  );
}

export default Dashboard;