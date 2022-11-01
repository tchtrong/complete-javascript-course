'use strict';

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

  carStatus(isUs = false) {
    if (typeof isUs !== 'boolean') throw new TypeError('Wrong input');
    return `${this.make} going at ${
      !isUs ? `${this.speed} km/h` : `${this.speedUS} mi/h`
    }`;
  }

  logSpeed(isUs = false) {
    if (typeof isUs !== 'boolean') throw new TypeError('Wrong input');
    console.log(this.carStatus(isUs));
  }

  accelerate(speed = 10) {
    this.speed += speed;
    this.logSpeed();
  }

  brake(speed = 5) {
    this.speed -= speed;
    this.logSpeed();
  }
}

class EVCar extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  carStatus(isUs = false) {
    return `${Car.prototype.carStatus.call(this, isUs)}, with a charge of ${
      this.charge
    }%`;
  }

  chargeBatteryTo(chargeTo) {
    const numChargeTo = Number(chargeTo);
    if (typeof numChargeTo !== 'number' || numChargeTo < 0 || numChargeTo > 100)
      throw new TypeError('Wrong input');
    this.charge = chargeTo;
  }

  dischargeBatteryBy(dischargeBy) {
    const numDischarge = Number(dischargeBy);
    if (
      typeof numDischarge !== 'number' ||
      numDischarge < 0 ||
      numDischarge > 100
    )
      throw new TypeError('Wrong input');
    this.charge -= numDischarge;
  }

  accelerate() {
    Car.prototype.accelerate.call(this, 20);
    this.dischargeBatteryBy(1);
  }

  brake() {
    Car.prototype.brake.call(this, 10);
    this.dischargeBatteryBy(1);
  }
}
