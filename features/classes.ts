// Class that represents a vehicle
class Vehicle {
    // constructor function(instantly executed)
    // initialize instance and fields, receives color of type string
    constructor(public color: string) {
        // this.color = color;
    }

    public drive(): void{
        console.log('driving vehicle...');
    }

    protected honk(): void {
        console.log('beep beep');
    }
}

// Class that represents a car and inherits Vahicle class
class Car extends Vehicle{
    // constructor, to initalize instance
    constructor(public doors: number, color: string){
        // call parent class constructor passing color received by car class
        super(color);
    }

    // overwrite method from Vehicle class
    private driveCar(): void {
        console.log('driving car...');
    }

    startDrivingProcess(): void {
        console.log('starting the drive...');
        this.driveCar();
        this.honk();
    }
}

// instance of Vehicle class
const vehicle = new Vehicle('orange');
console.log('color of vehicle: ', vehicle.color);
vehicle.drive();
// vehicle.honk();

// instance of Car class
const car = new Car(2, 'blue');
console.log('color of car: ',car.color);
console.log('number of doors: ', car.doors);
car.startDrivingProcess();
// car.honk();