// Obj representing a drink
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Tuple representing the same drink
// var name: [types of the properties] = content of tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// OR with a Type alias
type Drink = [string, boolean, number];
const tea: Drink = ['green', false, 10];