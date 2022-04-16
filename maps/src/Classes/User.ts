// file that holds the User class
import faker from 'faker';  // 3rd party module to generate fake data
import { Mappable } from './CustomMap'; // Mappable interface

// class that represents a User, that satisfies the Mappable interface
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `<h1>User Name: ${this.name}</h1>`;
    }
}
