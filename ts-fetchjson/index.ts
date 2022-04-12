import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// definition of the Todo interface
// 3 properties of 3 different types
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    // assign response.data to a variable as a Todo object(interface)
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, finished: boolean) => {
    console.log(`
        The todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
};