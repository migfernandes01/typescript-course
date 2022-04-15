// new interface (new type)
interface Report {
    summary(): string;  // function that returns a string
}

// object to represend an old Honda Civic
const oldCivic = {  
    name: 'Civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}, Year: ${this.year}`
    }
};

// object to represent a drink
const mate = {
    color: 'green',
    carbonated: false,
    sugar: 0,
    summary(): string {
        return `My drink has ${this.sugar}g of sugar`
    }
}

// WITHOUT USING INTERFACE - function that returns void (nothing)
const printVehicle = (vehicle: { name: string; year: number; broken: boolean } ): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

// USING INTERFACE - function that returns void (nothing)
const printItemSummary = (item: Report ): void => {
    console.log(item.summary());
};

// Call both functions
printVehicle(oldCivic);

// USING INTERFACE we make things more flexible
printItemSummary(oldCivic);
printItemSummary(mate);