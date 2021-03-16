
import React, { Component } from 'react'
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import Ordersummary from "../../components/Burger/OrderSummary/Ordersummary"
import axios from "../../axios-orders"
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.3,
    cheese: 0.8,
    meat: 1,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseble: false,
        purchased: false,
        loading: false,
        error: null
    }


    componentDidMount(){
        axios.get("/ingredients.json")
            .then(res=>{
                this.setState({ingredients:res.data})
            })
            .catch(error =>{
        if(this.state)
                this.setState({error:<p>Could not load Burder ingredients.</p>})
            })
    }

   

    purchaseHandler = () => {
        this.setState((prevState)=>({purchased:!prevState.purchased}))
    }
    purchaseContiuneHandler = () => {
        const queryParams = []
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + 
            "=" + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push("price=" + this.state.totalPrice)
        const queryString = queryParams.join("&")   
        this.props.history.push({
            pathname: "/Checkout",
            search: "?" + queryString
        })

    }
    updatePurchasable(ingredients){
     
        const sum = Object.keys(ingredients)
            .map((igKey)=>{
                return ingredients[igKey]
            })
                .reduce((sum,el)=>{
                    return sum+el
                },0)
        this.setState({purchaseble:sum>0})
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const UpdatedIngredients = {
            ...this.state.ingredients
        }
        UpdatedIngredients[type] = oldCount + 1

        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + INGREDIENT_PRICES[type]

        this.setState({ingredients:UpdatedIngredients, totalPrice:newPrice})
        this.updatePurchasable(UpdatedIngredients)
    }
    removeIngredientHanlder = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount > 0){
            const UpdatedIngredients = {
                ...this.state.ingredients
            }
            UpdatedIngredients[type] = oldCount - 1
    
            const oldPrice = this.state.totalPrice
            const newPrice = oldPrice - INGREDIENT_PRICES[type]
    
            this.setState({ingredients:UpdatedIngredients, totalPrice:newPrice})
            this.updatePurchasable(UpdatedIngredients)
        }
       
    }

    render() {
        const disAbleButt = {
            ...this.state.ingredients
        }
        for (const key in disAbleButt) {
                disAbleButt[key]= disAbleButt[key] <= 0
        }
        let orderSummary = <Spinner/>
        let burger = <Spinner style={{marginTop:"50vh"}} />

        if(this.state.ingredients){
            orderSummary = (
                <Ordersummary
                    ingredients={this.state.ingredients}
                    purchaseCanceled={this.purchaseHandler}
                    purchaseContiune={this.purchaseContiuneHandler}
                    price={this.state.totalPrice}
                />
            ) 
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        price={this.state.totalPrice}
                        removeIngredient={this.removeIngredientHanlder}
                        addIngredient={this.addIngredientHandler}
                        purchaseble={this.state.purchaseble}
                        disAbleButton={disAbleButt}
                        OrderClicked={this.purchaseHandler}
                    />
                </Aux>
            )

            if(this.state.loading) {
                orderSummary = <Spinner/>
            }
        }

        



        return (
            <Aux>
                {burger}
                <div style={{margin: "auto"}}>{this.state.error}</div>
                <Modal show={this.state.purchased} closeModal={this.purchaseHandler}>
                    {orderSummary}
                </Modal>



            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios) 
