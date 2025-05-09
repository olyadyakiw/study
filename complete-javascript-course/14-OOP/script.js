'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear

//     // DONT DO IT
//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear)
//     // }
// }

// const olha = new Person('Olha', 1998)
// console.log(olha)

// const matilda = new Person('Matilda', 2017)
// const jack = new Person('Jack', 1975)
// console.log(matilda,jack)

// const jay = 'Jay'
// console.log(olha instanceof Person)
// console.log(jay instanceof Person)

// // olha.calcAge()

// // Prototypes
// console.log(Person.prototype)

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear)
// }
// olha.calcAge()
// matilda.calcAge()

// console.log(olha.__proto__)
// console.log(olha.__proto__ === Person.prototype)

// console.log(Person.prototype.isPrototypeOf(olha))

// Person.prototype.species = 'Homo Sapiens'
// console.log(olha, matilda)

// console.log(olha.hasOwnProperty('firstName'))
// console.log(olha.hasOwnProperty('species'))

// console.log(olha.__proto__)
// console.log(olha.__proto__.__proto__)
// console.log(olha.__proto__.__proto__.__proto__)

// console.dir(Person.prototype.constructor)

// const arr = [1,2,3,4,5,5,4,3,2]
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__)

// Array.prototype.unique = function() {
//    return [...new Set(this)]
// }

// console.log(arr.unique())

// const h1 = document.querySelector('h1')
// console.dir(x => x + 1)

// // const PersonCl = class {

// // }

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.fullName = firstName
//         this.birthYear = birthYear
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear)
//     }

//     greet() {
//         console.log(`Hey ${this.firstName}`)
//     }

//     get age() {
//         return 2037 - this.birthYear
//     }

//     set fullName(name) {
//         console.log(name)
//         if(name.includes(' ')) {
//             this._fullName = name
//         } else {
//             alert('error')
//         }
//     }

//     get fullName() {
//         return this._fullName
//     }

//     static hey() {
//         return console.log('Hey')
//     }
// }

// PersonCl.hey()

// const jessica = new PersonCl('Jessica Davis', 1996)
// console.log(jessica)
// jessica.calcAge()
// console.log(jessica.age)

// console.log(jessica.__proto__ === PersonCl.prototype)

// // PersonCl.prototype.greet = function() {
// //     console.log(`Hey ${this.firstName}`)
// // }

// jessica.greet()

// const walter = new PersonCl('walter white', 1965)

// const account = {
//     owner: 'Olha',
//     movements: [543, 543, 65, 655],

//     get latest() {
//         return this.movements.slice(-1).pop()
//     },

//     set latest(mov) {
//         this.movements.push(mov)
//     }
// }

// console.log(account.latest)

// account.latest = 50
// console.log(account.movements)

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     },
     
//     init(firstName, birthYear) {
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }
// }

// const steven = Object.create(PersonProto)
// console.log(steven)
// steven.name = 'Steven'
// steven.birthYear = 2002
// steven.calcAge()

// console.log(steven.__proto__ === PersonProto)

// const sarah = Object.create(PersonProto)
// sarah.init('Sarah', 1979);
// sarah.calcAge()



// const Person = function(firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
// }

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear)
// }

// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear)
//     this.course = course
// }

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const mike = new Student('Mike', 2020, 'CS')
// mike.introduce()

// mike.calcAge()
// console.log(mike.__proto__)
// console.log(mike.__proto__.__proto__)

// Student.prototype.constructor = Student

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.fullName = firstName
//         this.birthYear = birthYear
//     }

//     calcAge() {
//         console.log(2037 - this.birthYear)
//     }

//     greet() {
//         console.log(`Hey ${this.firstName}`)
//     }

//     get age() {
//         return 2037 - this.birthYear
//     }

//     set fullName(name) {
//         console.log(name)
//         if(name.includes(' ')) {
//             this._fullName = name
//         } else {
//             alert('error')
//         }
//     }

//     get fullName() {
//         return this._fullName
//     }

//     static hey() {
//         return console.log('Hey')
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(firstName, birthYear, course) {
//         super(firstName, birthYear)
//         this.course = course
//     }

//     introduce() {
//         console.log(`My name is ${this.firstName} and I study ${this.course}`)
//     }

//     calcAge() {
//         console.log(`I am ${2037-this.birthYear} years`)
//     }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
// // const martha = new StudentCl('Martha Jones', 2012)
// console.log(martha)
// martha.calcAge()

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }
// }

// const steven = Object.create(PersonProto)

// const StudentProto = Object.create(PersonProto)

// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear)
//     this.course = course
// }

// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const jay = Object.create(StudentProto)
// jay.init('Jay', 2010, 'CS')
// jay.introduce()
// jay.calcAge()

// class Account {
//     locale = navigator.language
//     bank = 'Bankist'
//     #movements = []
//     #pin

//     constructor (owner, currency, pin) {
//         this.owner = owner
//         this.currency = currency
//         this.#pin = pin
//         // this.movements = []
//         // this.locale = navigator.language

//         console.log(`Thanks ${owner}`)
//     }

//     getMovements() {
//         return this.#movements
//     }

//     deposit(val) {
//         this.#movements.push(val)
//         return this
//     }
    
//     withdrawal(val) {
//         this.deposit(-val)
//         return this
//     }

//     #approveLoan(val) {
//         return true
//     }

//     requestLoan(val) {
//         if(this.#approveLoan(val)) {
//             this.deposit(val)
//             console.log('Loan approved')
//         }
//         return this
//     }
// }

// const acc1 = new Account('Olha', 'EUR', 1111, [])
// // acc1.movements.push(250)
// // acc1.movements.push(-140)
// // acc1.deposit(240)
// // acc1.withdrawal(140)
// acc1.deposit(240).withdrawal(140).deposit(1000)
// // acc1.movements = []
// // acc1.requestLoan(1000)

// // console.log(acc1)
// // console.log(acc1.pin)

// console.log(acc1)

