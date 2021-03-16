import React from 'react'
import classes from "./BuildControl.module.css"


export default function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.BuildControl.label}>{props.label}</div>
            <button disabled={props.onOff} onClick={props.remove}>Less</button>
            <button onClick={props.add}>More</button>
        </div>
    )
}
