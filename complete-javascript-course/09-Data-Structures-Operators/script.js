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
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
        )
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza: function (mainIng, ...othersIng) {
        console.log(mainIng, othersIng)
    },
}

// const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// }

// const rest2 = {
//     name: 'La Pizza',
//     owner: 'Olha',
// }

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// rest2.owner = rest2.owner && 'ANON'
// rest2.owner &&= 'ANON'

// console.log(rest1)
// console.log(rest2)

// restaurant.numGuests = 0
// const guests2 = restaurant.numGuests ?? 10
// console.log(guests2)

// console.log(3 || 'Olha')
// console.log('' || 'Olha')
// console.log(true || 0)
// console.log(undefined || null)

// console.log(undefined || 0 || '' || 'Hello' || 23 || null)

// restaurant.numGuests = 23
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1)

// const guests2 = restaurant.numGuests || 10
// console.log(guests2)

// console.log(0 && 'Olha')
// console.log(7 && 'Olha')

// console.log('Hello' && 23 && null && 'olha')

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('cheese', 'ham')
// }

// restaurant.orderPizza && restaurant.orderPizza('cheese', 'ham')

// restaurant.orderPizza('ham', 'onion', 'cheese')
// restaurant.orderPizza('ham')

// const arr = [1, 2, ...[3, 4]]

// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood)

// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays)

// const add = function (...numbers) {
//     let sum = 0
//     numbers.forEach(number => (sum += number))
//     console.log(sum)
// }

// add(2, 3)
// add(3, 5, 7, 9)
// add(3, 5, 7, 9, 1, 2, 3)

// const arr = [7, 8, 9]
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)

// const newArr = [1, 2, ...arr]
// console.log(newArr)

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu)

// const mainMenuCopy = [...restaurant.mainMenu]

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu)

// const str = 'Olha'
// const letters = [...str, '', 4]
// console.log(letters)
// // console.log(`${..str}`)

// const ingresients = [
//     // prompt("Let's make pasta! Ingredient: 1?"),
//     // prompt("Let's make pasta! Ingredient: 2?"),
//     // prompt("Let's make pasta! Ingredient: 3?"),
// ]
// console.log(ingresients)

// restaurant.orderPasta(...ingresients)

// const newRestaurant = { ...restaurant, founder: 'Olha', foundedIn: 1998 }
// console.log(newRestaurant)
// const restaurantCopy = { ...restaurant }
// restaurantCopy.name = 'Palermo'
// console.log(restaurant.name)
// console.log(restaurantCopy.name)

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'adress',
//     mainIndex: 2,
//     starterIndex: 2,
// })
// restaurant.orderDelivery({
//     address: 'Hello adress',
//     starterIndex: 1,
// })

// const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories)

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
// console.log(restaurantName, hours, tags)

// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters)

// let a = 111
// let b = 999
// // const obj = { a: 23, b: 7, c: 14 }(({ a, b } = obj))

// const {
//     fri: { open: o, close: c },
// } = openingHours
// console.log(o, c)

// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [d, e, f] = arr
// console.log(d, e, f)

// let [main, , secondary] = restaurant.categories
// console.log(main, secondary)

// const temp = main
// main = secondary
// secondary = temp
// // console.log(main, secondary)[(main, secondary)] = [secondary, main]
// // console.log(main, secondary)

// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)

// const nested = [2, 4, [5, 6]]
// // const [i, , j] = nested
// // console.log(i, j)
// const [i, , [j, k]] = nested
// console.log(i, j, k)

// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)
