@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `The boat is ${this.color}`;
    }

    @logError('Error in pilot method')
    pilot(): void {
        throw new Error();
        console.log('swish');
    }


    velocity(
        @parameterDecorator speed: string,
        @parameterDecorator generateWave: boolean
    ): void {
        if(speed === 'fast') {
            console.log('swishhhh');
        } else {
            console.log('nothing');
        }
    }
}

// decorator for a class
function classDecorator(constructor: typeof Boat) {
    console.log('Constructor: ', constructor);
}

// decorator for a parameter of a method in class Boat
function parameterDecorator(target:any, key: string, index: number): void {
    // prints key(method) and index of parameter in method
    console.log(key, index);
}

// test decorator that prints the key parameter received by decorator
function testDecorator(target: any, key: string): void {
    // property/method name
    console.log('Key: ', key);
}

// logError decorator function (print custom error if there's an error with pilot() method)
function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
    // assign pilot method to a variable
    const method = desc.value;

    // assign new function to pilot method
    desc.value = function () {
        // try running pilot method
        try {
            method();
        } catch(e) {
            // catch any errors
            console.log(errorMessage);
        }
    }
}
}

// intance of Boat 
const boat = new Boat();

boat.pilot();