import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.scss';

import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/HomePage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { FavoritesPage } from './pages/FavoritesPage';

export const App = () => {
	return (
		<BrowserRouter>
			<Navbar />

			<div className="container">
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route path="/movie/:id">
						<MovieDetailsPage />
					</Route>

					<Route path="/favorites">
						<FavoritesPage />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};
