import React from 'react'
import classes from "./Spinner.module.css"

export default function Spinner(props) {
    return (
        <div style={props.style}className={classes.Loader}></div>
    )
}
