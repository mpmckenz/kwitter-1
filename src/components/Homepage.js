import React, { Component } from "react";
import { Card, Icon, Image, Feed, Input, Button } from "semantic-ui-react";
import octojpg from "../octo1.png";
import { connect } from 'react-redux';
import  Messages  from './messages.js'
import {addTweet} from './action.js'

class Homepage extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    this.props.addTweet({message: this.state.text});
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div className="userHomepage">
        <div className="userCard">
          <Card>
            <Image src={octojpg} />
            <div className="userHomepageInfo">
              <Card.Content>
                <Card.Header>Display Name</Card.Header>
                <Card.Meta>
                  <span className="date">User Name</span>
                </Card.Meta>
                <Card.Description>
                  All about me, blah blah blah blah blah blah blah blah blah
                  blah blah blah blah blah blah blah
                </Card.Description>
              </Card.Content>
              <br />
              <Card.Content extra>
                <Icon name="user">0 posts</Icon>
              </Card.Content>
            </div>
          </Card>
        </div>
        <div className="userFeed">
          <Input
            className="newUserPost"
            placeholder="What's new with you?"
            autoFocus
            onChange = {this.handleOnChange}
            // value={this.state.text}
          />
          <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
          <Feed>
            <hr />
            <Messages/>
            <Feed.Event>
              <Feed.Label image={octojpg} />
              <Feed.Content content="You added Elliot Fu to the group Coworkers" />
              <Feed.Date>4 hours ago</Feed.Date>
            </Feed.Event>
          </Feed>
          <hr />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTweet: tweet => dispatch(addTweet(tweet))
  };
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
