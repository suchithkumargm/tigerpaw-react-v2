import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AppRoutes from './components/AppRoutes.js'; //Routing
import TimeSheet from './components/Sidebar/NavigationItems/TimeSheet/TimeSheet.js';

import './styles/App.css';

const App = () => {
	return (
		<BrowserRouter>
			{/* Header or Top Navabr */}
			<Header />
			{/* Sidebar */}
			<Sidebar />

			{/* Main content */}
			<AppRoutes /> {/* Render route configuration component*/}
		</BrowserRouter>
	);
};

export default App;