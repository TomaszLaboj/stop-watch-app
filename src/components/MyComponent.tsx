import {  useState, useEffect } from "react"
import {Controls} from "./Controls"
import { calculateTimer } from "./calculateTimer";

export function MyComponent(): JSX.Element {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timeArray, setTimeArray] = useState<number[]>([])

    
    useEffect(()=>{
        setTimeArray(calculateTimer(timeInSeconds))
    },[timeInSeconds])
   
    return (

        <div>

            <h3>Stopwatch</h3>
            <h4>{timeArray[0]<10 ? '0'+timeArray[0] : timeArray[0]}:{timeArray[1]<10 ? '0'+timeArray[1] : timeArray[1]}</h4>
            <div>
               <Controls setTimeInSeconds={setTimeInSeconds}/> 
            </div>
    
        </div>
        )
}


