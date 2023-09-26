import React, { useState, useEffect } from 'react';

import logo from '../../assets/images/logo.png';
import photo from '../../assets/images/photo.jpeg';
import notification_img from '../../assets/images/notification.svg';
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
		<header className="header bg-secondary">

			<div className="brand">

				<div className="brand__logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="brand__name text-primary">
					<p>TIGERPAW</p>
				</div>
			</div>

			<div className="header__info text-primary">
				<div className="notifications">
					<div className="notification__icon">
						<img src={notification_img} alt="notification" />
					</div>
					<p className="time__info">
						{formattedDate}
					</p>
					<p className="time__info">
						{day} {time}
					</p>
				</div>

				<div className="profile text-white">
					<img src={photo} alt='photo'/>
					<p>suchith kumar</p>
				</div>
			</div>

		</header>
	)
}

export default Header
