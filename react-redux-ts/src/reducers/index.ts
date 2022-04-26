import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// inteface that describes the entire redux store for this app
export interface StoreState {
    todos: Todo[]
}

// combined reducers

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});