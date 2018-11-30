import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export default class Login extends Component {
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100%', verticalAlign:'flex-start', marginLeft:'100px' }}>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment 
                stacked         
                >
                <Form.Input
                  fluid
                  required
                  autoFocus
                  
                  className="username"
                  placeholder='Username'
                  onChange= {this.handleChangeUser}
                  
                  />
                <Form.Input
                  fluid
                  required
                  className="password"
                  placeholder='Password'
                  type='password'
                  onChange= {this.handleChangePassword}
                />
                <Button fluid size='large' onClick={this.handleSubmitLogin}>
                  Login
                </Button>
              </Segment>
            </Form>
            
        </Grid.Column>
        </Grid>
      
    );
  }
}
