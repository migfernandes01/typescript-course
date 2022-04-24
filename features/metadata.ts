import 'reflect-metadata';      // import package

const plane = {
    color: 'red',
    /* height: 10 */
};

// add a property 'height' with a value of 10 to plane obj
// with metadata
Reflect.defineMetadata('height', 10, plane);

// add a property 'note' with a value of 'hi there to property
// color in plane object with metadata
Reflect.defineMetadata('note', 'hi there', plane, 'color');

console.log('Plane object: ', plane);

// get height metadata on plane object
const height = Reflect.getMetadata('height', plane);
// get note metadata on color property of plane object
const note = Reflect.getMetadata('note', plane, 'color');

console.log('height metadata: ', height);
console.log('note metadata: ', note);

console.log('----METADATA WITH CLASSES-----');

// METDATA WITH CLASSES

@printMetadata
class Plane {
    color: string = 'red';

    @markFunction("it's a secret")
    fly(): void {
        console.log('vrrrrrrr');
    }
}

// decorator function to add metadata fields to methods
function markFunction(secretInfo: string) {
    return function(target: Plane, key: string) {
        // define 'secret' metadata with value of secretInfo param in the fly method of Plane class
        Reflect.defineMetadata('secret', secretInfo, target, key)
    }
}

// decorator function to print metadata info 
function printMetadata(target: typeof Plane) {
    // for every method (every key is a method in the class)
    for(let key in target.prototype) {
        // get 'secret' metadata in Plane class for key method (loop of all methods)
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
    }
}