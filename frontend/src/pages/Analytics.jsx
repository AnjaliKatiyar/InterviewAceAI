import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AnalyticsChart from "../components/AnalyticsChart";

function Analytics() {

  return (

    <div className="flex bg-gray-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-10">

        <Navbar />

        <h1 className="text-4xl font-bold mb-10">
          Analytics Dashboard 📊
        </h1>

        <AnalyticsChart />

      </div>

    </div>
  );
}

export default Analytics;