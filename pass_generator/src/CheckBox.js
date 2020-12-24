import React from 'react';
function CheckBox(props){
    return(
    <li>{props.text}<input 
    type="checkbox" 
    name={props.name} 
    checked={props.checked}
    onChange={props.onChange} 
    /></li>)
}
export default CheckBox;