import { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ videoUrl, captions }) => {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");

  useEffect(() => {
    const updateCaption = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;

        console.log("Current Time:", currentTime); 

        const matchingCaption = captions.find(
          (cap) => Math.abs(cap.timestamp - currentTime) <= 0.3 
        );

        console.log("Matching Caption:", matchingCaption);

        setCurrentCaption(matchingCaption ? matchingCaption.text : "");
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateCaption);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateCaption);
      }
    };
  }, [captions]);

  return (
    <div className="w-full max-w-lg mt-6 relative">
      {/* Video */}
      <video ref={videoRef} controls className="w-full rounded-lg shadow-lg">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Caption Box */}
      {currentCaption && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-lg">
          {currentCaption}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
