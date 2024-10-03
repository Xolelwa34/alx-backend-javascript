class Car {
    constructor(brand, motor, color, range) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
        this._range = range;
    }
}

class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color, range);
    }

    cloneCar() {
        return new Car(this._brand, this._motor, this._color, this._range);
    }
}

