import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import photo from '../../assets/images/photo.jpeg';
import icons from '../../assets/icons/icons.js';
import './Header.css';

//function to get the current date and time 
const formatDateTime = (date) => {
	const dayOptions = { weekday: 'short' };
	const day = date.toLocaleDateString(undefined, dayOptions);

	//time format
	const timeOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	};
	const time = date.toLocaleTimeString(undefined, timeOptions);

	//date format
	const dateOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	};
	const formattedDate = date.toLocaleDateString(undefined, dateOptions);

	return { day, time, formattedDate };
};

const Header = () => {

	const [currentDateTime, setCurrentDateTime] = useState(new Date());

	// Update the current date and time every second
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		// Clean up the interval set
		return () => clearInterval(intervalId);
	}, []);

	//destructure the date and time
	const { day, time, formattedDate } = formatDateTime(currentDateTime);

	return (
		<header>
			<div className='brand'>
				<img className='logo' src={logo} alt='logo' />
				<Link className='text-yellow'>TIGERPAW</Link>
			</div>
			<div className='content'>
				<p><i className='text-yellow'>{icons['Notification']}</i></p>
				<div className='text-yellow font-bold'>
					<p>{formattedDate} </p>
					<p>{day} {time}</p>
				</div>
				<div>
					<img className='photo' src={photo} alt='photo' />
				</div>
				<p className='text-white'>Suchith Kumar</p>
			</div>
		</header>
	)
}

export default Header
