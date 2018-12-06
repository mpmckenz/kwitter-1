import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, TO_LOGIN } from "./types";
import { push } from "connected-react-router";
// import { push } from "react-router-redux";
import { history } from "./store";

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
    });
};

export const loginLink = () => {
  return {
    type: TO_LOGIN
  };
};
