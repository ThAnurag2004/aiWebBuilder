import React, { useState } from "react";
import PromptInput from "./components/PromptInput";
import CodeEditor from "./components/CodeEditor";
import LivePreview from "./components/LivePreview";
import { GoogleGenAI } from "@google/genai";

const App = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  

  const ai = new GoogleGenAI({
    apiKey: "",
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

  const handelSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload

    const final = `Suppose You are a web developer who generates a html and css code now generate code according to the following statement : ${input} and also remember that the html code contains internal css. Just write code do not write anything because your code is being executed directly to the browser.`

    if (!final) return;
    
    const text = await main(final)

    const answer = text.replace(/```html\s*/i, "")
        .replace(/```$/, "")
        .trim();

    setAns(answer);

  };

  return (
    <div className="md:h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100">
      <div className="flex flex-col space-y-4 min-h-0 h-full">
        <PromptInput
          prompt={input}
          setPrompt={setInput}
          handleSubmit={handelSubmit}
        />
        <CodeEditor code={ans} />
      </div>
      <div className="min-h-0 h-full">
        <LivePreview code={ans} />
      </div>
    </div>
  );
};

export default App;
