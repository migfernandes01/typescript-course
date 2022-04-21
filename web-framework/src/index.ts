import { User, UserProps } from "./Models/User";
import { UserEdit } from "./Views/UserEdit";
import { UserList } from "./Views/UserList";
import { Collection } from "./Models/Collection";

/* const user = User.buildUser({ name: 'Miguel', age: 20 });

const root = document.getElementById('root');

if(root) {
    const userEdit = new UserEdit(
        root,
        user
    );
    userEdit.render();

    console.log(userEdit);
} else {
    throw new Error('root element not found'); 
} */


const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
    return User.buildUser(json);
});

users.on('change', () => {
    const root = document.getElementById('root');

if(root) {
    new UserList(root, users).render();
} else {
    throw new Error('root element not found'); 
}
});

users.fetch();
