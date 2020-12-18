import axios from 'axios';
import { Dispatch } from 'react';
import {
	SEARCH_MOVIES,
	GET_MOVIE,
	ADD_FAV,
	REMOVE_FAV,
	SET_MOVIES_LOADING,
	SET_DETAILS_LOADING,
	FavoritesActions,
	IMovieDetails,
	MoviesActionTypes,
	SingleMovieActions,
} from '../types';
import { RootState } from './reducers/rootReducer';

const API_KEY = process.env.REACT_APP_API_KEY;

// Search Movies
export const searchMovies = async (
	dispatch: Dispatch<MoviesActionTypes>,
	searchTerm: string,
	page: number
) => {
	setMoviesLoading(dispatch);
	const res = await axios.get(
		`http://omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
	);
	dispatch({
		type: SEARCH_MOVIES,
		payload: {
			movies: res.data.Search,
			searchTerm: searchTerm,
			results: res.data.totalResults,
			pageNumber: page,
		},
	});
};
const setMoviesLoading = (dispatch: Dispatch<MoviesActionTypes>) =>
	dispatch({ type: SET_MOVIES_LOADING });

// Get Single Movie
export const getMovie = async (
	dispatch: Dispatch<SingleMovieActions>,
	id: string
) => {
	setDetailsLoading(dispatch);
	const res = await axios.get(`http://omdbapi.com/?apikey=${API_KEY}&i=${id}`);
	dispatch({
		type: GET_MOVIE,
		payload: res.data,
	});
};
const setDetailsLoading = (dispatch: Dispatch<SingleMovieActions>) =>
	dispatch({ type: SET_DETAILS_LOADING });

export const addToFavs = (movie: IMovieDetails) => (
	dispatch: Dispatch<FavoritesActions>,
	getState: () => RootState
) => {
	dispatch({
		type: ADD_FAV,
		payload: movie,
	});
	localStorage.setItem(
		'favoriteMovies',
		JSON.stringify(getState().favs.favorites)
	);
};

export const removeFromFavs = (id: string) => (
	dispatch: Dispatch<FavoritesActions>,
	getState: () => RootState
) => {
	dispatch({
		type: REMOVE_FAV,
		payload: id,
	});
	localStorage.setItem(
		'favoriteMovies',
		JSON.stringify(getState().favs.favorites)
	);
};
