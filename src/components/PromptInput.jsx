const PromptInput = ({ prompt, setPrompt, handleSubmit }) => {
  return (
    <div className="bg-white my-4 p-4 rounded shadow">
      <textarea
        className="w-full p-2 border rounded resize-none"
        rows="6"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your UI here..."
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate UI
      </button>
    </div>
  );
};

export default PromptInput;
