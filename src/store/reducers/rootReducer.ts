import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { movieReducer } from './movieReducer';
import { favReducer } from './favReducer';

export const rootReducer = combineReducers({
	movies: moviesReducer,
	movie: movieReducer,
	favs: favReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
