import { User } from "./Models/User";

const user = new User({ name: 'New', age: 0 });

const name = user.get('name');
console.log(name);

user.on('change', () => {
    console.log('onChange');
});

user.trigger('change');
