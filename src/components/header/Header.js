import React from 'react';
import './Header.css';
import phoneImage from '../../images/phone-header-bg.png';
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import { BsMouse } from "react-icons/bs";


const Header = () => {
    return (
        <section class="header">
            <div classname="container header">
                <div className="header-left">
                    <h1>
                        <span>THE WORLD'S LEADING </span>
                        <span>SECURE MULTI-PLATFORM </span>
                        <span>MESSAGING SYSTEM</span>
                    </h1>
                    <p className="u-text-small u-text-light">
                        Social Bird is the up and coming messaging platform for all users. Have full knowledge of your messaging data
                        at the tip of your fingers and rest assured that no one else can see it. Social Bird the the leading competitor in
                        the private messaging industry.
                    </p>
                    <div className="header-cta">
                        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
                        <Button text={"How It Works"} btnClass={"btn-orange"} href={"#"}/>
                    </div>
                </div>
                <div className="header-right">
                    <img src={phoneImage} alt="phone"></img>
                </div>
            </div>
            <div className="floating-icon">
                <a href="#features">
                    <BsMouse color="#fff" size={25} className="mouse"></BsMouse>
                </a>
            </div>
        </section>
    )
}

export default Header
