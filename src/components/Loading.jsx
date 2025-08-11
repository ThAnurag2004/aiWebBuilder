import React from "react";

function Loading() {
  return (
    <div className="flex flex-1 justify-center items-center w-full h-full border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>
    </div>
  );
}

export default Loading;
