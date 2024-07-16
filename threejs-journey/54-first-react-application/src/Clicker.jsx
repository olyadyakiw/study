import { useState, useEffect } from "react"

export default function Clicker({ keyName, increment }) {
    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

    useEffect(() => {
        return () => {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(keyName, count)
    }, [ count ])

    const buttonClick = () => {
        setCount(count + 1)
        increment()
    }

    return <div>
        <div style={ { color: `hsl(${Math.random() * 360}deg, 100%, 70%` } }>Click count: { count } </div>
        <button onClick={buttonClick}>Click me!</button>
    </div>
}