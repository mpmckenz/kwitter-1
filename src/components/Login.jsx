import React, { Component } from "react";
import { Button, Form, Header } from 'semantic-ui-react';
import "../styling/login.css"

export default class Login extends Component {
  render() {
    return (
      <div className="login">
      <Header as='h2' color='blue' textAlign='center'>
              Log-in to Kwitter
            </Header>
      <Form size="large">
    <Form.Field>
      
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
        </div>
      
    );
  }
}
