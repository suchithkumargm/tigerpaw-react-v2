import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem.js';
import icons from '../../assets/icons/icons.js';
import './sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    'Dashboard',
    'Attendance',
    'TimeSheet',
    'ProjectTask',
    'Approval',
    'Payroll',
    'ProfileSettings',
  ];

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="sidebar bg-secondary">
      <ul className="list__items text-primary">
        {menuItems.map((itemName) => (
          <SidebarItem
            key={itemName}
            itemName={itemName}
            activeItem={activeItem}
            handleItemClick={handleItemClick}
          />
        ))}
        <li className="list__item logout">
          <Link href="logout">
            <i>{icons['Logout']}</i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
