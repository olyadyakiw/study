'use strict'

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 2, address, time = '20:00' }) {
        console.log(`Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}`)
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}!`)
    },
    orderPizza: function(mainIng, ...others) {
         console.log(mainIng)
         console.log(others)
    } 
}

// const rest1 = {
//     name: 'Carpi',
//     numGuests: 0
// }
// const rest2 = {
//     name: 'La Pizza',
//     owner: 'Olha'
// }

// // rest1.numGuests = rest1.numGuests || 10
// // rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10
// // rest2.owner = rest2.owner && 'Anonymous'
// rest2.owner &&= 'Anonymous'
// rest1.owner &&= 'Anonymous'
// console.log(rest1)
// console.log(rest2)


// console.log('---- or ----')
// console.log(3 || 'Olha')
// console.log('' || 'Olha')
// console.log(true || 0)
// console.log(undefined || null)
// console.log(undefined || 0 || undefined || '' || 'hello')

// restaurant.numGuests = 0
// const guests1 = restaurant.numGuests || 10
// console.log(guests1)
// const guests2 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests2)
// const guests3 = restaurant.numGuests ?? 10
// console.log(guests3)


// console.log('---- and ----')
// console.log(0 && 'Olha')
// console.log(7 && 'Olha')
// console.log('Olha' && 8 && null && 23)

// restaurant.orderPizza && restaurant.orderPizza('cheese')

// const arr = [ 1, 2, ...[ 3, 4 ] ]
// console.log(arr)

// const [a, b, c, ...others] = [ 1, 2, 3, 4, 5 ]
// console.log(others)

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood)

// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays)

// const add = function(...numbers) {
//     let count = 0
//     numbers.forEach(number => count += number)
//     console.log(count)
// }

// add(2, 3)
// add(5, 3, 2)
// add(5, 3, 2, 4, 5, 6)

// const x = [23, 5, 7]
// add(...x)

// restaurant.orderPizza('cheese', 'tomato', 'chorizo', 'peperoni')
// restaurant.orderPizza('cheese')

// const arr = [ 7, 8, 9 ]
// const badNewArr = [ 1, 2, 3, arr[0], arr[1], arr[2] ]
// console.log(badNewArr)

// const goodNewArr = [ 1, 2, 3, ...arr ]
// console.log(goodNewArr)

// console.log(...goodNewArr)

// const newMenu = [ ...restaurant.mainMenu, 'Gnocci' ]
// console.log(newMenu)

// const mainMenuCopy = [ ...restaurant.mainMenu ]
// const menu = [ ...restaurant.mainMenu, ...restaurant.starterMenu ]
// console.log(menu)

// const str = 'Olha'
// const letters = [ ...str, ' ', 'S' ]
// console.log(letters)
// console.log(...str)

// const ings = [ prompt('What is your ingresients 1?'), prompt('What is your ingresients 2?'), prompt('What is your ingresients 3?') ]

// restaurant.orderPasta(...ings)

// const newRest = { foundedIn: 1998, ...restaurant, founder: 'Olha' }
// console.log(newRest)

// const restCopy = { ...restaurant }
// restCopy.name = 'NEW NAME'
// console.log(restCopy)
// console.log(restaurant)


// restaurant.orderDelivery({
//     time: '23:30',
//     address: 'adressss',
//     starterIndex: 2,
//     mainIndex: 2,
// })
// restaurant.orderDelivery({
//     address: 'adressss',
//     mainIndex: 2,
// })

// const { name, openingHours, categories } = restaurant
// console.log(name)
// console.log(openingHours)
// console.log(categories)

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
// console.log(restaurantName, hours, tags)

// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters)

// let a = 111
// let b = 999

// const obj = { a: 23, b: 77, c: 32 }
// ;({ a, b } = obj)
// console.log(a, b)

// const {
//     fri: { open: o, close: c },
// } = hours
// console.log(o, c)

// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// console.log(a, b, c)

// const [x, y, z] = arr
// console.log(x, y, z)
// console.log(arr)

// let [main, , secondary] = restaurant.categories
// console.log(main, secondary)

// ([main, secondary] = [secondary, main])
// console.log(main, secondary) // 'Vegetarian', 'Italian'

// const [starter, main] = restaurant.order(2, 0)
// console.log(starter, main)

// const nested = [2, 4, [5, 6]]
// // const [i, , j] = nested
// // console.log(i, j)

// const [i, , [j, k]] = nested
// console.log(i, j, k)

// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)

