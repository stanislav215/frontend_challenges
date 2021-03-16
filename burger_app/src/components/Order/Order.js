import React from 'react'
import classes from "./Order.module.css"

export default function Order(props) {

    const ingredients = []

    for(let ingredientName in props.ingredients){
        ingredients.push({ 
            name:ingredientName, 
            amount:props.ingredients[ingredientName]})
    }

    const ingredinetOutput = ingredients.map( (ig) => {
        return ( 
            <span key={ig.name }style={{
                    textTransform: "capitalize",
                    display:"inline-block",
                    margin: "0 8px",
                    border: "1px solid #ccc",
                    padding: "5px"}}>
                {ig.name} ({ig.amount})
            </span>)
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredinetOutput}</p>
            <p>Price: <strong>USD {props.totalPrice.toFixed(2)}</strong></p>
        </div>
    )
}
