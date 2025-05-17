// // // import { addToCart, totalPrice as price, totalQuantity } from "./shoppingCart.js"
// // // // addToCart('bread', 5)
// // // console.log(price)
// // // console.log(totalQuantity)
// // console.log('Importing Module')
// // // console.log(shippingCost)

// // import * as ShoppingCart from './shoppingCart.js'
// // ShoppingCart.addToCart('bread', 5)
// // console.log(ShoppingCart.totalPrice)

// // import add, {cart} from './shoppingCart.js'
// // add('bread', 4)
// // add('bread', 4)
// // add('bread', 4)
// // add('bread', 4)

// // console.log(cart)

// // console.log('Start fetching')
// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// // const data = await res.json()
// // console.log(data)
// // console.log('Something')

// // const getLastPost = async function() {
// //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// //     const data = await res.json()
// //     console.log(data)
// //     return { title: data.at(-1).title, text: data.at(-1).body }
// // }

// // const lastPost = getLastPost()
// // console.log(lastPost)

// // // lastPost.then(last => console.log(last))

// // const lastPost2 = await getLastPost()
// // console.log(lastPost2)

// // const ShoppingCart2 = (function() {
// //     const cart = []
// //     const shoppingCart = 10
// //     const totalPrice = 237
// //     const totalQuantity = 23

// //     const addToCart = function(product, quantity) {
// //         cart.push({ product, quantity })
// //         console.log(`${quantity} ${product} added to cart`, shoppingCart)
// //     }

// //     const orderStock = function(product, quantity) {
// //         console.log(`${quantity} ${product} ordered`)
// //     }
// //     return {
// //         addToCart,
// //         cart,
// //         totalPrice,
// //         totalQuantity
// //     }
// // })();

// // ShoppingCart2.addToCart('apples', 4)
// // ShoppingCart2.addToCart('pizza', 2)
// // console.log(ShoppingCart2)

// // // export.addToCart = function(product, quantity) {
// // //              cart.push({ product, quantity })
// // //              console.log(`${quantity} ${product} added to cart`, shoppingCart)
// // //          }

// // // const { addToCart } = require('./shoppingCart.js')

// import cloneDeep from "lodash"
// import { cart } from "./shoppingCart"
// console.log(cloneDeep)

// const state = {
//     cart: [
//         { product: 'bread', quanitity: 5},
//         { product: 'bread', quanitity: 5},
//     ],
//     user: { loggedIn: true }
// }

// const stateClone = Object.assign({}, state)
// console.log(stateClone)
// const stateDeepClone = cloneDeep(state)
// state.user.loggedIn = false

// // console.log(stateClone)

// // console.log(stateDeepClone)

// class Person {
//     greeting = 'Hey'
//     constructor(name) {
//         this.name = name
//         console.log(name)
//     }
// }

// const olha = new Person('Olha')

// console.log('Olha' ?? null)

// console.log(cart.find(el => el.quanitity >= 2))
// Promise.resolve('TEST').then(x => console.log(x))

// // import 'core-js/stable'
// import 'regenerator-runtime/runtime'

