'use strict';
// Coding Challenge #1

/* 
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

class Car {
  // 1. Use a constructor function to implement a Car.
  // A car has a make and a speed property. The speed property is the current speed of the car in km/h;
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  logSpped() {
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  // 2. Implement an 'accelerate' method that will increase the car's speed by 10,
  // and log the new speed to the console;
  accelerate() {
    this.speed += 10;
    this.logSpped();
  }

  // 3. Implement a 'brake' method that will decrease the car's speed by 5,
  // and log the new speed to the console;
  brake() {
    this.speed -= 5;
    this.logSpped();
  }
}

// 4. Create 2 car objects and experiment with calling
// 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
const bmwCar = new Car('BMW', 120);
bmwCar.accelerate();
bmwCar.brake();
bmwCar.brake();
bmwCar.brake();

// DATA CAR 2: 'Mercedes' going at 95 km/h
const mcdCar = new Car('Mercedes', 95);
mcdCar.accelerate();
mcdCar.brake();
mcdCar.accelerate();
mcdCar.accelerate();
