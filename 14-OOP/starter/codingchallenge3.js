'use strict';
// Coding Challenge #3

/* 

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = String(make);
  this.speed = Number(speed);
  Object.defineProperty(this, 'speedUS', {
    get: function () {
      return this.speed / 1.6;
    },
    set: function (value) {
      const numSpeed = Number(value);
      if (typeof numSpeed !== 'number') throw new TypeError('Wrong input');
      this.speed = numSpeed * 1.6;
    }
  });
};

Car.prototype.carStatus = function (isUs = false) {
  if (typeof isUs !== 'boolean') throw new TypeError('Wrong input');

  return `${this.make} going at ${
    !isUs ? `${this.speed} km/h` : `${this.speedUS} mi/h`
  }`;
};

Car.prototype.logSpped = function (isUs = false) {
  if (typeof isUs !== 'boolean') throw new TypeError('Wrong input');

  console.log(this.carStatus(isUs));
};

Car.prototype.brake = function () {
  this.speed -= 5;
  this.logSpped();
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.logSpped();
};

// const bmwCar = new Car('BMW', 120);
// bmwCar.accelerate();
// bmwCar.logSpped(true);
// bmwCar.brake();
// bmwCar.logSpped(true);
// bmwCar.brake();
// bmwCar.logSpped(true);
// bmwCar.brake();
// bmwCar.logSpped(true);
// console.log('Test get/set');
// bmwCar.speedUS = 81.25;
// bmwCar.logSpped(true);
// bmwCar.logSpped();

// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
// Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
const EVCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Object.setPrototypeOf(EVCar.prototype, Car.prototype);

EVCar.prototype.carStatus = function (isUs = false) {
  if (typeof isUs !== 'boolean') throw new TypeError('Wrong input');

  return `${Car.prototype.carStatus.call(this, isUs)}, with a charge of ${
    this.charge
  }%`;
};

// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo'\
// and sets the battery charge to 'chargeTo';
EVCar.prototype.chargeBattery = function (chargeTo) {
  const numChargeTo = Number(chargeTo);
  if (typeof numChargeTo !== 'number' || numChargeTo < 0 || numChargeTo > 100)
    throw new TypeError('Wrong input');
  this.charge = chargeTo;
};

// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this:
// 'Tesla going at 140 km/h, with a charge of 22%';
EVCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  this.logSpped();
};

EVCar.prototype.brake = function () {
  this.speed -= 10;
  this.charge -= 1;
  this.logSpped();
};

// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%).
// Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
const teslaCar1 = new EVCar('Tesla', 120, 90);
teslaCar1.accelerate();
