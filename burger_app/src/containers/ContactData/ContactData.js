import React, { Component } from 'react'
import Button from "../../components/UI/Button/Button"
import classes from "./ContactData.module.css"
import axios from "../../axios-orders"
import Spinner from "../../components/UI/Spinner/Spinner"
import Input from "../../components/UI/Input/Input"
import { connect } from 'react-redux'
import Modal from "../../components/UI/Modal/Modal"
import "./ContactData.css"
import * as actionTypes from "../../store/actions"

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name",
                },
                value: "",
                validation: {
                    required: true
                },
                valid:false,
                touched: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your email",
                },
                value: "",
                validation: {
                    required: true
                },
                valid:false,
                touched: false

            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street",
                },
                value: "",
                validation: {
                    required: true
                },
                valid:false,
                touched: false

            },
            zipCode:  {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ZIP CODE",
                },
                value: "",
                validation: {
                    required: true,
                    maxLenght: 5
                },
                valid: false,
                touched: false

            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country",
                },
                value: "",
                validation: {
                    required: true
                },
                valid:false,
                touched: false

            },
            deliveryMethond: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {value: "fastest", displayValue: "Fastest"},
                        {value: "cheapest", displayValue: "Cheapest"},
                    ]
                },
                value: "",
                valid:true,
                validation: {
                    required: true
                }
            }

        },
        formIsvalid: false,
        loading:true,
        showAllert:false,
    }

    constructor(props){
        super(props)
        this.myRef = React.createRef()

    }
    componentDidMount(){
        this.myRef.current.scrollIntoView()
        const updatedOrderFormElements = {
            ...this.state.orderForm
        }

        const updatedOrderFormElement = {
            ...updatedOrderFormElements
        }

        this.setState({orderForm:updatedOrderFormElements,showAllert:true})
    }

    onCloseModalHandler = () => {
        console.log("stano");
        const updatedOrderFormElements = {
            ...this.state.orderForm
        }

        const updatedOrderFormElement = {
            ...updatedOrderFormElements
        }

        this.setState({orderForm:updatedOrderFormElements,showAllert:false})
    }


    checkValidity(value, rules){
        let isValid = true

        if (rules.required) {
            isValid = value.trim() !== "" && isValid

        }

        if (rules.maxLenght){
            isValid = value.length <= rules.maxLenght && isValid
        }
        return isValid
    }
    onChangeHandler = (event, identifier) => {
        const updatedOrderFormElements = {
            ...this.state.orderForm
        }

        const updatedOrderFormElement = {
            ...updatedOrderFormElements[identifier]
        }
        updatedOrderFormElement.value = event.target.value
        updatedOrderFormElement.valid = this.checkValidity(event.target.value, updatedOrderFormElement.validation)
        updatedOrderFormElement.touched = true
        updatedOrderFormElements[identifier] = updatedOrderFormElement

        let formValidity = true
        for(const key in updatedOrderFormElements){
            formValidity = updatedOrderFormElements[key].valid && formValidity
        }
        console.log(formValidity)
        this.setState({orderForm:updatedOrderFormElements,formIsvalid:formValidity})
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading:true})
        const formData = {}

        for (const key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value

        }

        const order = {
            ingredients:this.props.ings,
            orderDate: new Date(),
            price:this.props.price, // should be also calculated at backend
            orderData: formData 
        }
        axios.post("/orders.json",order)
            .then(res => {
                setTimeout(() => {
                    this.setState({loading:false})
                    this.props.orderSentHandler()
                    this.props.history.push("/")
                }, 1000);
            })
            .catch(e=>{
                console.log(e);
                this.setState({loading:false})
            })
    }
    fillExampleHandler = () =>{
        const formValues = {
            name: "John",
            email: "Even",
            street: "Galactic",
            zipCode: "04090",
            country: "Belgium",
            deliveryMethond: "Fastest"
        }

        const updatedOrderFormElements = {
            ...this.state.orderForm
        }
        const updatedOrderFormElement = {}
        for(let key in updatedOrderFormElements){
            console.log(key);
            updatedOrderFormElement[key] =  updatedOrderFormElements[key]
            updatedOrderFormElement[key].value = formValues[key]
               
        }

        this.setState({orderForm:updatedOrderFormElements,formIsvalid:true})
    }


    render() {
        const formElementsArray = []
        for (const key in this.state.orderForm) {           
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }

        let form = this.state.loading ?
            <form  onSubmit={this.orderHandler}>
                {formElementsArray.map((formEl)=>{
                return <Input 
                    invalid={!formEl.config.valid}
                    touched={formEl.config.touched}
                    changed={(event) => (this.onChangeHandler(event,formEl.id))}
                    key={formEl.id}
                    elementType={formEl.config.elementType} 
                    elementConfig={formEl.config.elementConfig}
                    shouldvalidate={formEl.config.validation}
                    value={formEl.config.value}/>
            })}
                <Button disabled={!this.state.formIsvalid} btnType="Success">Submit</Button>
            </form>
            
            :
            <Spinner/>

        return (
            <div className="ContactData" ref={this.myRef} className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <button onClick={this.fillExampleHandler}>Fill by example</button>
                <Modal show={this.state.showAllert} closeModal={this.onCloseModalHandler}>
                    Please do not put personal information here!
                </Modal>
                {form}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings:  state.ingredients,
        price: state.totalPrice,
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        orderSentHandler: () => dispatch({type:actionTypes.ORDER_SENT}),

    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(ContactData)
