import React from "react";
import { Button, Form, Header } from "semantic-ui-react";

class EditProfile extends React.Component {
  render() {
    return (
      <div className="login">
        <Header className="header" as="h2">
          Edit Profile
        </Header>
        <Form size="large">
          <Form.Field>
            <input className="aboutme" placeholder="About Me" />
          </Form.Field>
          <Form.Field>
            <input className="input" placeholder="name" />
          </Form.Field>
          <Form.Field>
            <input className="input" type="password" placeholder="Update Password" />
            <input className="input" type="password" placeholder="Re-enter New Password" />
          </Form.Field>
          <Button className="submit-button" type="submit">
            Update Profile
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditProfile;
