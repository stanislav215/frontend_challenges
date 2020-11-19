import React, { Component } from 'react';
import './App.css';

class Site extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
    console.log()
    return (
        <a href={this.props.href}>
            <div className="site">
                <img src={require(this.props.img)}/>
           </div>
        </a>
        
    );
  }
}
export default Site