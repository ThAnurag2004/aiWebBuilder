import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PromptInput from "../components/PromptInput";
import CodeEditor from "../components/CodeEditor";
import LivePreview from "../components/LivePreview";
import Loading from "../components/Loading";
import { GoogleGenAI } from "@google/genai";

const Welcome = () => (
  <div className="flex flex-col items-center justify-center h-full border-2 rounded-xl border-gray-300 dark:border-gray-700">
    <h1 className="text-2xl font-bold mb-4">AI Website Builder</h1>
    <p className="text-gray-600 dark:text-gray-300 p-2">
      Enter your requirements and generate a website UI instantly!
    </p>
  </div>
);

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  const [appState, setAppState] = useState("idle"); // idle | loading | done
  const navigate = useNavigate();

  const api = import.meta.env.VITE_GEMINI_API_KEY;
  if (!api) {
    throw new Error(
      "Missing Gemini API key. Please set VITE_GEMINI_API_KEY in your .env file."
    );
  }

  const ai = new GoogleGenAI({ apiKey: api });

  async function main(prompt) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${prompt}`,
    });
    const text =
      response.text || response.candidates?.[0]?.content || "No response";
    return text;
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    setAppState("loading");
    setAns("");
    const final = `Suppose You are a web developer who generates a html and css code now generate code according to the following statement : ${input} and also remember that the html code contains internal css. Just write code do not write anything because your code is being executed directly to the browser.`;
    if (!final) return;
    const text = await main(final);
    const answer = text
      .replace(/```html\s*/i, "")
      .replace(/```$/, "")
      .trim();
    setAns(answer);
    setAppState("done");
  };
return (
  <div className="flex flex-col min-h-screen dark:bg-black">
    {/* Header */}
    <div className="p-4 flex items-center gap-4 bg-white dark:bg-black">
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 rounded bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 transition"
      >
        Go Back
      </button>
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        AI Website Builder
      </h1>
    </div>

    {/* Main Content */}
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Left Column */}
      <div className="flex flex-col min-h-0 h-full">
        <PromptInput
          prompt={input}
          setPrompt={setInput}
          handleSubmit={handelSubmit}
        />
        <div className="flex-1 min-h-0 mt-4">
          {appState === "idle" && <Welcome />}
          {appState === "loading" && <Loading />}
          {appState === "done" && <CodeEditor code={ans} />}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col min-h-0 h-full">
        {appState === "idle" && (
            <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500 border-2 border-gray-300 dark:border-gray-700 rounded-xl">
              <span>Preview will appear here</span>
            </div>
          )}
        {appState === "loading" && <Loading />}
        {appState === "done" && <LivePreview code={ans} />}
      </div>
    </div>
  </div>
);
};

export default Dashboard;
