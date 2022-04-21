import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

// class to represent a collection
export class Collection<T, K> {
    // properties
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(
        public rootUrl: string,
        public deserialize: (json: K) => T
    ){}

    // on getter, returning a reference to events.on
    get on() {
        return this.events.on;
    }

    // trigger getter, returning a reference to events.trigger
    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: K) => {
                    this.models.push(this.deserialize(value));
                });
                this.trigger('change');
            });

    }
}