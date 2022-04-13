let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothing: null = null;
let nothingAgain: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays
// var name: type = content of var
let colors: string[] = ['red', 'white', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true];

// Classes
class Car {

}
// type of class Car, or instance of Car
let car: Car = new Car();

// Object literal { properties: type of properties }
let point: { x: number; y: number } = {
    x: 5,  // x property: number
    y: 20   // y property: number
}

// Functions
// func name: func type annotation = (params: params type)
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// use annotations, since parse return type 'any
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20}

// 2) When we declare a varaible on one line and initialize it later
let words = ['red', 'green', 'blue'];
// declare but NOT initialize
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

// 3) Varaible whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// variable is either a bool or a number
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}