import React from "react";

const CodeEditor = ({ code }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">Generated Code</h2>
      <pre
        className="bg-gray-100 text-sm text-gray-800 p-4 rounded-md overflow-scroll h-[400px]"
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
