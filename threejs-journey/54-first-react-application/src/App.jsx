import { useState } from "react"
import Clicker from "./Clicker.jsx"

export default function App({ children}) {
    console.log(children)
    const [hasClicker, setHasClicker] = useState(true)
    const [count, setCount] = useState(0)
    
    const toggleClickerClick = () => {
        setHasClicker(!hasClicker)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return  <>
                { children }
                <div>Total count: {count}</div>
                <button onClick={toggleClickerClick}>{ hasClicker ? 'Hide' : 'Show' } Clicker </button>
                { hasClicker && <>
                        <Clicker increment={ increment } keyName="countA" /> 
                        <Clicker increment={ increment } keyName="countB" /> 
                        <Clicker increment={ increment } keyName="countC" /> 
                </> }
            </>
}