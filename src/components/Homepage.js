import React, { Component } from "react";
import { Card, Icon, Image, Feed, Input } from "semantic-ui-react";
import octojpg from "../octo1.png";

class Homepage extends Component {
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
          />
          <Feed>
            <hr />
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

export default Homepage;
