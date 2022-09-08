import React from "react";
import './header.css';
import Logo from '../img/logo.jpg'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import youtube from '../img/youtube.png'


function Header () {
    return (
        <div className="top">
            <div className="contacts">
                <h3>E-mail: fitb@email.com</h3>
                <h3>Phone: +1 (234) 567 89 00</h3>
            </div>
            <div className="head">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <ul>
                        <li><input type='text' value='About Us' /></li>
                        <li><input type='text' value='Classes' /></li>
                        <li><input type='text' value='Personal training' /></li>
                        <li><input type='text' value='Locations' /></li>
                    </ul>
                </div>
                <div className="logo">
                <img src={facebook} alt="logo" />
                <img src={instagram} alt="logo" />
                <img src={twitter} alt="logo" />
                <img src={youtube} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Header;