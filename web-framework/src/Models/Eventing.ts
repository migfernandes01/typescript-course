// callback function type alias
type Callback = () => void;

// class to represent eventing (react to events and trigger them)
export class Eventing {
    // events property, object where the key is a string and the value is an array of Callback fucntions
    events: { [key: string]: Callback[] } = {};

    // method to react to events
    on = (eventName: string, callback: Callback): void => {
        // initialize handlers with either the array value from this.events with key of eventName or empty arr
        const handlers = this.events[eventName] || [];
        // push callback function to array of callback functions for specific event
        handlers.push(callback);
        // events[eventName] = handlers
        this.events[eventName] = handlers;
    }

    // method to trigger functions on event
    trigger = (eventName: string): void => {
        // get array of functions for an event
        const handlers = this.events[eventName];

        // leave if array is empty or undefined
        if(!handlers || handlers.length === 0){
            return;
        }

        // for each function in the array, call that function
        handlers.forEach(callback => {
            callback();
        });
    }
}