'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // const getCountryData = function(country) {
// //     const request = new XMLHttpRequest()
// //     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`)
// //     request.send();

// //     request.addEventListener('load', function() {
// //         const [data] = JSON.parse(this.responseText)
// //         console.log(data)

// //         const html = `
// //             <article class="country">
// //               <img class="country__img" src="${data.flag}" />
// //               <div class="country__data">
// //                 <h3 class="country__name">${data.name}</h3>
// //                 <h4 class="country__region">${data.region}</h4>
// //                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
// //                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //               </div>
// //             </article>
// //         `
// //         countriesContainer.insertAdjacentHTML('beforeend', html)
// //         countriesContainer.style.opacity = 1
// //     })
// // }

// // getCountryData('Portugal')
// // getCountryData('Ukraine')
// // getCountryData('Germany')

// // const whereAmI = (lat, lng) => {
// //     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
// //         .then(responce => responce.json())
// //         .then(data => {
// //             countriesContainer.style.opacity = 1
// //             return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.countryName}`)
// //         })
// //         .then(responce => {
// //             if (!responce.ok) {
// //                 throw new Error(`${errorMsg} (${responce.status})`)
// //             }
// //             return responce.json()
// //         })
// //         .then(data => renderCountry(data[0]))
// //         .catch(err => {
// //             console.log(err)
// //         })
// // }

// // const renderCountry = (data, className = '') => {
// //     const html = `
// //             <article class="country ${className}">
// //               <img class="country__img" src="${data.flag}" />
// //               <div class="country__data">
// //                 <h3 class="country__name">${data.name}</h3>
// //                 <h4 class="country__region">${data.region}</h4>
// //                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
// //                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //               </div>
// //             </article>
// //         `
// //     countriesContainer.insertAdjacentHTML('beforeend', html)
// // }

// // const renderError = function (msg) {
// //     countriesContainer.insertAdjacentText('beforeend', msg)
// // }

// // const getCountryAndNeighbour = function (country) {
// //     const request = new XMLHttpRequest()
// //     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`)
// //     request.send()

// //     request.addEventListener('load', function () {
// //         const [data] = JSON.parse(this.responseText)
// //         renderCountry(data)

// //         const neihbour = data.borders?.[0]
// //         const request2 = new XMLHttpRequest()
// //         request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neihbour}`)
// //         request2.send()

// //         request2.addEventListener('load', function() {
// //             const data2 = JSON.parse(this.responseText)
// //             renderCountry(data2, 'neighbour')
// //         })
// //     })
// // }

// // // getCountryAndNeighbour('Portugal')
// // getCountryAndNeighbour('Ukraine')

//     // const request = new XMLHttpRequest()
//     // request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`)
//     // request.send();

// // const request = fetch('https://countries-api-836d.onrender.com/countries/name/portugal')

// const getJSON = (url, errorMsg = 'Something went wrong') => {
//     return fetch(url).then(responce => {
//         if (!responce.ok) {
//             throw new Error(`${errorMsg} (${responce.status})`)
//         }
//         return responce.json()
//     })
// }

// const getCountryData = function(country) {
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0])
//             const neighbour = data[0].borders?.[0]
//             if (!neighbour) throw new Error('No neighbour found')

//             return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Country not found')
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             renderError(`Something went wrong ${err.message}. Try again!`)
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1
//         })
// }

// // btn.addEventListener('click', function() {
// //     // getCountryData('Portugal')
// //     // getCountryData('australia')
// //     whereAmI(52.508, 13.381)
// // })


// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
// The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */

// // whereAmI(52.508, 13.381)
// // whereAmI(19.037, 72.873)
// // whereAmI(-33.933, 18.474)

// // console.log('test start')
// // setTimeout(() => console.log('0 sec timer'), 0)
// // Promise.resolve('Resolved promise 1').then(res => console.log(res))
// // Promise.resolve('Resolved promise 2').then(res => {
// //     for(let i = 0; i < 100000; i++) {
// //         console.log(res)
// //     }
// // })
// // console.log('test end')

// // const lotteryPromise = new Promise(function(resolve, reject) {
// //     console.log('loading...')
// //     setTimeout(function() {
// //         if(Math.random() >= 0.5) {
// //             resolve('You WIN')
// //         } else {
// //             reject(new Error('You lost'))
// //         }
// //     }, 2000)
// // })

// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))

// // const wait = function(seconds) {
// //     return new Promise(function(resolve) {
// //         setTimeout(resolve, seconds * 1000)
// //     })
// // }

// // wait(2).then(() => {
// //     console.log('I waited for 2 seconds')
// //     return wait(1)
// // }).then(() => console.log('1 second'))

// // wait(1)
// //     .then(() => {
// //         console.log('I waited for 1 seconds')
// //         return wait(1)
// //     })
// //     .then(() => {
// //         console.log('I waited for 2 seconds')
// //         return wait(1)
// //     })
// //     .then(() => {
// //         console.log('I waited for 3 seconds')
// //         return wait(1)
// //     })
// //     .then(() => {
// //         console.log('I waited for 4 seconds')
// //         return wait(1)
// //     })
// //     .then(() => console.log('1 second'))

// // Promise.resolve('abc').then(x => console.log(x))
// // Promise.reject('abc').catch(x => console.log(x, 'error'))

// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err))
// console.log('Getting position')

// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
// }

// // getPosition().then(pos => console.log(pos))


// const whereAmI = () => {
//     getPosition().then(pos => {
//         const { latitude: lat, longitude: lng} = pos.coords

//         return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//     })

//         .then(responce => responce.json())
//         .then(data => {
//             countriesContainer.style.opacity = 1
//             return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.countryName}`)
//         })
//         .then(responce => {
//             if (!responce.ok) {
//                 throw new Error(`${errorMsg} (${responce.status})`)
//             }
//             return responce.json()
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => {
//             console.log(err)
//         })
// }

// const renderCountry = (data, className = '') => {
//     const html = `
//             <article class="country ${className}">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//               </div>
//             </article>
//         `
//     countriesContainer.insertAdjacentHTML('beforeend', html)
// }

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg)
// }

// btn.addEventListener('click', whereAmI)

// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000)
//     })
// }

// const imgContainer = document.querySelector('.images')

// const createImage = function(imgPath) {
//     return new Promise(function(resolve, reject) {
//         const img =document.createElement('img')
//         img.src = imgPath
//         img.addEventListener('load', function() {
//             imgContainer.append(img)
//             resolve(img)
//         })

//         img.addEventListener('error', function() {
//             reject(new Error('not found'))
//         })
//     })
// }

// let currentImg 

// createImage('img/img-1.jpg').then(img => {
//     currentImg = img
//     console.log('Image 1 loaded')
//     return wait(2)
// })
// .then(() => {
//     currentImg.style.display = 'none'
//     return createImage('img/img-2.jpg')
// }).then(img => {
//     currentImg = img
//     console.log('Image 2 loaded')
//     return wait(2)
// }) .then(() => {
//     currentImg.style.display = 'none'
// })
// .catch(err => console.error(err))

// const renderError = function (msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg)
// }

// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
// }

// const renderCountry = (data, className = '') => {
//     const html = `
//             <article class="country ${className}">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//               </div>
//             </article>
//         `
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
// }

// const whereAmI = async function() {
//     try {
//         const pos = await getPosition()

//         const { latitude: lat, longitude: lng} = pos.coords
        
//         const geo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//         if(!geo.ok) throw new Error('Problem')
//         const dataGeo = await geo.json()
//         console.log(dataGeo)
        
//         const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}`)
//         const data = await res.json()
//         renderCountry(data[0])

//         return `You are in ${dataGeo.city}, ${dataGeo.countryName}`
//     } catch(err) {
//         renderError('something went wrong!!!')

//         throw err
//     }
    
// }
// console.log('1. will get location')
// const city = whereAmI()
// console.log(city)

// whereAmI().then(city => console.log(city)).catch(err => console.log(err)).finally(() => console.log('3'))
// console.log('2. finished')

// (async function() {
//     try {
//         const city = await whereAmI()
//         console.log(city)
//     } catch(err) {
//         console.error(err.message)
//     }
//     console.log('3')
// })();

// try {
//     let y = 1
//     const x = 2
//     x = 3
// } catch(err) {
//     alert(err.message)
// }

// const getJSON = (url, errorMsg = 'Something went wrong') => {
//     return fetch(url).then(responce => {
//         if (!responce.ok) {
//             throw new Error(`${errorMsg} (${responce.status})`)
//         }
//         return responce.json()
//     })
// }

// const getThreeCountries = async function(c1,c2,c3) {
//     try {
//         // const [data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`)
//         // const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`)
//         // const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)

//         const data = await Promise.all(
//             [getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//             getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//             getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`)]
//         )
//         console.log(data.map(d => d[0].capital))

//         console.log(data1.capital)
//         console.log(data2.capital)
//         console.log(data3.capital)
//     } catch(err) {
//         console.error()
//     }
// }

// getThreeCountries('portugal', 'ukraine', 'germany')

// (async function() {
//     const res = await Promise.race([
//         getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
//         getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//         getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`),
//     ])
//     console.log(res[0])
// })();

// const timeout = function(s) {
//     return new Promise(function(_, reject){
//         setTimeout(function() {
//             reject(new Error('Request took too long!'))
//         }, s * 1000)
//     })
// }

// Promise.race([getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`), timeout(1)]).then(res => console.log(res[0])).catch(err => console.error(err))

// Promise.allSettled([
//     Promise.resolve('Success'),
//     Promise.reject('error'),
//     Promise.resolve('Success'),
// ]).then(res => console.log(res))

// Promise.all([Promise.resolve('Success'), Promise.reject('error'), Promise.resolve('Success')]).then(res =>
//     console.log(res)
// ).catch(err => console.log(err))

// Promise.any([Promise.resolve('Success'), Promise.reject('error'), Promise.resolve('Success')]).then(res =>
//     console.log(res)
// )

// const imgContainer = document.querySelector('.images')

// const createImage = function(imgPath) {
//     return new Promise(function(resolve, reject) {
//         const img =document.createElement('img')
//         img.src = imgPath
//         img.addEventListener('load', function() {
//             imgContainer.append(img)
//             resolve(img)
//         })

//         img.addEventListener('error', function() {
//             reject(new Error('not found'))
//         })
//     })
// }

// let currentImg 

// createImage('img/img-1.jpg').then(img => {
//     currentImg = img
//     console.log('Image 1 loaded')
//     return wait(2)
// })
// .then(() => {
//     currentImg.style.display = 'none'
//     return createImage('img/img-2.jpg')
// }).then(img => {
//     currentImg = img
//     console.log('Image 2 loaded')
//     return wait(2)
// }) .then(() => {
//     currentImg.style.display = 'none'
// })
// .catch(err => console.error(err))

// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000)
//     })
// }

// const loadNPause = async function() {
//     try {
//         let img = await createImage('img/img-1.jpg')
//         console.log('Image 1 loaded')
//         await wait(2)
//         img.style.display = 'none'

//         img = await createImage('img/img-2.jpg')
//         console.log('Image 2 loaded')
//         await wait(2)
//         img.style.display = 'none'

//     } catch(err) {
//         console.log(err)
//     }
// }

// loadNPause()

// const loadAll = async function(imgArr) {
//     try {
//         const imgs = imgArr.map(async img => await createImage(img))
//         console.log(imgs)
//         const imgsEl = await Promise.all(imgs)
//         console.log(imgsEl)
//         imgsEl.forEach(img => img.classList.add('parallel'))
//     } catch(err) {
//         console.log(err)
//     }
// }

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])