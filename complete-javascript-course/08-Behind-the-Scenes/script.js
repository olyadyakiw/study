'use strict'

function calcAge(birthYear) {
    const age = 2037 - birthYear
    console.log(firstName)

    function printAge() {
        let output = `${firstName}, you are ${age} years, born in ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1998) {
            const firstName = 'OlhaF'
            const string = `you're millenial, ${firstName}`
            console.log(string)

            output = 'New output'
        }

        console.log(output)
    }

    printAge()

    return age
}

const firstName = 'Olha'
calcAge(1998)
