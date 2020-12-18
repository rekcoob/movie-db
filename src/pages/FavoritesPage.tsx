import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { MovieItem } from '../components/movies/MovieItem';
import { Row, Col } from 'antd';
import { IMovieDetails } from '../types';

export const FavoritesPage: React.FC = () => {
	const favorites = useSelector((state: RootState) => state.favs.favorites);

	return (
		<Row>
			{favorites &&
				favorites.map((movie: IMovieDetails) => (
					<Col
						key={movie.imdbID}
						className="gutter-row"
						xl={6}
						lg={8}
						md={12}
						sm={24}
					>
						<MovieItem movie={movie} />
					</Col>
				))}
		</Row>
	);
};
