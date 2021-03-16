import React from 'react'
import classes from "./Backdrop.module.css"

export default function BackDrop(props) {
    return (
        props.show ? <div onClick={props.clicked} className={classes.BackDrop}></div> : null
    )
}
