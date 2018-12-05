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
            <input className="input" placeholder="About Me" />
          </Form.Field>
          <Form.Field>
            <input className="input" placeholder="name" />
          </Form.Field>
          <Form.Field>
            <input className="input" placeholder="Update Password" />
            <input className="input" placeholder="Re-enter New Password" />
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
