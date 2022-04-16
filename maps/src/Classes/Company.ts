// file that holds the Company class
import faker from 'faker';  // 3rd party module to generate fake data
import { Mappable } from './CustomMap'; // Mappable interface

// class that represents a Company, that satisfies the Mappable interface
export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `
            <div>
                <h1>Company Name: ${this.companyName}</h1>
                <h3>Catch Phrase: ${this.catchPhrase}</h3>
            </div>
            `;
    }
}