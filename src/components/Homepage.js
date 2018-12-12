import React, { Component } from "react";
import { Card, Icon, Image, Feed, Input, Button } from "semantic-ui-react";
import octojpg from "../octo1.png";
import { connect } from "react-redux";
import Messages from "./messages.js";
import { addTweet } from "../Actions/action.js";
import { getUserByID } from "../Actions/homepageAction";

class Homepage extends Component {
  componentDidMount() {
    this.props.GetUserByID();
  }

  state = {
    text: ""
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    this.props.addTweet({ message: this.state.text });
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <div className="userHomepage">
        <div className="userCard">
          <Card>
            <Image src={octojpg} />
            <div className="userHomepageInfo">
              <Card.Content>
                <Card.Header>{this.props.displayname}</Card.Header>
                <Card.Meta>
                  <span className="date">{this.props.username}</span>
                </Card.Meta>
                <Card.Description>{this.props.aboutMe}</Card.Description>
              </Card.Content>
              <br />
              <Card.Content extra>{this.props.numOfPosts} posts</Card.Content>
            </div>
          </Card>
        </div>
        <div className="userFeed">
          <Input
            className="newUserPost"
            placeholder="What's new with you?"
            autoFocus
            onChange={this.handleOnChange}
            // value={this.state.text}
          />
          <Button onClick={this.handleSubmit} type="submit">
            Submit
          </Button>
          <Feed>
            <hr />
            <Messages />
            <Feed.Event>
              <Feed.Label image={octojpg} />
            </Feed.Event>{" "}
            */}
          </Feed>
          <hr />
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  displayname: state.userData.displayName,
  username: state.userData.username,
  about: state.userData.about,
  numOfPosts: state.userData.messages.length
});

const mapDispatchToProps = dispatch => {
  return {
    addTweet: tweet => dispatch(addTweet(tweet)),
    GetUserByID: () => dispatch(getUserByID())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
