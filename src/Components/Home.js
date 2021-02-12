/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <img className="webclash__logo" src='https://webclash-viewer.herokuapp.com/images/webclash-original.png' width="45%" height="45%" />
            <li>
                <Link to={'/list'} >
                    Ir al MarketPlace
                </Link>
            </li>
        </div>
    );
}

export default Home;