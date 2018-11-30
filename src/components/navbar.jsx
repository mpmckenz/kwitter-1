import React from "react";
import "../styling/navBar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navWrapper">
        <ul className="navBar">
          {/* Use ternary to assign className="isVisible" */}
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/posts">News Feeds</a>
          </li>
          <li>
            <a href="/edit">Edit Profile</a>
          </li>
          <li>
            <a href="/home">Homepage</a>
          </li>
          <li>
            <a href="/register">Signup</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
          <br />
          {/* <ul> */}
          <li>
            <img
              src="https://im4.ezgif.com/tmp/ezgif-4-8578d02997f9.gif"
              alt=""
            />
          </li>
          <li className="navTitle">Kwitter</li>
        </ul>
        {/* </ul> */}
      </div>
    );
  }
}

export default Navbar;
