import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import this
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contect">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contect">
            <p></p>Connect With Me
          </AnchorLink></div>
    </div>
  );
};

export default Navbar;
