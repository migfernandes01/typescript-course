import { AxiosPromise, AxiosResponse } from "axios";

// define interface for Attributes class
interface ModelAttributes<T> {
    set(update: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

// define interface for Syncing class
interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

// define interface for Eventing class
interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

// interface to represen a type that contains an optional id property
interface HasId {
    id?: number;
}

// class that represents a Model (User, Blog or whatever it is)
export class Model<T extends HasId> {

    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {}

    // reference to events.on method
    on = this.events.on;
    // reference to events.trigger method
    trigger = this.events.trigger;
    // reference to attributes.get method
    get = this.attributes.get;

    // set properties
    set(update: T): void {
        // set attributes of User
        this.attributes.set(update);
        // trigger change event
        this.events.trigger('change');
    }

    // fetch data with an id
    fetch(): void {
        const id = this.attributes.get('id');

        // if id is undefined
        if(typeof id !== 'number'){
            throw new Error('Cannot fetch without an id');
        }

        // else, fetch data
        this.sync.fetch(id)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            })
            .catch(() => {
                // trigger error event
                this.trigger('error');
            });
    }

    // method to save data to the backend json-server
    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse) => {
                // trigger save event
                this.trigger('save');
            })
            .catch(() => {
                // trigger error event
                this.trigger('error');
            });
    }
}