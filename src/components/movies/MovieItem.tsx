import React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../types';
import { getImage } from '../../utils';

type Props = {
	movie: IMovie;
};

export const MovieItem: React.FC<Props> = ({
	movie: { Title, Poster, imdbID },
}) => {
	return (
		<div className="card">
			<Link to={`/movie/${imdbID}`}>
				<img src={getImage(Poster)} alt={Title} />
				<h3>{Title}</h3>
			</Link>
		</div>
	);
};
