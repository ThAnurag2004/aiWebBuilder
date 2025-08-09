import React, { useEffect, useState } from "react";

const TYPING_SPEED = 100; // ms per character

const CodeEditor = ({ code }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reset when code changes
    if (!code) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + code[i]);
      i++;
      if (i >= code.length) clearInterval(interval);
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [code]);

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full">
      <pre className="bg-gray-800 text-sm text-gray-400 p-4 rounded-md overflow-scroll h-[400px]">
        <code>{displayed}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
