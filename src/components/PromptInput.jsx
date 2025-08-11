const PromptInput = ({ prompt, setPrompt, handleSubmit }) => {
  return (
    <div className="bg-white dark:bg-black my-4 p-4 rounded shadow transition-colors duration-300">
      <textarea
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        rows="6"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your UI here..."
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
      >
        Generate UI
      </button>
    </div>
  );
};

export default PromptInput;
