import { Action, Todo, ActionTypes } from '../actions'; 

// todos reducer
export const todosReducer = (state: Todo[] = [], action: Action) => {    
    // switch type of action
    switch(action.type) {
        // if fetchTodos, return action.payload (array of todos)
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            // filter and keep all todos except the one we want to delete
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state;
    }
}