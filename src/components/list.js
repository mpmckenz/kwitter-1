import React from "react";
import { connect } from "react-redux";
import { likeMessage, unlikeMessage } from "../Redux/types";
import { like, deleteMessage } from "../Actions/action";

const PHOTO_URL = "https://picsum.photos/200?photo=";

class List extends React.Component {
  formatDate = date => {
    var monthNames = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = date.substring(8, 10);
    var monthIndex = parseInt(date.substring(5, 7), 10);
    var year = date.substring(0, 4);
    var time = "";
    if (date.substring(11, 13) > 12) {
      time = date.substring(11, 13) - 12 + date.substring(13, 16) + " PM";
    } else {
      time = date.substring(11, 16) + " AM";
    }

    return day + " " + monthNames[monthIndex] + " " + year + " at " + time;
  };

  handleLike = (userId, messageId) => () => {
    this.props.dispatch(likeMessage(userId, messageId));
  };
  handleUnlike = messageId => () => {
    console.log(messageId);
    this.props.dispatch(unlikeMessage(messageId));
  };

  delete = event => () => {
    console.log("hello");
    deleteMessage(this.props.message);
  };

  render() {
    const likeTweet = like(this.props.messageId);
    const dMessage = deleteMessage(this.props.messageId);

    return (
      <React.Fragment>
        <div className="ui medium feed segment">
          <div className="event">
            <div className="label">
              <img
                alt="thumbnail"
                src={PHOTO_URL + this.props.photo[this.props.userId].filename}
              />
            </div>
            <div className="content">
              <div className="date">{this.formatDate(this.props.date)}</div>
              <div className="summary">
                {/* <a>User: {this.props.userId}</a> */}
              </div>
              <div className="extra text">{this.props.text}</div>
              <div className="meta">
                <button className="like" type="submit" onClick={likeTweet}>
                  <i className="like icon" /> {this.props.likes.length} Likes
                </button>
              </div>
              <div className="meta">
                <button id="delete-button" color="red" onClick={dMessage}>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(List);
