import Days from "../Days/Days"
import classes from "../Calendar/Calendar.module.css"
import { Component } from "react";



export default class Calendar extends Component {

    state:any = {
        date : new Date(),
        currentDate : new Date(),
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }

    onChangeMonth = (event:any) => {
        if (event.target.name === "previous"){
            this.setState(
                {date: new Date(
                    this.state.date.getFullYear(),
                    this.state.date.getMonth() - 1,
                    )}
                )
        }
        else{
            this.setState(
                {date: new Date(
                    this.state.date.getFullYear(),
                    this.state.date.getMonth() + 1,
                    )}
                )
        }
    }


    render() {

    const drawDate = this.state.date
    const month = drawDate.getMonth()
    return (
            <div className={classes.Calendar} >
                <h1 className={classes.Year} >{drawDate.getFullYear()}</h1>
                <p className={classes.Line}>_________________________</p>

                <div className={classes.Month}>
                    <button onClick={this.onChangeMonth} name="previous"> {"<"} </button>
                    <h2>{this.state.months[month].toUpperCase()}</h2>
                    <button onClick={this.onChangeMonth} name="next">{">"}</button>

                </div>

                <div className={classes.Weeks}>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wen</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sut</p>
                    <p>Sun</p>
                </div>
                <Days Date={drawDate}></Days>
            </div>
            )
    }   
}
