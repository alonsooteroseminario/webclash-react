/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CartWidget from './CartWidget';
import HomeWidget from './HomeWidget';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link to={'/'}>
              <HomeWidget />
            </Link>
          </li>
            <li className="nav-item">
                <h4>Market Place</h4>
            </li>
            <li className="nav-item">
                <CartWidget />
            </li>
            <li className="nav-item">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={'/categoria/frutas'}>
                    Frutas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'/categoria/zapatillas'}>
                    Zapatillas
                  </Link>
                </NavDropdown.Item>
            </NavDropdown>
            </li>
        </ul>
    </div>

  );
}

export default NavBar;