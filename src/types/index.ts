export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const SET_MOVIES_LOADING = 'SET_MOVIES_LOADING';
export const SET_DETAILS_LOADING = 'SET_DETAILS_LOADING';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export interface IMovie {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export interface IMovieDetails extends IMovie {
	Actors: string;
	Awards: string;
	Country: string;
	Director: string;
	Genre: string;
	Language: string;
	Metascore: string;
	Plot: string;
	Poster: string;
	Production: string;
	Rated: string;
	Ratings: Object[];
	Released: string;
	Response: string | boolean;
	Runtime: string;
	Title: string;
	Type: string;
	Writer: string;
	Year: string;
	imdbID: string;
	imdbRating: string;
	imdbVotes: string;
}

export type MoviesState = {
	movies: IMovie[];
	totalResults: null | number;
	searchTerm: null | string;
	pageNumber: number;
	loading: boolean;
};
interface SearchMoviesAction {
	type: typeof SEARCH_MOVIES;
	payload: any;
}
interface SetMoviesLoading {
	type: typeof SET_MOVIES_LOADING;
}
export type MoviesActionTypes = SearchMoviesAction | SetMoviesLoading;

export type SingleMovieState = {
	movie: IMovieDetails | any;
	loading: boolean;
};
interface GetMovieAction {
	type: typeof GET_MOVIE;
	payload: IMovieDetails;
}
interface SetDetailsLoadingAction {
	type: typeof SET_DETAILS_LOADING;
}
export type SingleMovieActions = GetMovieAction | SetDetailsLoadingAction;

export type FavoritesState = {
	favorites: IMovieDetails[];
};
interface AddFavAction {
	type: typeof ADD_FAV;
	payload: IMovieDetails;
}
interface RemoveFavAction {
	type: typeof REMOVE_FAV;
	payload: string;
}
export type FavoritesActions = AddFavAction | RemoveFavAction;
