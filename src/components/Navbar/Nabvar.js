import React from "react";
import "./Navbar.scss";
// import logo from "../../../public/images/2.png";

export default function Nabvar() {
  // const getValue = e => {
  // let value = e.target.value;
  //};
  //const { logo } = this.props;
  return (
    <nav className="navbar">
      <img src="/" alt="brand-logo" />
      <ul className="navbar-list">
        <li>
          <a href="city.js" className="navbar-link">
            City
          </a>
        </li>
        <li>
          <a href="contact.js" className="navbar-link">
            Contact Us
          </a>
        </li>
        <li>
          <a href="about.js" className="navbar-link">
            About Us
          </a>
        </li>
        <li>
          <input
            className="navbar-link"
            type="text"
            placeholder="Search.."
            name="search-tour"
            //value=""
            //onChange={this.getValue}
          />
          <i className="fa fa-search" />
        </li>
        <li>
          <a href="sign.js" className="navbar-link">
            Sign in/Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}
