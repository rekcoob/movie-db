import React from 'react';
import Pagination from 'antd/lib/pagination';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../../store/actions';
import { RootState } from '../../store/reducers/rootReducer';

export const Paginate: React.FC = () => {
	const dispatch = useDispatch();
	const totalResults = useSelector(
		(state: RootState) => state.movies.totalResults
	);
	const searchTerm = useSelector((state: RootState) => state.movies.searchTerm);
	const pageNo = useSelector((state: RootState) => state.movies.pageNumber);

	const handlePageClick = (pageNumber: number) => {
		searchMovies(dispatch, searchTerm, pageNumber);
	};

	return (
		<div className="center my-2">
			<Pagination
				current={pageNo}
				onChange={handlePageClick}
				total={totalResults}
				pageSize={10}
				showSizeChanger={false}
			/>
		</div>
	);
};
