import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavs, getMovie, removeFromFavs } from '../store/actions';
import { RootState } from '../store/reducers/rootReducer';
import { StarOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { getImage, noNaValues } from '../utils';
import { Spinner } from '../components/layout/Spinner';
import { IMovieDetails } from '../types';

export const MovieDetailsPage: React.FC = () => {
	const dispatch = useDispatch();
	const movie = useSelector((state: RootState) => state.movie.movie);
	const { Title, Poster, Genre, Plot, imdbRating, imdbID, Released } = movie;
	const favorites = useSelector((state: RootState) => state.favs.favorites);
	const loading = useSelector((state: RootState) => state.movie.loading);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		getMovie(dispatch, id);
	}, [dispatch, id]);

	const addFav = (movie: IMovieDetails) => {
		dispatch(addToFavs(movie));
	};
	const removeFav = (id: string) => {
		dispatch(removeFromFavs(id));
	};

	if (loading) return <Spinner />;
	return (
		<>
			<div className="details">
				<img src={getImage(Poster)} alt={Title} />
				<div className="desc m-2">
					<h2>
						{Title}{' '}
						<span>
							{favorites &&
							favorites.find((fav: IMovieDetails) => fav.imdbID === imdbID) ? (
								<CloseCircleOutlined
									onClick={() => removeFav(imdbID)}
									style={{
										fontSize: '2.1rem',
										cursor: 'pointer',
									}}
								/>
							) : (
								<StarOutlined
									onClick={() => addFav(movie)}
									style={{
										fontSize: '2.1rem',
										cursor: 'pointer',
									}}
								/>
							)}
						</span>
					</h2>
					<p>
						{imdbRating * 10}% |
						<span>
							{' '}
							<span>{noNaValues(Released)}</span>
						</span>
					</p>
					<p>{noNaValues(Genre)}</p>
					<p>{noNaValues(Plot)}</p>
				</div>
			</div>
		</>
	);
};
