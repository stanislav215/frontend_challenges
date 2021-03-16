import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from "../NavigationItem/NavigationItem"
export default function Navigationitems() {
    return (
        <ul className={classes.NavigationItems}>
           <NavigationItem link="/">BurgerBuilder</NavigationItem>
           <NavigationItem link="/Orders">Orders</NavigationItem>
        </ul>
    )
}
