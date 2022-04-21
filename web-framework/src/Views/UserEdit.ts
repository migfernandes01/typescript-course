import { View } from "./View";
import { User, UserProps } from '../Models/User';
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdit extends View <User, UserProps>{
    // map elements
    regionsMap(): { [key: string]: string } {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        }
    }

    // render child components
    onRender(): void {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }

    template(): string {
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
    }
}