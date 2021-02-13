/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CartWidget from './CartWidget';
import HomeWidget from './HomeWidget';
import logo from '../Images/webclash-original.png';

const NavBar = () => {
  return (
    <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <a href={'/'} >
              <HomeWidget />   
            </a>
          </li>
            <li className="nav-item">
                <h4>Market Place</h4>
            </li>
            <li className="nav-item">
                <CartWidget />
            </li>
        </ul>
    </div>

  );
}

export default NavBar;