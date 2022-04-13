// type inference
const carMakers = ['Ford', 'Toyota', 'Chevy'];

// type annotation
const dates: Date[] = [new Date(), new Date()];

// 2D array (array with array of strings)
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Flexible types
// (string | Date)[] array that contains string and/or Dates
const importantDates : (string | Date)[] = ['Birthday', new Date(), '2030-10-10'];

// Help with inference when extracting values
const oneCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('Honda');

// Help with 'map'
carMakers.map((carMaker: string): string => {
    return carMaker.toUpperCase();
})