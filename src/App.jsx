import React, { useState } from "react";
import PromptInput from "./components/PromptInput";
import CodeEditor from "./components/CodeEditor";
import LivePreview from "./components/LivePreview";
import { GoogleGenAI } from "@google/genai";
import Loading from "./components/Loading";

// Example Welcome component
const Welcome = () => (
  <div className="flex flex-col items-center justify-center h-full border-2 rounded-xl">
    <h1 className="text-2xl font-bold mb-4">AI Website Builder</h1>
    <p className="text-gray-600 p-2">
      Enter your requirements and generate a website UI instantly!
    </p>
  </div>
);

const App = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  const [appState, setAppState] = useState("idle"); // idle | loading | done

  const api = import.meta.env.VITE_GEMINI_API_KEY;

  if (!api) {
    throw new Error(
      "Missing Gemini API key. Please set VITE_GEMINI_API_KEY in your .env file."
    );
  }

  const ai = new GoogleGenAI({
    apiKey: api,
  });

  async function main(prompt) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${prompt}`,
    });
    // Adjust this line based on the actual response structure
    const text =
      response.text || response.candidates?.[0]?.content || "No response";
    return text;
  }

  //handling submit button
  const handelSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    setAppState("loading");
    setAns(""); // Clear previous answer

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
    <div className="md:h-screen h-full min-h-0 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 overflow-hidden">
      <div className="flex flex-col min-h-0 h-full block md:hidden">
        <PromptInput
          prompt={input}
          setPrompt={setInput}
          handleSubmit={handelSubmit}
        />
        {appState === "idle" && <Welcome />}
        {appState === "loading" && <Loading />}
        {appState === "done" && (
          <>
            <h1 className="mb-2">Generated Code</h1>
            <CodeEditor code={ans} />
          </>
        )}
      </div>
      {/* for small devices*/}
      <div className="flex flex-col min-h-0 h-full  hidden md:flex">
        {appState === "idle" && <Welcome />}
        {appState === "loading" && <Loading />}
        {appState === "done" && (
          <>
            <h1 className="mb-2 text-2xl font-semibold">Generated Code</h1>
            <CodeEditor code={ans} />
          </>
        )}
        <PromptInput
          prompt={input}
          setPrompt={setInput}
          handleSubmit={handelSubmit}
        />
      </div>

      <div className="min-h-0 h-full flex flex-col">
        {appState === "done" && (
          <>
            <h1 className="mb-2 text-2xl font-semibold">Live Preview</h1>
            <LivePreview code={ans} />
          </>
        )}
        {appState === "loading" && <Loading />}
        {appState === "idle" && (
          <div className="flex items-center justify-center h-screen text-gray-400 border-2 rounded-xl">
            <span>Preview will appear here</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
