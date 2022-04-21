import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from './Eventing';
import { Collection } from "./Collection";

// interface containing an object with properties of a User
export interface UserProps {
    id?: number,        // optional prop
    name?: string;      // optional prop
    age?: number;       // optional prop
}

const rootUrl = 'http://localhost:3000/users';

// class that represents a User
export class User extends Model<UserProps>{
    // static method to create an instance of a User
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    // satic method to create a user collection
    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
        );
    }

    // method to set a random age
    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age }); 
    }
}