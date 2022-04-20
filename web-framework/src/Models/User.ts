import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from './Sync';

// interface containing an object with properties of a User
export interface UserProps {
    id?: number,        // optional prop
    name?: string;      // optional prop
    age?: number;       // optional prop
}

const rootUrl = 'http://localhost:3000/users';

// class that represents a User
export class User {
    // events property, an instance of Eventing class
    public events: Eventing = new Eventing();
    // sync property, an instance of generic Sync class
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    // attributes property, and instance of generic Attributes class (contains getters and setters)
    public attibutes: Attributes<UserProps>;

    // constructor to inicialize attributes property
    constructor(attrs: UserProps){
        this.attibutes = new Attributes<UserProps>(attrs);
    }

    // return reference to events.on method
    get on() {
        return this.events.on;
    }

    // return reference to events.trigger method
    get trigger() {
        return this.events.trigger;
    }

    // return reference to attributes.get method
    get get() {
        return this.attibutes.get;
    }
}