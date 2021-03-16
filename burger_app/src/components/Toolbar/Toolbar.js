import React from "react"
import classes from "./Toolbar.module.css"
import Logo from "../Logo/Logo"
import Navigationitems from '../Navigation/NavigationItems/NavigationItems'

import MenuButton from "../Navigation/SideDrawer/MenuButton/MenuButton"

const Toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <MenuButton clicked={props.showSideDrawer}/>
        <nav>
            <Navigationitems/>
        </nav>
        <Logo height="100%"/>
           
    </header>
);

export default Toolbar