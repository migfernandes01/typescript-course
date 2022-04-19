// class to represent array of nums
class ArrayOfNumbers {
    // constructor initializing collection field(array of nums)
    constructor(public collection: number[]){}

    // method that returns a number for a provided index
    get(index: number): number {
        return this.collection[index];
    }
}

// class to represent array of strings
class ArrayOfStrings {
    // constructor initializing collection field(array of string)
    constructor(public collection: string[]){}

    // method that returns a string for a provided index
    get(index: number): string {
        return this.collection[index];
    }
}

// USING GENERICS

// class to represent array of ant type
class ArrayOfAnything <T> {
    // constructor initializing collection field(array of anytime)
    constructor(public collection: T[]){}

    // method that returns a thing for a provided index
    get(index: number): T {
        return this.collection[index];
    }
}
// with string array
const stringArr = new ArrayOfAnything<string>(['as', 'ds', 'as']);
console.log(stringArr.get(0));

// EXAMPLE OF GENERICS WITH FUNCTIONS

//function to print all string in array
function printStrings(strings: string[]): void {
    for(let i = 0; i < strings.length; i++) {
        console.log(strings[i])
    }
}

//function to print all numbers in array
function printNumbers(numbers: number[]): void {
    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }
}

// USING GENERICS
function printAnything<T>(array: T[]): void {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

printAnything([1, 2, 4, 3]);


// GENERIC CONSTRAINTS

class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

// define an interface that defines something with a print method that returns nothing
interface Printable {
    print(): void;
}

// extend type T to printable (tell TS that T has a print method)
function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++){
        arr[i].print();
    }
}

printHousesOrCars([new House, new House]);