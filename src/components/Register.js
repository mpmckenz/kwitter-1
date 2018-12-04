import React, { Component } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
<<<<<<< HEAD
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
=======
import { connect } from 'react-redux';
import { register } from './action';
import '../styling/register.css';

export class Register extends Component {
    state = {
        displayName: "",
        username: "",
        password: "",
        // passwordRepeat: "",
        // passwordMatches: true
    }
    
    handleChangeDisplayName = (event) => {
        this.setState({
            displayName: event.target.value
        });
    };

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    // handleChangeMatch = (event) => {
    //     this.setState({
    //         passwordMatches: event.target.value
    //     });
    // };

    // noMatch = () => {
    //     return (
    //         <Segment color="red">Entered passwords do not match</Segment>
    //     )
    // }

    handleRegister = (event) => {
        this.props.register({
            username: this.state.username,
            password: this.state.password,
            displayName: this.state.displayName
        });
    };
>>>>>>> origin/master

    render() {
        return (
            <div className="register">
                <Header className="header" as="h2">Sign Up</Header>
                <Form size="large">
                    <Form.Field>
<<<<<<< HEAD
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
=======
                        <input 
                            className="input"
                            placeholder="Display Name"
                            value={this.state.displayName}
                            onChange={this.handleChangeDisplayName}
                            required
                            autoFocus
                        />
                    </Form.Field>
                    <Form.Field>
                        <input
                            className="input"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChangeUsername}
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        {/* { this.state.passwordMatches ? null : this.noMatch() } */}
                        <input
                            className="input"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            required
                        />
                    </Form.Field>
                    {/* <Form.Field>
                        <input className="input" placeholder="Re-Enter Password" value={this.state.passwordRepeat} fluid required />
                    </Form.Field> */}
                    <Button className="submit-button" type="submit" onSubmit={this.handleRegister}>Register</Button>
                </Form>
                <div>
                    <h3>{this.props.result}</h3>
                </div>
>>>>>>> origin/master
            </div>
        );
    }
}

<<<<<<< HEAD
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
=======
const mapStateToProps = (state) => {
    return {
        result: state.registerResult
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (registerData) => dispatch(register(registerData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
>>>>>>> origin/master
