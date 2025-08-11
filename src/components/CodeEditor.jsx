import React, { useEffect, useState } from "react";

const CodeEditor = ({ code }) => {

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full">
      <pre className="bg-gray-800 text-sm text-gray-400 p-4 rounded-md overflow-scroll h-[400px]">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
