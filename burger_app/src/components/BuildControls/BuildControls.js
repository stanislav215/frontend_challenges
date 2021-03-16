import React from 'react'
import BuildControl from "./BuildControl/BuildControl"
import classes from "./BuildControls.module.css"

const Controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},

]

export default function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)} $</strong></p>
            {Controls.map((control) => (
                <BuildControl
                 key={control.label}
                 label={control.label}
                 add={() => props.addIngredient(control.type)}
                 remove={()=> props.removeIngredient(control.type)}
                 onOff = {props.disAbleButton[control.type]}
                 />
            ))}
            <button onClick={props.OrderClicked} className={classes.OrderButt} disabled={!props.purchaseble}>
                Order Now!
            </button>
        </div>
    )
}
