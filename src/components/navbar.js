import React from "react";
import "../Styling/main.css";
import octogif from "../octo1.gif";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    // handleNavbar = event => {
    //   const newNavbar = this.props.filter(pathName => {
    //     if (pathName.pathname === )
    //   })
    // }
    console.log(this.props.pathname);
    return (
      <div className="navWrapper">
        <ul className="navBar">
          <li>
            <img src={octogif} alt="" className="octo" />
          </li>
          <li className="navTitle">Kwitter</li>
        </ul>

        <ul className="navBarLinks">
          {/* Use ternary to assign className="isVisible" */}
          <li
            className={
              this.props.pathname === "/edit" ||
              this.props.pathname === "/home" ||
              this.props.pathname === "/register"
                ? "hide"
                : ""
            }
          >
            <Link to="/" id="loginLink">
              Login
            </Link>
          </li>
          <li
            className={
              this.props.pathname === "/register" ||
              this.props.pathname === "/" ||
              this.props.pathname === "/home"
                ? "hide"
                : ""
            }
          >
            <Link to="/edit" id="editLink">Edit Profile</Link>
          </li>
          <li
            className={
              this.props.pathname === "/register" ||
              this.props.pathname === "/" ||
              this.props.pathname === "/home"
                ? "hide"
                : ""
            }
          >
            <Link to="/home" id="homeLink">Homepage</Link>
          </li>
          <li
          className={
              this.props.pathname === "/register" ||
              this.props.pathname === "/edit" ||
              this.props.pathname === "/home"
              ? "hide"
              : ""
          }
              >
            <Link to="/register" id="registerLink">Signup</Link>
          </li>
          <li
            className={
              this.props.pathname === "/" || this.props.pathname === "/register"
                ? "hide"
                : ""
            }
          >
            <Link to="/">Logout</Link>
          </li>

          <br />
          <li
          className={
            this.props.pathname === "/register"
            ? "hide"
            : ""
          }
          >
            <Link to="/" id="logoutLink">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pathname: state.router.location.pathname };
};

export default connect(mapStateToProps)(Navbar);
