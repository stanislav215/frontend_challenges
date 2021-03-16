import React, { Component } from 'react'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import ContactData from "./ContactData/ContactData"
import {Route} from "react-router-dom"
export default class Checkout extends Component {
   
    constructor(props){
        super(props)

        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        for (let param of query.entries()){

            if (param[0] === "price"){
                price = param[1]
            } else{
                ingredients[param[0]] = +param[1] //converting string to number
            }
        }

        this.state = {
            ingredients: ingredients,
            totalPrice: price
        }


    }

    /*
     state = {
        ingredients: null,
        totalPrice: 0
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        for (let param of query.entries()){

            if (param[0] === "price"){
                price = param[1]
            } else{
                ingredients[param[0]] = +param[1] //converting string to number
            }
        }
        console.log(ingredients)
        this.setState({ingredients:ingredients, totalPrice:price})
    }
    */
    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data")
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                {<CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    />}
                <Route 
                    path={this.props.match.path + "/contact-data"} 
                    render={(props) => 
                        (<ContactData 
                            ingredients={this.state.ingredients} 
                            totalPrice={this.state.totalPrice}
                            {...props}
                            />)}
                />
            </div>
        )
    }
}
