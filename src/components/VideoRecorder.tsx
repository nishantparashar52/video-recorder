import React, { useEffect, useState, useRef } from 'react';
import { useRecorder } from '../hooks/useRecorder.tsx';
import Controls from './Controls.tsx';
const VideoRecorder = () => {
    const {startRecording, stopRecording, downloadRecording, isRecording, error, setDevice, videoRef, toggleRecording} = useRecorder()
    return (
        <div>
            <h1>Video Recorder</h1>

            {error && <div>{error}</div>}
            <select onChange={setDevice}>
                <option value="camera">Camera</option>
                <option value="screen">Screen</option>
            </select>
            <video id="video" width="640" height="480" muted autoPlay ref={(vid) => videoRef.current = vid}></video>
            <Controls startRecording={startRecording} stopRecording={stopRecording} downloadRecording={downloadRecording} isRecording={isRecording} toggleRecording={toggleRecording}/>
        </div>
    )
}

export default VideoRecorder;