import classes from './Modal.module.css'
import Aux from "../../../hoc/Aux"
import BackDrop from "../Backdrop/BackDrop"

import React, { Component } from 'react'

export default class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    render() {
        return (
            <Aux>
            <BackDrop show={this.props.show} clicked={this.props.closeModal}/>
            <div
                className={classes.Mod}
                style={{
                    transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: this.props.show ? "1" : "0",
                    display: this.props.show ? "block" : "none"
                }}
            >
                {this.props.children}
            </div>
        </Aux>
        )
    }
}

