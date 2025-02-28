import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ReactPlayer from 'react-player'
import VideoInput from "./components/VideoInput"
import CaptionInput from './components/CaptionInput'
import CaptionList from './components/CaptionList'
import VideoPlayer from './components/VideoPlayer'

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const addCaption = (newCaption) => {
    setCaptions([...captions, newCaption]);
  }

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Video Captioning Tool</h1>

      <VideoInput setVideoUrl={setVideoUrl} />
      {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions}/>}
      <CaptionInput addCaption={addCaption} />
      <CaptionList captions={captions} />
    </div>
      
    </>
  )
}

export default App
