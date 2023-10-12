import {useState} from "react"
import { giveTimeString } from "./util"


function DateCounter() {

    const [step,setStep]=useState(1)
    const [count,setCount] = useState(0)

    function handleStepDecrement(){
            setStep(s => s-1)
    }

    function handleStepIncrement(){
        setStep(s => s+1)
    }

  function handleCountDecrement(){
    setCount(count => count - step)
  }

    function handleCountIncrement(){
        setCount(count => count + step)
    }



    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div>
            <div>
                <button onClick={handleStepDecrement}>-</button>
                <span>Step : {step}</span>
                 <button onClick={handleStepIncrement}>+</button>
            </div>
            <div>
                <button onClick={handleCountDecrement}>-</button>
                <span>Count : {count}</span>
                 <button onClick={handleCountIncrement}>+</button>
            </div>
            </div>
            <p>{giveTimeString(count)}</p>
        </div>
    )
}

export default DateCounter
