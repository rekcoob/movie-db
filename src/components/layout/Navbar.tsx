import React from 'react';
import { Link } from 'react-router-dom';
import { VideoCameraOutlined } from '@ant-design/icons';

export const Navbar = () => {
	return (
		<nav>
			<div className="nav-container">
				<h1 className="center">
					<VideoCameraOutlined
						style={{
							color: 'white',
							fontSize: '2rem',
							marginRight: '0.5rem',
						}}
					/>{' '}
					Movie App
				</h1>
				<ul>
					<li>
						<Link to="/">Movies</Link>
					</li>
					<li>
						<Link to="/favorites">Favorites</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
