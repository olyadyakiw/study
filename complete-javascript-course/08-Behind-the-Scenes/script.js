'use strict'

// function calcAge(birthYear) {
//     const age = 2037 - birthYear
//     console.log(firstName)

//     function printAge() {
//         let output = `${firstName}, you are ${age} years, born in ${birthYear}`
//         console.log(output)

//         if (birthYear >= 1981 && birthYear <= 1998) {
//             const firstName = 'OlhaF'
//             const string = `you're millenial, ${firstName}`
//             console.log(string)

//             output = 'New output'
//         }

//         console.log(output)
//     }

//     printAge()

//     return age
// }

// const firstName = 'Olha'
// calcAge(1998)

// // console.log(me)
// // console.log(job)
// // console.log(year)

// var me = 'Olha'
// let job = 'coder'
// const year = 1998

// // console.log(addDecl(2, 5))
// // console.log(addExp(2, 5))
// // console.log(addArrow(2, 5))

// function addDecl(a, b) {
//     return a + b
// }

// var addExp = function (a, b) {
//     return a + b
// }

// var addArrow = (a, b) => a + b

// if (!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart() {
//     console.log('delete')
// }

// var x = 1
// let y = 2
// const z = 3

// console.log(this)

// const calcAge = function (birthYear) {
//     const age = 2037 - birthYear
//     console.log(this)
//     console.log(age)
// }

// const calcAgeArrow = birthYear => {
//     const age = 2037 - birthYear
//     console.log(this)
//     console.log(age)
// }

// calcAge(1998)
// calcAgeArrow(1998)

// const olha = {
//     age: 1998,
//     calcAge: function () {
//         console.log(2037 - this.age)
//         console.log(this)
//     },
// }

// olha.calcAge()

// var firstName = 'Olha'

// const olha = {
//     firstName: 'Olha',
//     year: 1998,
//     calcAge: function () {
//         console.log(2037 - this.year)
//         console.log(this)
//         const isMillenial = () => {
//             console.log(this.year >= 1981 && this.year <= 1996)
//         }
//         isMillenial()
//     },
//     greet: function () {
//         console.log(`Hey ${this.firstName}`)
//     },
// }

// olha.greet()
// olha.calcAge()

// const addExpr = function (a, b) {
//     console.log(arguments)
//     return a + b
// }

// addExpr(2, 5, 5, 10)

// const addArrow = (a, b) => {
//     console.log(arguments)
//     return a + b
// }

// addArrow(2, 5, 6, 7)
// let age = 30
// let oldAge = age
// age = 31
// console.log(age)
// console.log(oldAge)

// const me = {
//     name: 'Olha',
//     age: 26,
// }

// const friend = me
// me.age = 30

// console.log(me)
// console.log(friend)

let lastName = 'Diakiv'
let oldLastName = lastName
lastName = 'Devis'
console.log(lastName)
console.log(oldLastName)

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = jessica
marriedJessica.lastName = 'Devis'
console.log(jessica)
console.log(marriedJessica)

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: [1, 2, 3],
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = '123'

console.log(jessica2)
console.log(jessicaCopy)

jessicaCopy.family.push(4)
