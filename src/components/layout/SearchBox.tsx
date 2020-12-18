import React, { useState, ChangeEvent } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../store/actions';

export const SearchBox: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();
	const { Search } = Input;

	const handleSearch = async () => {
		if (searchTerm === '') {
			console.log('add some text');
		} else {
			searchMovies(dispatch, searchTerm, 1);
			setSearchTerm('');
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

	return (
		<>
			<Search
				placeholder="Search Movies..."
				enterButton="Search"
				size="large"
				value={searchTerm}
				onChange={handleChange}
				onSearch={handleSearch}
				prefix={<SearchOutlined />}
			/>
		</>
	);
};
