// define sortable interface (ANYTHING WITH THOSE PROPERTIES AND METHODS IS SORTABLE)
interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

// Sorter abstract class, where the other classes extend
export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    // methods
    sort(): void {
        // distructor length from this
        const { length } = this;

        for (let i = 0; i < length; i++){
            for(let j = 0; j < length - i -1 ; j++){
                // if left number is greater than right
                if(this.compare(j, j + 1)){
                    // swap them
                    this.swap(j, j + 1);
                }
            }
        }
    }
}