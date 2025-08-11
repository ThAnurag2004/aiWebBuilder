import React from "react";

const CodeEditor = ({ code }) => {
  return (
    <div className="text-black dark:text-white dark:bg-black bg-white p-4 rounded-md w-full transition-colors duration-300">
      <h1 className="text-2xl mb-3 font-bold">Generated Code</h1>
      <pre className="bg-white dark:bg-gray-300 text-sm text-black dark:text-black p-4 rounded-md overflow-scroll h-[400px] transition-colors duration-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
