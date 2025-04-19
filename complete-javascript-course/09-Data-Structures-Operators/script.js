'use strict'
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
}

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

console.log(flights.split('+'))

const getCode = str => str.slice(0,3).toUpperCase()

for(const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';')
    const output = `${type.startsWith('_Delayed') ? '✅' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(
        ':',
        'h'
    )})`.padStart(40)
    console.log(output)
}


    // Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
        )
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza(mainIng, ...othersIng) {
        console.log(mainIng, othersIng)
    },
}



// console.log('a+very+nice+string'.split('+'))
// console.log('Name Surname'.split(' '))

// const [first, last] = 'Name Surname'.split(' ')

// console.log(['MR,', first, last.toUpperCase()].join(' '))

// const capitalizeName = function(name) {
//     const names = name.split(' ')
//     const namesUpper = []
//     for(const n of names) {
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//     }
//     console.log(namesUpper.join(' '))
// }

// const passenger = 'jessica ann smith davis'
// capitalizeName(passenger)

// const message = 'Go to gate 23!'
// console.log(message.padStart(25, '-').padEnd(35,'-'))

// const maskCreditCard = number => {
//     const str = String(number)
//     const lastFour = str.slice(-4)
//     console.log(lastFour.padStart(str.length, '*'))
// }

// maskCreditCard(543543534534534)
// maskCreditCard('4545645654645656456')

// const message2 = 'Bad weather... All Departues Delayed... '
// console.log(message2.repeat(5))

// const planesInline = n => {
//     console.log(`There are ${n} planes in line ${'h'.repeat(n)}`)
// }


// planesInline(50)

// const airline = 'TAP Air Portugal'

// console.log(airline.toLowerCase())
// console.log(airline.toUpperCase())

// const passenger = 'oLHa'
// const passengerLower = passenger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect)

// function correctCase(word) {
//     const wordLower = word.toLowerCase()
//     console.log(word[0].toUpperCase() + wordLower.slice(1))
// }

// correctCase('gfdgJKjkJKLKJ')

// const email = 'hello@olha.ai'
// const loginEmail = ' Hello@Olha.AI \n'

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim()
// // console.log(trimmedEmail)

// const normalizeEmail = loginEmail.toLowerCase().trim()
// // console.log(normalizeEmail)
// // console.log(email === normalizeEmail)

// const price = '288,97$'
// const priceUS = price.replace('$', 'E').replace(',', '.')
// console.log(priceUS)

// const anno = 'All passengers come to barding door 23. Boarding door 23!'
// console.log(anno.replaceAll('door', 'gate'))

// console.log(anno.replace(/door/g, 'gate'))

// const plane = 'Airbus A320neo'
// console.log(plane.includes('A320'))
// console.log(plane.includes('HJKK'))

// console.log(plane.startsWith('A54'))

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the NEW AIRBUS')
// }

// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase()
//     if(baggage.includes('gun') || baggage.includes('knife')) {
//         console.log('Go away')
//     } else {
//         console.log('Welcome')
//     }
// }

// checkBaggage('I have a laptop, some food and a pocket knife')
// checkBaggage('Socks and camera')
// checkBaggage('Got some snacks and gun for protection')

// const airline = 'TAP Air Portugal'
// const plane = 'A320'

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log('B737'[0])

// console.log(airline.length)
// console.log('B737'.length)

// console.log(airline.indexOf('r'))
// console.log(airline.lastIndexOf('r'))

// console.log(airline.indexOf('Portugal'))

// console.log(airline.slice(4))
// console.log(airline.slice(4, 7))

// console.log(airline.slice(0, airline.indexOf(' ')))
// console.log(airline.slice(airline.lastIndexOf(' ') + 1))

// console.log(airline.slice(-2))
// console.log(airline.slice(1, -1))

// const checkMiddleSeat = function(seat) {
//     if(seat.lastIndexOf('B') === seat.length - 1) console.log('Middle')
//     if(seat.lastIndexOf('E') === seat.length - 1) console.log('Middle')
// } 

// checkMiddleSeat('11B')
// checkMiddleSeat('32C')
// checkMiddleSeat('32E')

// const question = new Map([
//     ['question', 'What is the best programming language?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct'],
//     [false, 'Try again']
// ])
// console.log(question)

// console.log(Object.entries(openingHours))
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap)

// for (const [key, value] of question) {
//     if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }
// const answer = +prompt('Your answer:')

// console.log(question.get(question.get('correct') === answer))

// console.log([...question])

// const rest = new Map()
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze Italy')
// console.log(rest.set(2, 'Lisbon, Portugal'))
// console.log(rest)

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'we are open').set(false, 'we are close')

// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1))

// const time = 21
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

// console.log(rest.has('categories'))
// rest.delete(2)
// console.log(rest)
// console.log(rest.size)
// // rest.clear()

// const arr = [1, 2, 3]
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'heading')
// console.log(rest)

// console.log(rest.get(arr))

// const italianFoods = new Set(['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil'])

// const mexicanFoods = new Set(['tortillas', 'beans', 'rice', 'tomatoes', 'avocado', 'garlic'])

// const commonFoods = italianFoods.intersection(mexicanFoods)
// console.log(commonFoods)
// console.log([...commonFoods])

// const italianMaxicanFusion = italianFoods.union(mexicanFoods)
// console.log(italianMaxicanFusion)
// console.log([...new Set([...italianFoods, ...mexicanFoods])])
// const uniqueFood = italianFoods.difference(mexicanFoods)
// console.log(uniqueFood)

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods)
// console.log(uniqueMexicanFoods)

// const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods)
// console.log(uniqueItalianAndMexicanFoods)

// console.log(italianFoods.isDisjointFrom(mexicanFoods))

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pasta'])
// console.log(ordersSet)

// console.log(new Set('Olha'))
// console.log(ordersSet.size)
// console.log(ordersSet.has('Pasta'))
// console.log(ordersSet.has('Bread'))
// ordersSet.add('Gralic Bread')
// ordersSet.add('Gralic Bread')
// console.log(ordersSet)
// ordersSet.delete('Risotto')
// // ordersSet.clear()
// console.log(ordersSet)

// for (const order of ordersSet) console.log(order)

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef']
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique)

// const properies = Object.keys(openingHours)
// console.log(properies)
// let openStr = `We are open on ${properies.length} days: `

// for (const day of Object.keys(openingHours)) {
//     openStr += `${day} `
// }
// console.log(openStr)

// const values = Object.values(openingHours)
// console.log(values)

// const entries = Object.entries(openingHours)
// console.log(entries)
// for (const [key, { open, close }] of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`)
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

// console.log(restaurant.openingHours?.mon?.open)

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// for (const day of days) {
//     let open = restaurant.openingHours[day]?.open ?? 'closed'
//     console.log(day, open)
// }

// console.log(restaurant.order?.(0, 1) ?? 'Not exist')
// console.log(restaurant.orderRizotto?.(1) ?? 'Not')

// const users = [{ name: 'Olha', email: 'email' }]

// console.log(users[0]?.name || 'Nothing')

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for (const item of menu) {
//     console.log(item)
// }

// for (const [num, item] of menu.entries()) {
//     console.log(`${num + 1}: ${item}`)
// }

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
