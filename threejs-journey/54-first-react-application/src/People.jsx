import { useState, useEffect } from "react"

export default function People() {

    const [people, setPeople] = useState([])

    const getPeople = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await responce.json()
        setPeople(result)
    }

    useEffect(() => {
        getPeople()
    }, [])
    
    return <div>
        <h2>People</h2>
        <ul>
            { people.map((person) => <li key={person.id}> { person.name } </li>) }
        </ul>
    </div>
}