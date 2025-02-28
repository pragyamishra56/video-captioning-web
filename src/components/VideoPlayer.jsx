// import { useRef, useState, useEffect } from "react";

// const VideoPlayer = ({ videoUrl, captions }) => {
//   const videoRef = useRef(null);
//   const [currentCaption, setCurrentCaption] = useState("");

//   useEffect(() => {
//     const updateCaption = () => {
//       if (videoRef.current) {
//         const currentTime = Math.floor(videoRef.current.currentTime); // Round off to seconds

//         console.log("Current Time:", currentTime); // Debugging

//         const matchingCaption = captions.find(
//           (cap) => Math.floor(cap.timestamp) === currentTime
//         );

//         console.log("Matching Caption:", matchingCaption); // Debugging

//         setCurrentCaption(matchingCaption ? matchingCaption.text : "");
//       }
//     };

//     const interval = setInterval(updateCaption, 500); // Check every 500ms
//     return () => clearInterval(interval);
//   }, [captions]);

//   return (
//     <div className="w-full max-w-lg mt-6 relative">
//       <video ref={videoRef} controls className="w-full rounded-lg shadow-lg">
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {currentCaption && (
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-lg">
//           {currentCaption}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoPlayer;


// import { useRef, useState, useEffect } from "react";

// const VideoPlayer = ({ videoUrl, captions }) => {
//   const videoRef = useRef(null);
//   const [currentCaption, setCurrentCaption] = useState("");

//   // Function to update caption based on current time
//   useEffect(() => {
//     const updateCaption = () => {
//       if (videoRef.current) {
//         const currentTime = videoRef.current.currentTime;
        
//         // Match closest caption within 0.5s range
//         const matchingCaption = captions.find(
//           (cap) => Math.abs(cap.timestamp - currentTime) <= 0.5
//         );

//         setCurrentCaption(matchingCaption ? matchingCaption.text : "");
//       }
//     };

//     // Attach event listener to video for real-time sync
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.addEventListener("timeupdate", updateCaption);
//     }

//     // Cleanup event listener
//     return () => {
//       if (videoElement) {
//         videoElement.removeEventListener("timeupdate", updateCaption);
//       }
//     };
//   }, [captions]); // Captions array change hote hi useEffect re-run hoga

//   return (
//     <div className="w-full max-w-lg mt-6 relative">
//       {/* Video Player */}
//       <video ref={videoRef} controls className="w-full rounded-lg shadow-lg">
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Captions Display */}
//       {currentCaption && (
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-lg">
//           {currentCaption}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoPlayer;

import { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ videoUrl, captions }) => {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState("");

  useEffect(() => {
    const updateCaption = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;

        console.log("Current Time:", currentTime); // ✅ DEBUGGING STEP

        // Sabhi captions ke timestamps ka check karo
        const matchingCaption = captions.find(
          (cap) => Math.abs(cap.timestamp - currentTime) <= 0.3 // ✅ Range ko tight kar diya
        );

        console.log("Matching Caption:", matchingCaption); // ✅ DEBUGGING STEP

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
