import { NumbersCollection } from "./classes/NumbersCollection";
import { CharactersCollection } from "./classes/CharactersCollection";
import { LinkedList } from "./classes/LinkedList";

// create arr of num, sort and log
const numbersCollection = new NumbersCollection([3, 7, -10, 42, 5, -1000]);
numbersCollection.sort();
console.log('Sorted array: ', numbersCollection.data);

// create string, sort and log
const string = new CharactersCollection('bcaWlz');
string.sort();
console.log('Sorted string: ', string.data)

// create LinkedList, add numbers to it
const list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(5);
list.add(52);

// sort and print linked list
list.sort();
console.log('Sorted linked list: ');
list.print();