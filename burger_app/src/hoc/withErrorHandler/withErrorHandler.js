import React, { Component } from 'react'


import Modal from "../../components/UI/Modal/Modal"
import Aux from "../Aux"

const withErrorHandler = ( WrappedComponents, axios ) =>{

    return class extends Component {
        
      
        constructor(props){
            super(props)
            this.state = {
                error: null
            }
            this.reqInterceptor = axios.interceptors.request.use( req => {
                return req;
            } );
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState({error: error})
                return Promise.reject(error)
            });            
        }
      
        shouldComponentUpdate(){
            return !this.state.error
        }
        componentWillUnmount(){
            if (this.state.error){
                axios.interceptors.request.eject(this.reqInterceptor)
                axios.interceptors.request.eject(this.resInterceptor)
            }
         
        }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        closeModal={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrappedComponents {...this.props} />
                </Aux>
            )
        } 
    }
}
export default withErrorHandler


