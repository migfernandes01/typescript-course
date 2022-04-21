import { Model } from "../Models/Model";

// abstract class View
export abstract class View<T extends Model<K>, K> {
    // regions object property (elements)
    regions: { [key: string]: Element } = {};

    // initialize reference to parent HTML element
    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    // define abstract method we defined on child component
    abstract template(): string;

    // map regions
    regionsMap(): { [key: string]: string } {
        return {};
    }

    // basic eventsMap (gets overwritten by some children 'components' or classes)
    eventsMap(): { [key: string]: () => void } {
        return {};
    };

    // method to set events and their callback function when triggered
    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    // method to bind events to elements in HTML
    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    // method to map regions
    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();
        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if(element){
                this.regions[key] = element;
            }          
        }
    }

    // onRender optional method
    onRender(): void {}

    // render method to append template to parent
    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }
}