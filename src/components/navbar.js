import React from "react";
import "../styling/navBar.css";
import { Link } from "react-router-dom";
import octogif from "../octo1.gif";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navWrapper">
        <ul className="navBar">
          {/* Use ternary to assign className="isVisible" */}
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/posts">News Feeds</Link>
          </li>
          <li>
            <Link to="/edit">Edit Profile</Link>
          </li>
          <li>
            <Link to="/home">Homepage</Link>
          </li>
          <li>
            <Link to="/register">Signup</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
          <li>
            <img src={octogif} alt="" />
          </li>
          <li className="navTitle">Kwitter</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
