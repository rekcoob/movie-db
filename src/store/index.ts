import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';

const favorites = localStorage.getItem('favoriteMovies')
	? JSON.parse(localStorage.getItem('favoriteMovies')!)
	: [];

const initialState = {
	favs: { favorites },
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
