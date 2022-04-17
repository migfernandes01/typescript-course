import { Sorter } from "./Sorter";

// class to represent a string
export class CharactersCollection extends Sorter{
    // constructor defining and initializing fields
    constructor(public data: string) {
        super();
    }

    // GETTER, length
    get length(): number {
        return this.data.length;
    }

    // method to compare 2 characters and return true if left is greater than right
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    // swap the 2 characters
    swap(leftIndex: number, rightIndex: number): void{
        // separate string into array of chars
        const charArr = this.data.split('');
        // swap them
        const leftHand = charArr[leftIndex];
        charArr[leftIndex] = charArr[rightIndex];
        charArr[rightIndex] = leftHand;
        // join and store swapped array
        this.data = charArr.join('');
    }
}