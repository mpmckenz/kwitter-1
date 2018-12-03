import React, { Component } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { connectRouter } from 'connected-react-router';
import '../styling/register.css';

export default class Register extends Component {
    state = {
        username: "",
        password: "",
        passwordRepeat: "",
        passwordMatches: true
    }

    handleRegister = () => {
        if (
            this.state.username &&
            this.state.password === this.state.passwordRepeat
        ) {
            this.setState({ passwordMatches: true })
            this.props.registerUser(this.state.username, this.state.password)

            return
        }

        if (this.state.password !== this.state) {
            this.setState({ passwordMatches: false })
        } else {
            this.setState({ passwordMatches: true })
        }
    }

    noMatch = () => {
        return (
            <Segment color="red">Entered passwords do not match</Segment>
        )
    }

    render() {
        return (
            <div className="register">
                <Header className="header" as="h2">Sign Up</Header>
                <Form size="large">
                    <Form.Field>
                        <input className="input" placeholder="Username" value={this.state.username} fluid required autoFocus />
                    </Form.Field>
                    <Form.Field>
                        { this.state.passwordMatches ? null : this.noMatch() }
                        <input className="input" placeholder="Password" value={this.state.password} fluid required />
                    </Form.Field>
                    <Form.Field>
                        <input className="input" placeholder="Re-Enter Password" value={this.state.passwordRepeat} fluid required />
                    </Form.Field>
                    <Button className="submit-button" type="submit" onSubmit={this.handleRegister}>Register</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = ({ register }) => ({
    register
});

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (username, password) => {
            dispatch(registerUser(username, password))
        }
    }
}

export default connectRouter(mapStateToProps, mapDispatchToProps)(Register)