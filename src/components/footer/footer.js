import React from "react";
import Logo from '../img/logo.jpg'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import youtube from '../img/youtube.png'
import './footer.css';


function Footer (){
    return (
    <div>
        <div className="footer">
            <div>
                <img src={Logo} alt="logo" />
                <p>We are a fitness club in Brooklyn 
                with modern gym machines and group programs</p>
                <div className="logo">
                    <img src={facebook} alt="logo" />
                    <img src={instagram} alt="logo" />
                    <img src={twitter} alt="logo" />
                    <img src={youtube} alt="logo" />
                </div>
            </div>
            <div className="menu">
                <h5>Navigation
                    <li>
                        <ul>About Us</ul>
                        <ul>Classes</ul>
                        <ul>Personal training</ul>
                        <ul>Locations</ul>
                    </li>
                </h5>
                <h5>Information
                    <li>
                        <ul>About Us</ul>
                        <ul>Classes</ul>
                        <ul>Personal training</ul>
                        <ul>Locations</ul>
                    </li>
                </h5>
                <h5>Clients
                    <li>
                        <ul>About Us</ul>
                        <ul>Classes</ul>
                        <ul>Personal training</ul>
                        <ul>Locations</ul>
                    </li>  
                </h5>                              
            </div>
            <div className="form">
                <p>Subscribe to get the latest news from us:</p>
                <input type={"email"}></input>
                <input type={"button"} value={"Subscribe"}></input>
            </div>
        </div>
        <div className="signature">
            <p>© Created by Orest Vahila</p>
            <p>All rights Reserved</p>
        </div>
    </div>
    )
}

export default Footer;