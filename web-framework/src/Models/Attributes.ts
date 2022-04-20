
// class to handle attributes of a model (user, blog...)
export class Attributes <T> {
    // constructor to inidialize data
    constructor(private data: T){}

    // method to get a property of T data. Returns the type of the key (or property) passed in the args
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    // method to set user data
    set(update: T): void {
        // assign update object to data object
        Object.assign(this.data, update);
    }
}