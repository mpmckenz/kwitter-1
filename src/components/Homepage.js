import React, { Component } from "react";
import { Card, Icon, Image, Feed } from "semantic-ui-react";
import octojpg from "../octo1.png";

class Homepage extends Component {
  render() {
    return (
      <Card>
        <Image src={octojpg} />
        <Card.Content>
          <Card.Header>Display Name</Card.Header>
          <Card.Meta>
            <span className="date">User Name</span>
          </Card.Meta>
          <Card.Description>
            All about me, blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah
          </Card.Description>
        </Card.Content>
        <br />
        <Card.Content extra>
          <Icon name="user">0 posts</Icon>
        </Card.Content>
      </Card>
    );
  }
}

export default Homepage;
