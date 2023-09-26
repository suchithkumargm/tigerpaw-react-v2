import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AppRoutes from './components/AppRoutes.js'; //Routing

import './styles/App.css';
import TimeSheet from './components/Sidebar/NavigationItems/TimeSheet/TimeSheet.js';

const App = () => {
	return (
		<BrowserRouter>
			{/* Header or Top Navabr */}
			<Header />
			{/* Sidebar */}
			<main className="main">
				<Sidebar />
				{/* <TimeSheet /> */}
				<AppRoutes />
			</main>

			{/* Main content */}
		</BrowserRouter>
	);
};

export default App;