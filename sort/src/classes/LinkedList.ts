import { Sorter } from "./Sorter";

// class that represents a node
class Node{
    // next property(either another Node or null)
    next: Node | null = null;

    // constructor initializing data in this Node
    constructor(public data: number) {}
}

// class to represent a linked list
export class LinkedList  extends Sorter{
    // head Node
    head: Node | null = null;

    // length GETTER
    get length(): number {
        // if list is empty, return 0
        if(!this.head){
            return 0;
        }

        // length is 1
        let length = 1;
        let node = this.head;
        // iterate through list and increment length
        while (node.next) {
            length++;
            node = node.next;
        }

        // return length
        return length;
    }

    // methods
    // add new number to linked list
    add(data: number): void{
        // new Node
        const node = new Node(data);

        // if head does not exist
        if(!this.head) {
            this.head = node;
            return;
        }

        // create tail, pointing to head
        let tail = this.head;
        // while tail.next is not null, increment
        while (tail.next){
            tail = tail.next;
        }

        // add node to next to tail
        tail.next = node;
    }

    // return node at index x
    at(index: number): Node {
        // if list is empty
        if(!this.head){
            throw new Error('Empty list');
        }

        // iterate through list and return node when counter = index
        let counter = 0;
        let node: Node | null = this.head;
        while(node){
            if(counter === index){
                return node;
            }

            counter++;
            node = node.next
        }

        // throw error if index is out of bounds
        throw new Error('Index out of bounds');
    }

    // compare 2 nodes
    compare(leftIndex: number, rightIndex: number): boolean {
        // if list is empty
        if(!this.head) {
            throw new Error('Empty List');
        }

        // return true if number at left index is greater
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    // swap values at 2 nodes
    swap(leftIndex: number, rightIndex: number): void{
        // store the values of the nodes we want to swap
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        // swap nodes
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    // print nodes in list
    print(): void {
        // if list is empty
        if(!this.head){
            return;
        }

        let node: Node | null = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}