import React from 'react'

import Aux from "../../../hoc/Aux"
import Button from "../../UI/Button/Button"

export default function Ordersummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey)=>(
            <li key={igKey +1}>
                <span style={{textTransform: "capitalize"}}>
                    {igKey}: {props.ingredients[igKey]}
                </span>
            </li>
        ))
    return (
        <Aux>
            <h3>Your order </h3>
            <p>A deliciuos burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Current price: <strong>{props.price.toFixed(2)} $</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContiune}>Continue</Button>
        </Aux>
    )
}
