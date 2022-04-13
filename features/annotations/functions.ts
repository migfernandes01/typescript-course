// Arrow functions

// returns type number
const add = (a: number, b: number): number => {
    return a + b;
};

// also returns type number (type inference, NOT recommended in functions)
const subtract = (a: number, b: number) => {
    return a - b;
};


// Named function
function divide(a: number, b: number): number {
    return a / b;
}
 
// Anonymous function
const multply = function(a: number, b: number): number {
    return a * b;
}

// no return (void)
const logger = (message: string): void => {
    console.log(message);
};

// never going to reach the end of function, since it throws an error and leaves the func
const throwError = (message: string): never => {
    throw new Error(message);
};


const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);