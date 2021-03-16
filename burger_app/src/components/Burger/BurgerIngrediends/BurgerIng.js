import classes from "./BurgerIng.module.css";
import PropTypes from "prop-types"
import React, { Component } from 'react'

class BurgerIndriend extends Component {

    render() {
        let ingredient = null

        switch(this.props.type){
            case("bread-button"):
                ingredient = <div className={classes.breadButton}> </div>
                break;
            case("bread-top"):
                ingredient = <div className={classes.breadTop}></div>
                break;
            case("meat"):
                ingredient = <div className={classes.meat}></div>
                break
            case("cheese"):
                ingredient = <div className={classes.cheese}></div>
                break;
            case("bacon"):
                ingredient = <div className={classes.bacon}></div>
                break;
            case("salad"):
                ingredient = <div className={classes.salad}></div>
                break
            default:
                ingredient = null
        }
        return (
            <div>
                {ingredient}
            </div>
        )
    }
}

BurgerIndriend.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIndriend
