import React from "react";
import "../Styling/main.css";
import octogif from "../octo1.gif";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  // option1:
  // constructor() {
  //   super();
  //   this.state = {
  //     isHidden: true
  //   };
  // }
  // toggleHiddenNavbar = event => {
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   });
  // };
  // USING THIS onClick in the Link tags-> onClick={this.toggleHiddenNavbar.bind(this)}
  // And a JS object where the child links would go-> {!this.state.isHidden && <NameOfChildComponent/>}
  // This Child Component would be the li tags containing Link tag

  // Option2
  // handleNavbar = event => {
  //   const newNavbar = this.props.filter(pathName => {
  //     if (pathName.pathname === "/")
  //   })
  // }

  // Option3
  // Use ternary statement with css visibility prop
  // ISSUE WITH THIS CHOICCE IS IT LEAVES TERRIBLE SPACING BETWEEN BUTTONS

  render() {
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
              this.props.pathname === "/logout"
                ? "hide"
                : ""
            }
          >
            <Link to="/edit" id="editLink">
              Edit Profile
            </Link>
          </li>
          <li
            className={
              this.props.pathname === "/register" ||
              this.props.pathname === "/" ||
              this.props.pathname === "/logout" ||
              this.props.pathname === "/home"
                ? "hide"
                : ""
            }
          >
            <Link to="/home" id="homeLink">
              Homepage
            </Link>
          </li>
          <li
            className={
              // this.props.pathname === "/" ||
              // this.props.pathname === "/logout" ||
              this.props.pathname === "/register" ? "hide" : ""
            }
          >
            <Link to="/register" id="logoutLink">
              Sign up
            </Link>
          </li>
          <li
            className={
              this.props.pathname === "/" ||
              this.props.pathname === "/logout" ||
              this.props.pathname === "/register"
                ? "hide"
                : ""
            }
          >
            <Link to="/logout" id="logoutLink">
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
