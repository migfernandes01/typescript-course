import { FetchTodosAction, DeleteTodoAction } from "./todos";

// enum of action types
export enum ActionTypes {
    fetchTodos,
    deleteTodo,
}

// type alias Action (unite all possible redux actions)
export type Action = FetchTodosAction | DeleteTodoAction;