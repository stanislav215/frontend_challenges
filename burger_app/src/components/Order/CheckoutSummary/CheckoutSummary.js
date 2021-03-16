import React from 'react'
import Burger from "../../Burger/Burger"
import Button from "../../UI/Button/Button"
import classes from "./CheckoutSummary.module.css"
export default function CheckoutSummary(props) {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope it tastes well!</h1>
            <Burger ingredients={props.ingredients}/>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}
                >Cancel</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}
                >Continue</Button>

        </div>
    )
}
