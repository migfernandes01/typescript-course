import axios from "axios";
import { Dispatch } from 'redux';
import { ActionTypes } from "./types";

const url = 'https://jsonplaceholder.typicode.com/todos';

// interface to represent a  To-do
export interface Todo {
    id: number;
    title: string;
    completed: boolean
}

// interface to describe the FetchTodosAction action
export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];    // array of todos
}

// interface to describe the DeleteTodoAction action
export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;    // todo id to be removed
}

// action creators

// fetchTodos action creator
export const fetchTodos = (): Function => {
    return async (dispatch: Dispatch) => {
        // GET request to url
        const response = await axios.get<Todo[]>(url);

        // dispatch new action object with the FetchTodosAction interface as a generic
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};

// deleteTodo action creator
export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
};