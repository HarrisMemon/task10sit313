import React from "react";
import "./index.css"

const Button = (props)=>{
    return (
        <button onClick={props.onClick} text={props.value} > Post Task </button>

    )

}

export default Button
