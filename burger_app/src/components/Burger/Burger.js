import React from 'react'
import classes from "./Burger.module.css"
import BurgerIndriend from "./BurgerIngrediends/BurgerIng"

export default function Burger(props) {
   let transormed_ingredients = Object.keys(props.ingredients) //return keys
        .map((igKey) => { 
            return[...Array(props.ingredients[igKey])]
                .map((_,index)=>(
                    <BurgerIndriend key={igKey+index} type={igKey}/>
                ))
        })
        .reduce((accum, el)=>{
            return accum.concat(el)
        },[])
        if (transormed_ingredients.length === 0){
            transormed_ingredients = <p>Please add ingredience ! </p>
        }
    return (
        <div className={classes.BurgerContainer}>
            <div className={classes.Burger}>
            <BurgerIndriend type="bread-top"/>
            {transormed_ingredients}
            <BurgerIndriend type="bread-button"/>
            </div>
        </div>
        
    )
}
