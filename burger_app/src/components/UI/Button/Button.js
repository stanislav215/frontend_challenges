import React from 'react'
import classes from "./Button.module.css"

export default function Button(props) {
    return (
        <button 
            style={props.style}
            disabled={props.disabled}
            onClick={props.clicked}
            className={[classes.Button, classes[props.btnType]].join(" ")}
            >
                {props.children}
        
        </button>)
}
