import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  TO_LOGIN,
  IS_LOGGING_IN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LIKE,
  UNLIKE
} from "../Redux/types";
import { push } from "connected-react-router";
import axios from "axios";
import { store } from "../Redux/store";

export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_TWEET = "ADD_TWEET";
const api = "https://kwitter-api.herokuapp.com";

export const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });

  fetch("https://kwitter-api.herokuapp.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(data => {
      // dispatch here
      dispatch({
        type: REGISTER_SUCCESS,
        register: data,
        result: "Successfully Registered"
      });
      dispatch(push("/"));
    })
    .catch(err => {
      // dispatch here on fail
      dispatch({
        type: REGISTER_FAIL,
        result: "Failed to Register"
      });
      alert("Username Taken. Please Choose another");
    });
};

export const loginLink = () => {
  return {
    type: TO_LOGIN
  };
};

export const addTweet = ({ message }) => (dispatch, getState) => {
  axios({
    method: "POST",
    url: "https://kwitter-api.herokuapp.com/messages",
    headers: {
      Authorization: "Bearer " + getState().profile.token,
      "Content-Type": "application/json",
      charset: "utf-8"
    },
    data: { text: message }
  })
    .then(() => {
      dispatch(getMessages());
      dispatch(push("/"));
    })
    .catch(err => console.log(err));
};

export function getMessages() {
  return function(dispatch) {
    axios
      .get("https://kwitter-api.herokuapp.com/messages?limit=1000&offset=0")
      .then(res => {
        if (res.statusText === "OK") {
          dispatch({
            type: GET_MESSAGES,
            payload: {
              messages: res.data.messages
            }
          });
          dispatch(push("/home"));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const userLogin = (username, password) => dispatch => {
  dispatch(isLoggingIn());
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  };

  fetch(`${api}/auth/login`, header)
    .then(response => response.json())
    .then(loginResponse => {
      //add code to push to new URL after this fetch is completed so that it goes to profile page
      if (loginResponse.success) {
        dispatch(
          userLoginSuccess(
            loginResponse.token,
            loginResponse.success,
            loginResponse.id
          )
        );
        dispatch(push("/home"));
      } else {
        dispatch(userLoginFail());
        alert("Invalid username or password");
      }
    })
    .catch(error => dispatch(userLoginFail()));
};

export const userLoginSuccess = (token, success, userID) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      token,
      success,
      userID
    }
  };
};

export const isLoggingIn = () => {
  return {
    type: IS_LOGGING_IN
  };
};

export const userLoginFail = () => {
  return {
    type: USER_LOGIN_FAIL
  };
};

export const like = messageId => (dispatch, getState) => {
  const loggedIn = store.getState().profile.success;
  if (!loggedIn) {
    return;
  }
  const token = store.getState().profile.token;
  let authKey = `Bearer ${token}`;

  const postLike = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ messageId: messageId })
  };

  fetch(api + "/likes", postLike)
    .then(res => res.json())
    .then(data => {
      store.dispatch({
        type: LIKE,
        messageId: data.messageId
      });
      store.dispatch(getMessages());
      store.dispatch(push("/"));
    });
};
