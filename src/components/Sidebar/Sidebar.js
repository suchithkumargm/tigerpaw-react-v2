import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import icons from '../../assets/icons/icons.js';
import Dropdown from '../Dropdown/Dropdown.js';
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
					<li className={`${activeItem === 'Dashboard' ? 'active' : ''}`}><Link to='/dashboard' className='activable-a' onClick={() => handleItemClick('Dashboard')}><i>{icons['Dashboard']}</i>Dashboard</Link></li>

					<li className={`${activeItem === 'Attendance' ? 'active' : ''}`}><Link to='/attendance' className='activable-a' onClick={() => handleItemClick('Attendance')}><i>{icons['Attendance']}</i>Attendance</Link></li>

					<li className={`${activeItem === 'TimeSheet' ? 'active' : ''}`}><Link to='/timesheet' className='activable-a' onClick={() => handleItemClick('TimeSheet')}><i>{icons['TimeSheet']}</i>TimeSheet</Link></li>

					<input type='checkbox' className='dropdown-checkbox' id='checkboxProject' />
					<li className={`${activeItem === 'ProjectTask' ? 'sidenav dropdown active' : 'sidenav dropdown'}`} onClick={() => handleItemClick('ProjectTask')}>
						<label className='dropdown-btn activable-a' for='checkboxProject' ><i>{icons['ProjectTask']}</i>Project / Task<i>{icons['Dropdown']}</i>
						</label>
						<div className='dropdown-container'>
							<Link to='/projecttask'>Project 1</Link>
							<Link to='/projecttask'>Project 2</Link>
						</div>
					</li>

					{/* <input type='checkbox' className='dropdown-checkbox' id='checkboxApproval' />
					<li className={`${activeItem === 'Approval' ? 'sidenav dropdown active' : 'sidenav dropdown'}`} onClick={() => handleItemClick('Approval')}>
						<label className='dropdown-btn activable-a' for='checkboxApproval' ><i>{icons['Approval']}</i>Approval<i>{icons['Dropdown']}</i>
						</label>
						<div className='dropdown-container'>
							<Link to='/approval'>Accept</Link>
							<Link to='/approval'>Reject</Link>
						</div>
					</li> */}


					<li className={`${activeItem === 'Approval' ? 'active' : ''}`}>
						<Link to='approval' className='activable-a' onClick={() => handleItemClick('Approval')}><i>{icons['Approval']}</i>
						<Dropdown
							options={['Accept','Reject']}
							defaultOption="Approval"
						/>
						</Link>
					</li>

					<li className={`${activeItem === 'Payroll' ? 'active' : ''}`}><Link to='/payroll' className='activable-a' onClick={() => handleItemClick('Payroll')}><i>{icons['Payroll']}</i>Payroll</Link></li>

					<li className={`${activeItem === 'ProfileSettings' ? 'active' : ''}`}><Link to='profilesettings' className='activable-a' onClick={() => handleItemClick('ProfileSettings')}><i>{icons['ProfileSettings']}</i>Profile Settings</Link></li>

					<li><Link className='text-red' to='/logout'><i>{icons['Logout']}</i>Logout</Link></li>
				</ul>
			</div>

		</>
	)
}

export default Sidebar;