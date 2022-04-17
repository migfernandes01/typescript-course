import { Sorter } from "./Sorter";

// class to represent array of numbers
export class NumbersCollection extends Sorter{
    // fields
    data: number[];

    // GETTER return length of data array (.length because it's a getter)
    get length(): number {
        return this.data.length;
    }

    // constructor
    constructor(data: number[]) {
        super();
        this.data = data;
    }

    // methods
    
    // compare 2 numbers
    compare(leftIndex: number, rightIndex: number): boolean {
        // return true if needs to be swapped
        return this.data[leftIndex] > this.data[rightIndex];
    }

    // swap 2 numbers
    swap(leftIndex: number, rightIndex: number): void {
        // swap them
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand
    }
}