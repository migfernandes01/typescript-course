import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

// create redux store with reducers and applyMiddleware(thunk)
const store = createStore(reducers, applyMiddleware(thunk))

// render App component wrapped up with a store provider on the root div in index.html
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);