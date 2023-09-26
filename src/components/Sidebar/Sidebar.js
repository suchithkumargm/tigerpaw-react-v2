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
				<li className={`${activeItem === 'Dashboard' ? 'active' : ''} list__item`} onClick={() => handleItemClick('Dashboard')}><Link to="/dashboard"><i>{icons['Dashboard']}</i>Dashboard</Link></li>

				<li className={`${activeItem === 'Attendance' ? 'active' : ''} list__item`} onClick={() => handleItemClick('Attendance')}><Link to="attendance"><i>{icons['Attendance']}</i>Attendance</Link></li>

				<li className={`${activeItem === 'TimeSheet' ? 'active' : ''} list__item`} onClick={() => handleItemClick('TimeSheet')}><Link to="timesheet"><i>{icons['TimeSheet']}</i>TimeSheet</Link></li>

				<li className={`${activeItem === 'ProjectTask' ? 'active' : ''} list__item`} onClick={() => handleItemClick('ProjectTask')}><Link to="projecttask"><i>{icons['ProjectTask']}</i>Project / Task</Link></li>

				<li className={`${activeItem === 'Approval' ? 'active' : ''} list__item`} onClick={() => handleItemClick('Approval')}><Link to="approval"><i>{icons['Approval']}</i>Approval</Link></li>

				<li className={`${activeItem === 'Payroll' ? 'active' : ''} list__item`} onClick={() => handleItemClick('Payroll')}><Link to="payroll"><i>{icons['Payroll']}</i>Payroll</Link></li>

				<li className={`${activeItem === 'ProfileSettings' ? 'active' : ''} list__item`} onClick={() => handleItemClick('ProfileSettings')}><Link to="profilesettings"><i>{icons['ProfileSettings']}</i>Profile Settings</Link></li>

				<li className="list__item logout"><Link href="logout"><i>{icons['Logout']}</i>Logout</Link></li>

			</ul>
		</div>
	)
}

export default Sidebar;