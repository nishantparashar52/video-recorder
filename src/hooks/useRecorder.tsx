import React, {useRef, useState} from "react";
import { constraints, screenType } from "../constants/appConstants.ts";

export const useRecorder = () => {
    const [error, setError] = useState<boolean>(false)
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [isWebCam, setIsWebCam] = useState<boolean>(true)
    const [paused, setIsPaused] = useState<boolean>(false)
    const mediaRecorder = useRef<MediaRecorder | null>()
    const mediaStream = useRef<MediaStream | null>()
    const videoRef = useRef<HTMLVideoElement | null>()
    const chunks = useRef<Blob[]>([])
    const startRecording = async () => {
        try {
            mediaStream.current = isWebCam ? await navigator.mediaDevices.getUserMedia(constraints) :
            await navigator.mediaDevices.getDisplayMedia(constraints)
            videoRef.current.srcObject = mediaStream.current
            mediaRecorder.current = new MediaRecorder(mediaStream.current)
            chunks.current = []
            mediaRecorder.current.ondataavailable = appendChunks
            mediaRecorder.current.onstop = downloadRecording
            mediaRecorder.current.start()
            setIsRecording(true)

        } catch(e) {
            setError(`Error in ${e}`)
        }

    }
    const stopRecording = () => {
        if (mediaRecorder.current.state !== 'inactive') {
            mediaRecorder.current.stop()
            mediaStream.current?.getTracks().forEach(track => track.stop())
            mediaStream.current = null
            setIsRecording(false)
            videoRef.current && (videoRef.current.srcObject = null)
        }
    }
    const downloadRecording = () => {
        const blob = new Blob(chunks.current, {type: 'video/webm'})
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        document.body.appendChild(a)
        a.href = url
        a.download = 'recording.webm'
        a.click();
        window.URL.revokeObjectURL(url);
        chunks.current = [];
        document.body.removeChild(a);
    }

    const appendChunks = (blobEvent: BlobEvent) => {
        chunks.current.push(blobEvent.data)
    }

    const setDevice = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setIsWebCam(ev.target.value === screenType.camera ? true : false)
    }
    const toggleRecording = () => {
        if(mediaRecorder.current &&
            (mediaRecorder.current.state === 'recording' ||
            mediaRecorder.current.state === 'paused')
            ) {
                if(!paused) {
                    mediaRecorder.current.pause()
                    videoRef.current?.pause()
                } else {
                    mediaRecorder.current.resume()
                    videoRef.current?.play()
                }
            }
            setIsPaused(!paused)
    }

    return {
        startRecording,
        stopRecording,
        downloadRecording,
        isRecording,
        error,
        setDevice,
        videoRef,
        toggleRecording
    }
}