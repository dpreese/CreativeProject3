// import React, {useState} from 'react';
// import "./Navbar.css";
// import { AiOutlineMessage } from 'react-icons/ai';
// import { AiOutlineBars } from 'react-icons/ai';
// import { RiCloseLine } from 'react-icons/ri';
// import Button from '../UI/button/Button';
// import '../UI/button/Button.css';

// const Navbar = () => {

//     const [showMenu, setShowMenu] = useState(true);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu)
//     };

//     return (
//         <nav className="container navbar">
//             <div className="logo"></div>
//             <p className="logo-text">
//                 Social<span>Bird</span>
//             </p>
//             <AiOutlineMessage color="#fff" size={33}/>
//             <div>
//             <menu>
//                 <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">Features</a></li>
//                     <li><a href="#">Download</a></li>
//                     <li><a href="#">Subscribe</a></li>
//                     {/* <li className="nav-btn"><a href="#" className="btn btn-dark">Get Started</a></li> */}
//                     <li className="nav-btn">
//                         <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"}/>
//                     </li>
//                 </ul>
//             </menu>
//             </div>
//             <div className="menu-icons" onClick={toggleMenu}>
//                 {
//                     showMenu ? <RiCloseLine color="#fff" size={30}/> : <AiOutlineBars color="#fff" size={27} />
//                 }
//             </div>

//         </nav>
//     )
// }

// export default Navbar
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import { AiOutlineMessage } from 'react-icons/ai';

import Button from "../UI/button/Button.js";
import "../UI/button/Button.css";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
      <div className="logo">
        <AiOutlineMessage color="#fff" size={33} />
        <p className="logo-text">
          Social<span>Bird</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="nav-btn">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
