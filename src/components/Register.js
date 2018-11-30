import React, { Component } from 'react';

export class Register extends Component {
    state = {
        displayName: "",
        username: "",
        password: "",
        passwordRepeat: "",
        passwordMatches: true
    }

    

    render() {
        return (
            <div>
                <div>
                    <label for=""></label>
                </div>
                <div>
                    <input onSubmit={this.handleRegister} />
                </div>
            </div>
        );
    }
}
  