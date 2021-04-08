import React, { Component } from 'react'
import Order from "../Order/Order"
import axios from "../../axios-orders"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"
import Spinner from"../UI/Spinner/Spinner"

class Orders extends Component {

    state = {
        url: "https://burger-app-8c509-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        orders: [],
        loading: false
    }
    /*
    componentDidMount(){
        axios.get(this.state.url)
        .then(res => {
            const fetchedOrders = []
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id:key   
                })
            }
            console.log(fetchedOrders)
            this.setState({loading: false, orders:fetchedOrders})
            console.log(this.state.orders)
        }
            )
        .catch(e => {
            this.setState({loading: false})
        })

    }
*/
    onUrlChangeHandler = (event) => {
        const updatedState = {...this.state.url}
        updatedState.url = event.target.value

        this.setState({url:updatedState.url})
    }
    
    loadOrdersHandler = () => {
        this.setState({loading: true})
        axios.get(this.state.url)
            .then(res => {
                const fetchedOrders = []
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id:key   
                    })
                }
                this.setState({loading: false, orders:fetchedOrders})
            }
                )
            .catch(e => {
                this.setState({loading: false})
            })

    }

   

    render() {
        return (
            <div style={{paddingTop: "10vh"}}>
                <Input changed={this.onUrlChangeHandler} value={this.state.url}/>
                <div style={{justifyContent: "center",alignItems:"center", display: "flex"}}>
                    <Button clicked={this.loadOrdersHandler} btnType="Success">Get Orders</Button>
                </div>

                {!this.state.loading ? 
                    this.state.orders.map((order) => {
                        return <Order 
                                    key={order.id}
                                    ingredients={order.ingredients}
                                    totalPrice={+order.price}
                                    orderDate={order.orderDate}
                                />
                    })
                    :
                    <Spinner/>
            
                }
            </div>
        )
    }
}

export default withErrorHandler(Orders,axios)
