import { User } from '../Models/User';
import { UserProps } from '../Models/User';
import { View } from './View';

// class that represents UserForm 'component'
export class UserForm extends View<User, UserProps>{
    // method to map and execute events: returns an object
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick,
        };
    }

    // method with the code for when the set age button gets clicked
    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    // method with the code for when the set name button gets clicked
    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        if(input){
            const name = input.value;
            this.model.set({ name });
        }
    }

    //
    onSaveClick = (): void => {
        this.model.save();
    }

    // method that returns the HTML template
    template(): string {
        return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
    }
}