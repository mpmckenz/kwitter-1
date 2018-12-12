import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_SUCCESS
} from "./types";

export const getUserByID = ID => dispatch => {
  dispatch({
    type: GET_USER_BY_ID
  });

  fetch("https://kwitter-api.herokuapp.com/users/" + ID)
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
        type: GET_USER_BY_ID_SUCCESS,
        userData: data.user
      });
    })
    .catch(err => {
      // dispatch here on fail
      dispatch({
        type: GET_USER_BY_ID_FAIL
      });
    });
};
