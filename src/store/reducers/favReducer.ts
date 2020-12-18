import { FavoritesActions, FavoritesState } from '../../types';
import { ADD_FAV, REMOVE_FAV } from '../../types';

const initialState: FavoritesState = {
	favorites: [],
};

export const favReducer = (state = initialState, action: FavoritesActions) => {
	switch (action.type) {
		case ADD_FAV:
			const item = action.payload;
			const existItem = state.favorites.find((x) => x.imdbID === item.imdbID);

			if (existItem) {
				return {
					...state,
					favorites: state.favorites.map((x) =>
						x.imdbID === existItem.imdbID ? item : x
					),
				};
			} else {
				return {
					...state,
					favorites: [...state.favorites, item],
				};
			}
		case REMOVE_FAV:
			return {
				...state,
				favorites: state.favorites.filter((x) => x.imdbID !== action.payload),
			};
		default:
			return state;
	}
};
