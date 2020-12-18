import { MoviesActionTypes, MoviesState } from '../../types';
import { SEARCH_MOVIES, SET_MOVIES_LOADING } from '../../types';

const initialState: MoviesState = {
	movies: [],
	totalResults: null,
	searchTerm: null,
	pageNumber: 1,
	loading: false,
};

export const moviesReducer = (
	state = initialState,
	action: MoviesActionTypes
) => {
	switch (action.type) {
		case SEARCH_MOVIES:
			return {
				...state,
				movies: action.payload.movies,
				searchTerm: action.payload.searchTerm,
				pageNumber: action.payload.pageNumber,
				totalResults: action.payload.results,
				loading: false,
			};
		case SET_MOVIES_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
