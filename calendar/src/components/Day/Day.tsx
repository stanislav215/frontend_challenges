
import "./Day.css"

export default function Day(props:any) {
    
    const myClass = props.active ? "Day Active": "Day"

    return (
        <div className={myClass}>
            {props.children}
        </div>
    )
}
