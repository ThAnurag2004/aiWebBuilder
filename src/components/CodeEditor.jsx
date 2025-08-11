import React from "react";

const CodeEditor = ({ code }) => {
  return (
    <div className="bg-white dark:bg-black p-4 rounded-md w-full transition-colors duration-300">
      <pre className="bg-gray-100 dark:black text-sm text-gray-800 dark:text-gray-200 p-4 rounded-md overflow-scroll h-[400px] transition-colors duration-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
