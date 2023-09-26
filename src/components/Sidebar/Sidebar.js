import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import icons from '../../assets/icons/icons.js';
import './sidebar.css';

const Sidebar = () => {

	const [activeItem, setActiveItem] = useState('');	//state to manage active element dynamically

	//function to set the active item when clicked
	const handleItemClick = (itemName) => {
		setActiveItem(itemName);
	};

	return (
		<div className="sidebar bg-secondary">
			<ul className="list__items text-primary">
				<li className="list__item"><Link to="#"><i>{icons['Dashboard']}</i>Dashboard</Link></li>
				<li className="list__item"><Link to="#"><i>{icons['Attendance']}</i>Attendance</Link></li>
				<li className="list__item"><Link to="#"><i>{icons['TimeSheet']}</i>TimeSheet</Link></li>
				<li className="list__item"><Link to="#"><i>{icons['ProjectTask']}</i>Project / Task</Link></li>
				<li className="list__item"><Link to="#"><i>{icons['Approval']}</i>Approval</Link></li>
				<li className="list__item"><Link to="#"><i>{icons['Payroll']}</i>Payroll</Link></li>
				<li className="list__item"><Link to="#"><i>{icons['ProfileSettings']}</i>Profile Settings</Link></li>
				<li className="list__item logout"><Link href="#"><i>{icons['Logout']}</i>Logout</Link></li>
			</ul>
		</div>
	)
}

export default Sidebar;