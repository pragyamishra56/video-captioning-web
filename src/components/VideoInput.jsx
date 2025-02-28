import { useState } from "react";
import ReactPlayer from "react-player";

const VideoInput = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);

  const handleUrlChange = (e) => {
    setVideoUrl(e.target.value);
    setIsValidUrl(true); // Reset error on change
  };

  const validateUrl = () => {
    const isValid = ReactPlayer.canPlay(videoUrl);
    setIsValidUrl(isValid);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Video URL</h2>

      <div className="w-full max-w-lg flex items-center space-x-2">
        <input
          type="text"
          placeholder="Paste video URL here..."
          value={videoUrl}
          onChange={handleUrlChange}
          className="flex-grow px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={validateUrl}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Load Video
        </button>
      </div>

      {!isValidUrl && <p className="text-red-500 mt-2">Invalid video URL. Please try again.</p>}

      {isValidUrl && videoUrl && (
        <div className="mt-6 w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
          <ReactPlayer url={videoUrl} controls width="100%" height="400px" />
        </div>
      )}
    </div>
  );
};

export default VideoInput;

