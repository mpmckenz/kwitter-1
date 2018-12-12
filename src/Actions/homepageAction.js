import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAIL,
  GET_USER_BY_ID_SUCCESS
} from "../Redux/types";

export const getUserByID = () => (dispatch, getstate) => {
  dispatch({
    type: GET_USER_BY_ID
  });

  const userID = getstate().profile.id;

  fetch("https://kwitter-api.herokuapp.com/users/" + userID)
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(data => {
      dispatch({
        type: GET_USER_BY_ID_SUCCESS,
        userData: data.user
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USER_BY_ID_FAIL
      });
    });
};
