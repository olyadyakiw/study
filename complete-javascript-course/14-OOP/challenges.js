// 1

// const Car = function(make, speed) {
//     this.make = make
//     this.speed = speed
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10
//     console.log(this.make, this.speed)
// }

// Car.prototype.brake = function() {
//     this.speed -= 5
//     console.log(this.make, this.speed)
// }

// const bmw = new Car('BMW', 120)
// const mers = new Car('Mersedes', 95)

// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()

class Car {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed += 10
        console.log(this.make, this.speed); 
    }
    
    brake() {
        this.speed -= 5
        console.log(this.make, this.speed);
        return this
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

// const car = new Car('Ford', 120)

// console.log(car)
// console.log(car.speedUS)
// car.accelerate()
// car.accelerate()
// car.brake()
// car.speedUS = 70
// console.log(car)

// 3

// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed)
//     this.charge = charge
// }

// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo
// }

// EV.prototype.accelerate = function() {
//     this.speed += 20
//     this.charge -= 1
//     console.log(this.make, this.speed, this.charge)
// }

// const tesla = new EV('Tesla', 120, 23)
// console.log(tesla)
// tesla.accelerate()
// tesla.brake()
// console.log(tesla)

// 4

class EVCl extends Car {
    #charge

    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        return this
    }

    accelerate() {
        this.speed += 20
        this.#charge--
        console.log(this.make, this.speed, this.#charge)
        return this
    }
}

const tesla = new EVCl('Tesla', 120, 23)
console.log(tesla)
tesla.accelerate().chargeBattery(100).accelerate().brake().accelerate()