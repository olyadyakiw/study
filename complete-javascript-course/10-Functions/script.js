'use strict';

// const bookings = []

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // numPassengers = numPassengers || 1
//     // price = price || 199

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123', 2)
// createBooking('LH123', 5)

// createBooking('LH123', undefined, 1000)

// const flight = "LM234"
// const olha = {
//     name: 'Olha Diakiv',
//     passport: 543435664564
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = "LH999"
//     passenger.name = 'Mrs. ' + passenger.name
//     if(passenger.passport === 543435664564) {
//         alert('Checked in')
//     } else {
//         alert('Wrong passport')
//     }
// }
// // checkIn(flight, olha)
// console.log(flight)
// console.log(olha)

// const flightNum = flight
// const passenger = olha

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 1000000)
// }

// newPassport(olha)
// checkIn(flight, olha)

// const oneWord = function(str) {
//     return str.replace(/ /g, '' ).toLowerCase()
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }

// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`)
//     console.log(`Transofrmed string: ${fn(str)}`)

//     console.log(`Transformed by: ${fn.name}`)
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)

// const high5 = function (){
//     console.log('High 5')
// }

// document.body.addEventListener('click', high5);

// ['Olha', 'Martha', 'Adam'].forEach(high5)

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet('Hey')
// greeterHey('Olha')
// greeterHey('Steven')

// greet('Hello')('Olha')

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`)

// greetArrow('Hello')('Friend')

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//         this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name})
//     }
// }

// lufthansa.book(239, 'Olha Diakiv')
// lufthansa.book(635, 'John Smith')
// console.log(lufthansa)

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: []
// }

// const book = lufthansa.book

// book.call(eurowings, 23, 'Sara Willians')
// console.log(eurowings)

// book.call(lufthansa, 239, 'Mary Cooper')
// console.log(lufthansa)

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583, 'Mary Cooper')

// const flightData = [583, 'George Cooper']
// // book.apply(swiss, flightData)
// book.call(swiss, ...flightData)

// const bookEW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)
// const bookLX = book.bind(swiss)

// bookEW(56, 'Steven Williams')

// const bookEW23 = book.bind(eurowings, 23)
// bookEW23('Olha Diakiv')
// bookEW23('Martha Cooper')

// lufthansa.planes = 300
// lufthansa.buyPlane = function () {
//     console.log(this)
//     this.planes++
//     console.log(this.planes)
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// const addTax = (rate, value) => value + value * rate
// console.log(addTax(0.1, 200))

// const addVAT = addTax.bind(null, 0.23)
// console.log(addVAT(200))

// const addTaxArr = rate => value => value + value * rate

// const addVAT2 = addTaxArr(0.23)
// console.log(addVAT2(100))
// console.log(addVAT2(23))

// const runOnce = function() {
//     console.log('This will never run again')
// }
// runOnce();

// (function () {
//     console.log('This will never run again')
//     const isPrivate = 23
// })();

// // console.log(isPrivate)

// (() => console.log('This will never run again'))();

// {
//     const isPrivate = 23
//     var notPrivsyr = 46
// }

// console.log(isPrivate)
// console.log(notPrivsyr)

// const secureBooking = function() {
//     let passengerCount = 0

//     return function() {
//         passengerCount++
//         console.log(passengerCount)
//     }
// }

// const booker = secureBooking()

// booker()
// booker()
// booker()

// console.dir(booker)

// let f;
// const g = function() {
//     const a = 23
//     f = function() {
//         console.log(a * 2)
//     }
// }

// const h = function() {
//     const b = 777
//     f = function() {
//         console.log(b * 2)
//     }
// }

// g()
// f()
// h()
// f()
// g()
// console.dir(f)

// const boardPassengers = function(n, wait) {
//     const perGroup = n / 3

//     setTimeout(function() {
//         console.log(`We are now boarding all ${n} passengers`)
//         console.log(`There are 3 groups, each with ${perGroup} passengers`)
//     }, 1000 * wait)

//     console.log(`Will start boarding in ${wait} seconds`)
// }

// const perGroup = 1000
// boardPassengers(180,3)