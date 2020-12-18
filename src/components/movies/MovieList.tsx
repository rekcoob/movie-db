import React from 'react';
import { MovieItem } from './MovieItem';
import { useSelector } from 'react-redux';
import { Paginate } from '../layout/Paginate';
import { Row, Col } from 'antd';
import { Spinner } from '../layout/Spinner';
import { RootState } from '../../store/reducers/rootReducer';
import { IMovie } from '../../types';

export const MovieList: React.FC = () => {
	const movies = useSelector((state: RootState) => state.movies.movies);
	const loading = useSelector((state: RootState) => state.movies.loading);

	if (loading) return <Spinner />;
	return (
		<>
			{movies && movies.length !== 0 && <Paginate />}
			<Row gutter={16}>
				{movies &&
					movies.map((movie: IMovie) => (
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
		</>
	);
};
