import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", score: 60 },
  { day: "Tue", score: 70 },
  { day: "Wed", score: 75 },
  { day: "Thu", score: 80 },
  { day: "Fri", score: 85 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 92 },
];

function AnalyticsChart() {

  return (

    <div className="bg-gray-800 p-6 rounded-2xl mt-10">

      <h2 className="text-2xl mb-6">
        Weekly Progress 📈
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#3b82f6"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;