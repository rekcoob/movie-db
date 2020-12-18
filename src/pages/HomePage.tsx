import React from 'react';
import { MovieList } from '../components/movies/MovieList';
import { SearchBox } from '../components/layout/SearchBox';

export const HomePage: React.FC = () => {
	return (
		<>
			<SearchBox />
			<MovieList />
		</>
	);
};
