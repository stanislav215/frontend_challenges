import React from 'react'
import logo from "../../assets/burger-logo.png"
import classes from "./Logo.module.css"

export default function Logo(props) {

    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <a href="/"><img src={logo} alt="Myburger"></img></a>
        </div>
    )
}
