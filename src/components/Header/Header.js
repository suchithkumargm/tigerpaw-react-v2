import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import photo from '../../assets/images/photo.jpeg';
import icons from '../../assets/icons/icons.js';
import './Header.css';

const Header = () => {
	return (
		<header>
			<div className='brand'>
				<img className='logo' src={logo} alt='logo' />
				<Link className='text-yellow'>TIGERPAW</Link>
			</div>
			<div className='content'>
				<p><i className='text-yellow'>{icons['Notification']}</i></p>
				<div className='text-yellow'>
						<p>date </p>
						<p>time</p>
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
