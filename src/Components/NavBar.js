import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <h4>Cart Webclash</h4>
            </li>
            <li className="nav-item"> 
                <CartWidget />
            </li>

        </ul>
    </div>

  );
}

export default NavBar;