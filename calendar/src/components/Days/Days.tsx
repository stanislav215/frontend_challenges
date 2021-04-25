import classes from "../Days/Days.module.css"
import Day from "../Day/Day"


export default function Days(props:any) {
   const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   const date = props.Date
   var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()-1
      
   var offset = firstDay > 0 ? Array.apply(null, Array(firstDay)).map(Number.prototype.valueOf,-1) :
   Array(0)
   var days = Array.from(Array(numDaysInMonth[date.getMonth()]).keys())
   days = offset.concat(days)

   const list = days.map((a,index) => {
       const currentDate = new Date()
       
       const activeDay = (a+1) === (currentDate.getDate())
            && (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear())
            
       return (a+1)!== 0 ? <Day key={index} active={activeDay}>{a+1}</Day> : <Day key={index} active={activeDay}></Day>
    })

    
    

    

    return (
        <div className={classes.Days}>
            {list}
        </div>
    )
}

