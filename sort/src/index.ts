class Sorter {
    collection: number[] | string;

    constructor(collection: number[] | string) {
        this.collection = collection;
    }

    sort(): void {
        // distructor length from collection, type num
        const { length } = this.collection;

        for (let i = 0; i < length; i++){
            for(let j = 0; j < length - i -1 ; j++){
                // type guard, restores all methods of type Array
                if(this.collection instanceof Array){
                    // if collection === number[]
                    // if left number is greater than right
                    if(this.collection[j] > this.collection[j + 1]){
                        // swap them
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand
                    }
                }

                // type guard, if collection is of type string
                if(typeof this.collection === 'string'){
                    // write code if collection is a string
                }

            }
        }
    }
}

const numbers = new Sorter([3, 7, -10, 42, 5]);
numbers.sort();
console.log(numbers.collection);

const word = new Sorter('yrabgW')