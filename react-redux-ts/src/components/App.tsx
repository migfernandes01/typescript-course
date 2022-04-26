import { useState } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

// interface to describe all props received by this component
interface AppProps {
    todos: Todo[];
    fetchTodos: typeof fetchTodos;
    deleteTodo: typeof deleteTodo;
}

const _App = (props: AppProps): JSX.Element => {

    const [isLoading, setIsLoading] = useState(false);

    const onButtonClick = (): void => {
        setIsLoading(true);
        props.fetchTodos();
        setIsLoading(false); 
    }

    const onTodoClick = (id: number): void => {
        props.deleteTodo(id);
    }

    const renderList = (): JSX.Element[] => {
        return props.todos.map((todo: Todo) => {
            return (
                <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
                    Todo number {todo.id}:{todo.title}
                </div>
            );
        });
    }

    return(     
        <div>
            <button onClick={onButtonClick}>Fetch</button>
            {isLoading ? <p>Loading...</p>
            : renderList()}
        </div>
    );
};

// map state to props function that returns the todos in an object
const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
    return { todos: state.todos };
};

// connect component with redux state store
// (config)(component)
export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
)(_App);