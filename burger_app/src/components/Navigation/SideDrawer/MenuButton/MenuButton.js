import React from 'react'
import classes from "./MenuButton.module.css"
export default function MenuButton(props) {
    return (<button className={classes.MenuButton} onClick={props.clicked}>☰</button>)
}
