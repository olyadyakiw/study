// function describeCountry(country, population, capitalCity) {
//     const descr = `${country} has ${population} million people and its capital city is ${capitalCity}`
//     console.log(descr)
//     return descr
// }

// describeCountry('Finland', 6, 'Helsinki')
// describeCountry('Ukraine', 40, 'Kyiv')
// describeCountry('Poland', 30, 'Warszawa')

// function percentageOfWorld1(population) {
//     return population / 7900 * 100
// }

// const china = percentageOfWorld1(1441)
// const ukraine = percentageOfWorld1(40)
// const america = percentageOfWorld1(500)
// console.log(china, ukraine, america)

// const percentageOfWorld2 = function(population) {
//     return population / 7900 * 100
// }

// const china1 = percentageOfWorld2(1441)
// const ukraine1 = percentageOfWorld2(40)
// const america1 = percentageOfWorld2(500)
// console.log(china1, ukraine1, america1)

const percentageOfWorld3 = population => population / 7900 * 100

// const china2 = percentageOfWorld3(1441)
// const ukraine2 = percentageOfWorld3(40)
// const america2 = percentageOfWorld3(500)
// console.log(china2, ukraine2, america2)

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population)
    return `${country} has ${population} million people, which is about ${percentage} of the world`
}

console.log(describePopulation('China', 1441))