
import React, { Component } from 'react'
import Aux from "../../hoc/Aux"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import Ordersummary from "../../components/Burger/OrderSummary/Ordersummary"
import axios from "../../axios-orders"
import Spinner from "../../components/UI/Spinner/Spinner"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import { connect } from 'react-redux'
import * as actionTypes from "../../store/actions"



class BurgerBuilder extends Component {


    state = {
        purchaseble: false,
        purchased: false,
        loading: false,
        error: null,
    }


/*     componentDidMount(){
        axios.get("/ingredients.json")
            .then(res=>{
                this.setState({ingredients:res.data})
            })
            .catch(error =>{
        if(this.state)
                this.setState({error:<p>Could not load Burder ingredients.</p>})
            })
    } */


    purchaseHandler = () => {
        this.setState((prevState)=>({purchased:!prevState.purchased}))
    }
    purchaseContiuneHandler = () => {  
        this.props.history.push({
            pathname: "/Checkout",
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
        return sum>0
    }

    render() {
        const disAbleButt = {
            ...this.props.ings
        }
        for (const key in disAbleButt) {
                disAbleButt[key]= disAbleButt[key] <= 0
        }
        let orderSummary = <Spinner/>
        let burger = <Spinner style={{marginTop:"50vh"}} />

        if(this.props.ings){
            orderSummary = (
                <Ordersummary
                    ingredients={this.props.ings}
                    purchaseCanceled={this.purchaseHandler}
                    purchaseContiune={this.purchaseContiuneHandler}
                    price={this.props.price}
                />
            ) 
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        price={this.props.price}
                        removeIngredient={this.props.removeIngredientHanlder}
                        addIngredient={this.props.addIngredientHandler}
                        purchaseble={this.updatePurchasable(this.props.ings)}
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
                <Modal 
                    show={this.props.orderSent}
                    closeModal={this.props.onCloseAllert}>
                    To see your order check Orders section.
                </Modal>



            </Aux>
        )
    }
}

const mapStoreToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        orderSent: state.orderSent

    }
}

const mapDispatchtoProps = dispatch => {
    return {
        addIngredientHandler: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT,payload:{ingredientName:ingName}}),
        removeIngredientHanlder: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT,payload:{ingredientName:ingName}}),
        onCloseAllert: () => dispatch({type: actionTypes.CLOSE_MODAL})

    }
}


export default connect(mapStoreToProps,mapDispatchtoProps)(withErrorHandler(BurgerBuilder, axios)) 
