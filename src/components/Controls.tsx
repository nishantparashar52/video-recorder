import React, { useState } from 'react'
import Button from './Button.tsx'

const Controls = ({startRecording, stopRecording, downloadRecording, isRecording, toggleRecording}) => {
    const [toggle, setToggle] = useState(true)

    const ToggleHandler = () => {
        setToggle(val => !val)
        toggleRecording()
    }
    return (
        <div>
            <Button text='Start Recording' clickHandler={startRecording} classes='btn btn-primary mr-1' />
            <Button text={` ${toggle ? 'Pause' : 'Resume'}`} clickHandler={ToggleHandler} classes='btn btn-primary mr-1' />
            <Button text='Stop Recording' clickHandler={stopRecording} classes='btn btn-primary mr-1' />
            <Button text="Download Recording" clickHandler={downloadRecording} disabled={!isRecording} classes='btn btn-primary'/>
        </div>
    )
}

export default Controls;
