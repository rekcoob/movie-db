import { SingleMovieActions, SingleMovieState } from '../../types';
import { GET_MOVIE, SET_DETAILS_LOADING } from '../../types';

const initialState: SingleMovieState = {
	movie: {},
	loading: false,
};

export const movieReducer = (
	state = initialState,
	action: SingleMovieActions
) => {
	switch (action.type) {
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		case SET_DETAILS_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
