import React from 'react';
import { Link } from 'react-router-dom';

import icons from '../../assets/icons/icons.js';

const SidebarItem = ({ itemName, activeItem, handleItemClick }) => (
    <li className={`${activeItem === itemName ? 'active' : ''} list__item`} onClick={() => handleItemClick(itemName)}>
        <Link to={`/${itemName.toLowerCase()}`}>
            <i>{icons[itemName]}</i>
            {itemName}
        </Link>
    </li>
);

export default SidebarItem;