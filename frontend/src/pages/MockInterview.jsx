import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import API from "../services/api";

function MockInterview() {

  const [type, setType] = useState("");

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const [result, setResult] = useState("");

  const generateQuestion = async (selectedType) => {

    setType(selectedType);

    try {

      const response = await API.post(
        "/interview/generate",
        {
          type: selectedType
        }
      );

      setQuestion(response.data);

    } catch (error) {

      alert("Failed to generate question");
    }
  };

  const evaluateAnswer = async () => {

    try {

      const response = await API.post(
        "/interview/evaluate",
        {
          question,
          answer
        }
      );

      setResult(response.data);

    } catch (error) {

      alert("Evaluation Failed");
    }
  };

  return (

    <div className="flex bg-gray-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-10">

        <Navbar />

        <div className="bg-gray-800 p-10 rounded-2xl">

          <h1 className="text-4xl font-bold mb-8">
            AI Mock Interview 🎤
          </h1>

          <div className="flex gap-4 mb-8">

            <button
              onClick={() => generateQuestion("HR Interview")}
              className="bg-blue-600 px-6 py-3 rounded-xl"
            >
              HR
            </button>

            <button
              onClick={() => generateQuestion("Technical Interview")}
              className="bg-green-600 px-6 py-3 rounded-xl"
            >
              Technical
            </button>

            <button
              onClick={() => generateQuestion("Behavioral Interview")}
              className="bg-purple-600 px-6 py-3 rounded-xl"
            >
              Behavioral
            </button>

          </div>

          {
            question && (

              <div className="mb-8">

                <h2 className="text-2xl mb-4">
                  AI Question
                </h2>

                <div className="bg-gray-900 p-6 rounded-xl">

                  {question}

                </div>

              </div>
            )
          }

          {
            question && (

              <div>

                <textarea
                  rows="8"
                  placeholder="Type your answer here..."
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                  className="w-full p-4 rounded-xl
                             bg-gray-900 border border-gray-700"
                />

                <button
                  onClick={evaluateAnswer}
                  className="mt-6 bg-gradient-to-r
                             from-blue-600 to-purple-600
                             px-8 py-3 rounded-xl"
                >
                  Evaluate Answer 🚀
                </button>

              </div>
            )
          }

          {
            result && (

              <div className="mt-10 bg-gray-900 p-8 rounded-2xl">

                <h2 className="text-2xl font-bold mb-6">
                  AI Feedback
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

export default MockInterview;