import React from "react";
import './Buttons.css'

type ButtonProps = {
    text: string,
    clickHandler: () => void ,
    classes?: string
    disabled?: string 
}
const Button = ({text, clickHandler, classes, disabled}: ButtonProps) => {
    return (
        <button type="button" className={classes} onClick={clickHandler} disabled={disabled}>{text}</button>
    )
}

export default Button;
