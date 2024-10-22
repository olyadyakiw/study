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

// const olha = {
//     firstName: 'Olha',
//     lastName: 'Diakiv',
//     age: 2037 - 1998,
//     job: 'creative developer',
//     friends: ['john', 'peter', 'jane'],
// }
// console.log(olha)
// console.log(olha.lastName)
// console.log(olha['lastName'])

// const nameKey = 'Name'
// console.log(olha['first' + nameKey])
// console.log(olha['last' + nameKey])

// const interstedIn = prompt('What do you want about Olha?')
// console.log(olha[interstedIn])

// if(olha[interstedIn]) {
//     console.log(olha[interstedIn])
// } else {
//     console.log('No info')
// }

// olha.location = 'Poland'
// olha['twitter'] = '@olyadyakiw'
// console.log(olha)

// console.log(`${olha.firstName} has ${olha.friends.length} friends and her best friend is ${olha.friends[0]}`)

const olha = {
    firstName: 'Olha',
    lastName: 'Diakiv',
    birthYear: 1998,
    job: 'creative developer',
    friends: ['john', 'peter', 'jane'],
    hasDriversLicense: false,

    calcAge: function() {
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function() {
        console.log(`${this.firstName} is a ${this.calcAge()}-years old ${this.job} and she ${this.hasDriversLicense ? 'has' : 'hasnt'} drivers license`)
    }
}

console.log(olha.calcAge())
// console.log(olha['calcAge']())
console.log(olha.age)
console.log(olha.getSummary())