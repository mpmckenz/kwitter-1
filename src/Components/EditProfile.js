import React from "react";
import { Button, Form, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { editProfile } from "../Actions/editprofileAction";

class EditProfile extends React.Component {
  state = { password: "", matchPassword: "", displayName: "", about: "" };

  handleSubmitEditProfile = () => {
    this.props.editProfile(
      this.state.password,
      this.state.displayName,
      this.state.about
    );
    this.setState({
      password: "",
      matchPassword: "",
      displayName: "",
      about: ""
    });
  };

  handleChangeDisplayName = event => {
    this.setState({
      displayName: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleChangeMatchPassword = event => {
    this.setState({
      matchPassword: event.target.value
    });
  };
  handleChangeAbout = event => {
    this.setState({
      about: event.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <Header className="header" as="h2">
          Edit Profile
        </Header>
        <Form size="large">
          <Form.Field>
            <input
              className="aboutme"
              onChange={this.handleChangeAbout}
              value={this.state.about}
              placeholder={
                this.props.about === "" ? "About Me" : this.props.about
              }
            />
          </Form.Field>
          <Form.Field>
            <input
              className="input"
              onChange={this.handleChangeDisplayName}
              value={this.state.displayName}
              placeholder={
                this.props.displayName === ""
                  ? "Display Name"
                  : this.props.displayName
              }
            />
          </Form.Field>
          <Form.Field>
            <input
              className="input"
              type="password"
              value={this.state.matchPassword}
              onChange={this.handleChangeMatchPassword}
              placeholder="Update Password"
            />
            <input
              className="input"
              type="Re-Enter password"
              onChange={this.handleChangePassword}
              value={this.state.password}
              placeholder="Re-enter New Password"
            />
          </Form.Field>
          <Button
            className="submit-button"
            type="submit"
            onClick={this.handleSubmitEditProfile}
          >
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // GetUserByID: () => dispatch(getUserByID()),
    editProfile: (password, displayName, about) =>
      dispatch(editProfile(password, displayName, about))
  };
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  displayName: state.userData.displayName,
  username: state.userData.username,
  about: state.userData.about
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
