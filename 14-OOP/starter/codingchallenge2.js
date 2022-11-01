'use strict';
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    const numSpeed = Number(speed);
    if (typeof numSpeed !== 'number') throw new TypeError('Wrong input');
    this.speed = numSpeed * 1.6;
  }

  logSpped(isUs = false) {
    if (typeof isUs !== 'boolean') throw new TypeError('Wrong input');

    console.log(
      `${this.make} going at ${
        !isUs ? `${this.speed} km/h` : `${this.speedUS} mi/h`
      }`
    );
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

// DATA CAR 1: 'BMW' going at 120 km/h
const bmwCar = new Car('BMW', 120);
bmwCar.accelerate();
bmwCar.logSpped(true);
bmwCar.brake();
bmwCar.logSpped(true);
bmwCar.brake();
bmwCar.logSpped(true);
bmwCar.brake();
bmwCar.logSpped(true);

// DATA CAR 2: 'Mercedes' going at 95 km/h
const mcdCar = new Car('Mercedes', 95);
mcdCar.accelerate();
mcdCar.logSpped(true);
mcdCar.brake();
mcdCar.logSpped(true);
mcdCar.accelerate();
mcdCar.logSpped(true);
mcdCar.accelerate();
