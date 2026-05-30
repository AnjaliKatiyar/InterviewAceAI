import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import API from "../services/api";

function CodingEvaluator() {

  const [question] = useState(
    "Write a Java program to reverse a string."
  );

  const [code, setCode] = useState("");

  const [feedback, setFeedback] = useState("");

  const evaluateCode = async () => {

    try {

      const response = await API.post(
        "/coding/evaluate",
        {
          question,
          code,
        }
      );

      setFeedback(response.data);

    } catch (error) {

      alert("Evaluation failed");
    }
  };

  return (

    <div className="flex bg-gray-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-10">

        <Navbar />

        <div className="bg-gray-800 p-10 rounded-2xl">

          <h1 className="text-4xl font-bold mb-8">
            Coding Evaluator 💻
          </h1>

          <div className="bg-gray-900 p-6 rounded-xl mb-8">

            <h2 className="text-2xl mb-4">
              Question
            </h2>

            <p>{question}</p>

          </div>

          <textarea
            placeholder="Write your code here..."
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
            className="w-full h-80 bg-black text-green-400 
                       p-6 rounded-xl font-mono"
          />

          <button
            onClick={evaluateCode}
            className="bg-blue-600 px-6 py-3 rounded-xl mt-6"
          >
            Evaluate Code 🚀
          </button>

          {
            feedback && (

              <div className="mt-10 bg-gray-900 p-8 rounded-2xl">

                <h2 className="text-2xl font-bold mb-4">
                  AI Code Review
                </h2>

                <pre className="whitespace-pre-wrap text-gray-300">
                  {feedback}
                </pre>

              </div>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default CodingEvaluator;