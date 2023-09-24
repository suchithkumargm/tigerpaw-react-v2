import React,{useState} from 'react';
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
		<>
			<input type='checkbox' id='check' />
			<label for='check'>
				<i id='btn'>{icons['Hamburger']}</i>
				<i id='cancel'>{icons['Cancel']}</i>
			</label>
			<div className='sidebar bg-gray'>
				<ul>
					<li className={`${activeItem === 'Dashboard' ? 'active' : ''}`}><Link to='/dashboard' onClick={() => handleItemClick('Dashboard')}><i>{icons['Dashboard']}</i>Dashboard</Link></li>

					<li className={`${activeItem === 'Attendance' ? 'active' : ''}`}><Link to='/attendance' onClick={() => handleItemClick('Attendance')}><i>{icons['Attendance']}</i>Attendance</Link></li>

					<li className={`${activeItem === 'TimeSheet' ? 'active' : ''}`}><Link to='/timesheet' onClick={() => handleItemClick('TimeSheet')}><i>{icons['TimeSheet']}</i>TimeSheet</Link></li>

					<li className={`${activeItem === 'ProjectTask' ? 'active' : ''}`}><Link to='/projecttask' onClick={() => handleItemClick('ProjectTask')}><i>{icons['ProjectTask']}</i>Project / Task</Link></li>

					<li className={`${activeItem === 'Approval' ? 'active' : ''}`}><Link to='/approval' onClick={() => handleItemClick('Approval')}><i>{icons['Approval']}</i>Approval</Link></li>

					<li className={`${activeItem === 'Payroll' ? 'active' : ''}`}><Link to='/payroll' onClick={() => handleItemClick('Payroll')}><i>{icons['Payroll']}</i>Payroll</Link></li>

					<li className={`${activeItem === 'ProfileSettings' ? 'active' : ''}`}><Link to='profilesettings' onClick={() => handleItemClick('ProfileSettings')}><i>{icons['ProfileSettings']}</i>Profile Settings</Link></li>

					<li><Link className='text-red'to='/logout'><i>{icons['Logout']}</i>Logout</Link></li>
				</ul>
			</div>

		</>
	)
}

export default Sidebar;