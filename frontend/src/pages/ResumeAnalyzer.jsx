import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import API from "../services/api";

function ResumeAnalyzer() {

  const [file, setFile] = useState(null);

  const [result, setResult] = useState("");

  const handleUpload = async () => {

    const formData = new FormData();

    formData.append("file", file);

    try {

      const response = await API.post(
        "/resume/analyze",
        formData
      );

      setResult(response.data);

    } catch (error) {

      alert("Analysis Failed");
    }
  };

  return (

    <div className="flex bg-gray-900 text-white min-h-screen">

      <Sidebar />

      <div className="ml-64 flex-1 p-10">

        <Navbar />

        <div className="bg-gray-800 p-10 rounded-2xl">

          <h1 className="text-4xl font-bold mb-8">
            AI Resume Analyzer 📄
          </h1>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            className="mb-6"
          />

          <br />

          <button
            onClick={handleUpload}
            className="bg-gradient-to-r from-blue-600 to-purple-600
                       px-6 py-3 rounded-xl hover:scale-105
                       transition duration-300"
          >
            Analyze Resume 🚀
          </button>

          {
            result && (

              <div className="mt-10 bg-gray-900 p-8 rounded-2xl">

                <h2 className="text-2xl font-bold mb-4">
                  AI Analysis Result
                </h2>

                <pre className="whitespace-pre-wrap text-gray-300">
                  {result}
                </pre>

              </div>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default ResumeAnalyzer;