/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/webclash-original.jpg';

const Home = (props) => {
    return (
        <div>
            <img className="webclash__logo" src={logo} width="45%" height="45%" />
            <li>
                <Link to={'/list'} >
                    <input className="add-to-cart btn btn-primary" type="submit" value="Ir al MarketPlace" /> 
                </Link>
            </li>
        </div>
    );
}

export default Home;