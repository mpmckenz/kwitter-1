import React, { Component } from "react";
<<<<<<< HEAD
import List from './list.js';

=======
import List from "./list.js";
>>>>>>> homepage user profile

const PHOTO_LIST_URL = "https://picsum.photos/list";

class Messages extends Component {
<<<<<<< HEAD

  state = { messages: [], photos: [] }

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/messages",
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          messages: response.messages,
        });
      }
      );
=======
  state = { messages: [], photos: [] };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          messages: response.messages
        });
      });
>>>>>>> homepage user profile

    fetch(PHOTO_LIST_URL)
      .then(response => response.json())
      .then(photos => {
<<<<<<< HEAD
        this.setState({ photos })
      });

  }

  messagesSortedByDate = (messages) => {
    return messages.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  }
=======
        this.setState({ photos });
      });
  };

  messagesSortedByDate = messages => {
    return messages.sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
  };
>>>>>>> homepage user profile

  render() {
    const { photos = [] } = this.state;
    // console.log(this.state.messages);
    return (
      <React.Fragment>
        <div className="messages-list">
          <h3>All Messages</h3>
<<<<<<< HEAD
          {this.messagesSortedByDate(this.state.messages)
            .map((message, i) =>
              <List
                key={i}
                id={i}
                userId={message.userId}
                messageId={message.id}
                date={message.createdAt}
                text={message.text}
                likes={message.likes}
                photo={photos}
              />)}
        </div>
      </React.Fragment>
    );
  };
};



  

  export default Messages
=======
          {this.messagesSortedByDate(this.state.messages).map((message, i) => (
            <List
              key={i}
              id={i}
              userId={message.userId}
              messageId={message.id}
              date={message.createdAt}
              text={message.text}
              likes={message.likes}
              photo={photos}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Messages;
>>>>>>> homepage user profile
