import Aux from "../../hoc/Aux"
import classes from "./Layout.module.css"
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

import React, { Component } from 'react'

export default class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = ()=>{
        this.setState((prevState) => {
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar showSideDrawer={this.showSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.showSideDrawerHandler} />
                <div className={classes.Layout}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
