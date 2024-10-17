'use strict'

// let hasDriversLicence = false
// const passTest = true

// if(passTest) {
//     hasDriversLicence = true
// }

// if(hasDriversLicence) console.log('I can drive')

// const interface = 'Audio'
// const private = 543 

// function logger() {
//     console.log('My name is Olya')
// }

// logger(23)
// logger()
// logger()

// function frultProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// const appleJuice = frultProcessor(5, 0)
// console.log(appleJuice)
// console.log(frultProcessor(5, 0))

// const appleOrangeJuice = frultProcessor(2,4)
// console.log(appleOrangeJuice)

//  const num = Number('23')

// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(1998)
// console.log(age1)

// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear
// }
// const age2 = calcAge2(1998)
// console.log(age2)

// const calcAge3 = birthYear => 2037 - birthYear
// console.log(calcAge3(1998))

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear
//     const retirement = 65 - age
//     // return retirement
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1998, 'Olha'))

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function frultProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
//     return juice
// }

// const juice = frultProcessor(2, 3)
// console.log(juice)

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age

//     if(retirement < 0) {
//         return -1
//     } else {
//         return retirement
//     }
// }

// console.log(yearsUntilRetirement(1998, 'Olha'))
// console.log(yearsUntilRetirement(1970, 'Mike'))


// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = [ 'Michael', 'Steven', 'Peter' ]
// console.log(friends)

// // const years = new Array(1991, 2020, 2030)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Jane'
// console.log(friends)

// // friends = [ 'Alice', 'Bob' ]
// const firstName = 'olya'
// const olya = [ firstName, 'diakiv', 2037-1998, 'programmer', friends ]
// console.log(olya)

// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear
// }

// const years = [ 1969, 1975, 1998, 2005, 2020, 2030 ]

// const age1 = calcAge2(years[0])
// const age2 = calcAge2(years[1])
// const age3 = calcAge2(years[years.length - 1])

// const ages = [age1, age2, age3]
// console.log(ages)

// const friends = [ 'Michael', 'Steven', 'Peter' ]
// const newLength = friends.push('Sasha')
// console.log(newLength)
// console.log(friends)

// friends.unshift('John')
// console.log(friends)

// const popped = friends.pop()
// console.log(friends)
// console.log(popped)

// friends.shift()
// console.log(friends)

// friends.push(23)
// console.log(friends.indexOf('Steven'))
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friends.includes(23))

// if(friends.includes('B')) {
//     console.log('you have peter')
// }