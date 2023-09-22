import React from 'react';
import { Link } from 'react-router-dom';

import icons from '../../assets/icons/icons.js';
import './sidebar.css';

const Sidebar = () => {
	return (
		<>
			<input type='checkbox' id='check' />
			<label for='check'>
				<i id='btn'>{icons['Hamburger']}</i>
				<i id='cancel'>{icons['Cancel']}</i>
			</label>
			<div className='sidebar bg-gray'>
				<ul>
					<li><Link to='#'><i>{icons['Dashboard']}</i>Dashboard</Link></li>
					<li><Link to='#'><i>{icons['Attendance']}</i>Attendance</Link></li>
					<li><Link to='#'><i>{icons['TimeSheet']}</i>TimeSheet</Link></li>
					<li><Link to='#'><i>{icons['ProjectTask']}</i>Project / Task</Link></li>
					<li><Link to='#'><i>{icons['Approval']}</i>Approval</Link></li>
					<li><Link to='#'><i>{icons['Payroll']}</i>Payroll</Link></li>
					<li><Link to='#'><i>{icons['ProfileSettings']}</i>Profile Settings</Link></li>
					<li><Link className='text-red'to='#'><i>{icons['Logout']}</i>Logout</Link></li>
				</ul>
			</div>
			<section>
				suchith
			</section>
		</>
	)
}

export default Sidebar
