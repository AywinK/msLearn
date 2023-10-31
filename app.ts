// TypeScript is a Structural Type System. A structural type
// system means that when comparing types, TypeScript only
// takes into account the members on the type.

// This is in contrast to nominal type systems, where you
// could create two types but could not assign them to each
// other. See example:nominal-typing

// For example, these two interfaces are completely
// transferrable in a structural type system:

interface Ball {
    diameter: number;
}
interface Sphere {
    diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
    diameter: number;
    length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

tube = ball;
ball = tube;

// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.

// TypeScript is comparing each member in the type against
// each other to verify their equality.

// A function is an object in JavaScript and it is compared
// in a similar fashion. With one useful extra trick around
// the params:

let createBall = (diameter: number) => ({ diameter });
let createSphere = (diameter: number, useInches: boolean) => {
    return { diameter: useInches ? diameter * 0.39 : diameter };
};

createSphere = createBall;
createBall = createSphere;

// TypeScript will allow (number) to equal (number, boolean)
// in the parameters, but not (number, boolean) -> (number)

// TypeScript will discard the boolean in the first assignment
// because it's very common for JavaScript code to skip passing
// params when they're not needed.

// For example the array's forEach's callback has three params,
// value, index and the full array - if TypeScript didn't
// support discarding parameters, then you would have to
// include every option to make the functions match up:

[createBall(1), createBall(2)].forEach((ball, _index, _balls) => {
    console.log(ball);
});

// No one needs that.

// Return types are treated like objects, and any differences
// are compared with the same object equality rules above.

let createRedBall = (diameter: number) => ({ diameter, color: "red" });

createBall = createRedBall;
createRedBall = createBall;

// Where the first assignment works (they both have diameter)
// but the second doesn't (the ball doesn't have a color).

function displayAlert(message: string | number): void {
    alert('The message is ' + message);
}

displayAlert(32)

function sum(input: number[]) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

sum([1, "two", 3]);

let addThreeNumbers = (x: number, y: number, z?: number) => {
    if (z) return x + y + z
    else return x + y
};

addThreeNumbers(10, 20, 30)

let subtractThreeNumbers = (x: number, y: number, z = 100) => x - y - z;

console.log(subtractThreeNumbers(10, 20))
console.log(subtractThreeNumbers(10, 20, 15))

type calculator = (x: number, y: number) => number

interface Calculator {
    (x: number, y: number): number;
}

let addNumbers: Calculator = (x, y) => x + y;
let subtractNumbers: Calculator = (x, y) => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: "add" | "subtract"): Calculator => {
    if (operation === "add") return addNumbers;
    else return subtractNumbers;
}

console.log(doCalculation("add")(1, 2));
console.log(doCalculation("subtract")(1, 2));

interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: "left" | "right"): string;
}

class Car implements Vehicle {
    //Properties
    private static numberOfCars: number = 0;
    private _make: string;
    private _color: string;
    private _doors: number;
    //Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++;
    }
    //Accessors
    get make() {
        return this._make
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return "The color of the car is " + this._color
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error("Doors must be an even number");
        }
    }
    //Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: "left" | "right"): string {
        return `${this.worker()} is turning ${direction}`
    }
    protected worker(): string {
        return this._make
    }
    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
}

let myCar1 = new Car("Cool Car Company", "blue", 2);
// console.log(myCar1.color);
// console.log(myCar1._color);

let myCar2 = new Car("Galaxy Motors", "red");
// console.log(myCar2.doors);

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn("right"));
console.log(Car.getNumberOfCars());

class ElectricCar extends Car {
    private _range: number;
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    get range() {
        return this._range
    }
    set range(range) {
        this._range = range;
    }
    charge() {
        console.log(this.worker() + " is charging.");
    }
    brake(): string {
        return `${this.worker()} is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 283);
console.log(eCar.doors);
spark.charge();
console.log(spark.brake());

type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U) {
    let result: ValidTypes = "";
    let typeValue: string = typeof value;
    if (typeof value === "number") {
        result = value + value;
    } else if (typeof value === "string") {
        result = value + value;
    }
    console.log(message);
    return result;
}

let returnNUmber = identity<number, string>(100, "hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");


function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish"));
console.log(getPets(pets2, "3"));

interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: "hello!"
}
let returnString: Identity<string, number> = {
    value: "hello!",
    message: 25
}

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "hello");
let returnString1 = processor("hello", 100);

interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}

class ProcessIdentityClass<X, Y> implements ProcessIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process(): X {
        console.log(this.message);
        return this.value
    }
}

let processor = new ProcessIdentityClass<number, string>(100, "hello");
processor.process();
processor.value = "100";

class processIdentity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity(): T {
        console.log(this._message);
        return this._value
    }
}

let processor = new processIdentity<number, string>(100, "hello");
processor.getIdentity();