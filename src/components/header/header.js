import React from "react";
import './header.css';
import Logo from '../img/GymLogo.png'
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
                    <li>
                        <ul className="greyBtn"><input type='button' value='About Us' /></ul>
                        <ul className="greyBtn"><input type='button' value='Classes' /></ul>
                        <ul className="greyBtn"><input type='button' value='Personal training' /></ul>
                        <ul className="greyBtn"><input type='button' value='Locations' /></ul>
                    </li>
                </div>
                <div className="logo">
                    <li>
                        <ul><a href='https://www.facebook.com'> <img alt="logo" src={facebook}/> </a> </ul>
                        <ul><a href='https://www.facebook.com'> <img alt="logo" src={instagram}/> </a> </ul>
                        <ul><a href='https://www.facebook.com'> <img alt="logo" src={twitter}/> </a> </ul>
                        <ul><a href='https://www.facebook.com'> <img alt="logo" src={youtube}/> </a> </ul>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header;