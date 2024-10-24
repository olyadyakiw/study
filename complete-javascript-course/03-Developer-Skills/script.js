// Remember, we're gonna use strict mode in all scripts now!
'use strict'

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// function calcTemp(temp) {
//     let max = 0
//     let min = 0
//     for (let i = 0; i <= temp.length - 1; i++) {
//         if (typeof temp[i] !== 'number') continue
//         if (max < temp[i]) max = temp[i]
//         if (min > temp[i]) min = temp[i]
//     }
//     return min - max
// }

// console.log(calcTemp(temperatures))

// function calcTempNew(t1, t2) {
//     const temp = t1.concat(t2)
//     let max = 0
//     let min = 0
//     for (let i = 0; i <= temp.length - 1; i++) {
//         if (typeof temp[i] !== 'number') continue
//         if (max < temp[i]) max = temp[i]
//         if (min > temp[i]) min = temp[i]
//     }
//     return min - max
// }

// console.log(calcTempNew(temperatures))

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // value: +prompt('???'),
//         value: 10,
//     }
//     const kelvin = measurement.value + 273
//     return kelvin
// }

// console.log(measureKelvin())
const arr = [17, 21, 23]

function printForecast() {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += '... '
        str += `${arr[i]}C in ${i + 1} days `
    }
    str += '...'
    return str
}
console.log(printForecast())
