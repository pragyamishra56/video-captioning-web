import { useState } from "react";

const CaptionInput = ({ addCaption }) => {
  const [text, setText] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleAddCaption = () => {
    if (text.trim() && timestamp.trim() && !isNaN(timestamp)) {
      addCaption({ text, timestamp: parseFloat(timestamp) });
      setText("");
      setTimestamp("");
    }
  };

  return (
    <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-lg mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Add Captions</h3>
      
      <input
        type="text"
        placeholder="Enter caption..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input
        type="number"
        placeholder="Enter timestamp (seconds)"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleAddCaption}
        className="w-full p-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Add Caption
      </button>
    </div>
  );
};

export default CaptionInput;
