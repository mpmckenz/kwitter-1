import {
  EDIT_PROFILE,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS
} from "../Redux/types";
import { getUserByID } from "./homepageAction";
import { store } from "../Redux/store";

export const isEditingProfile = () => {
  return {
    type: EDIT_PROFILE
  };
};
export const editProfileSuccess = () => {
  return {
    type: EDIT_PROFILE_SUCCESS
  };
};
export const editPrifleFailed = () => {
  return {
    type: EDIT_PROFILE_FAIL
  };
};

export const editProfile = (password, displayName, about) => dispatch => {
  dispatch(isEditingProfile());

  const token = store.getState().profile.token;

  let changes = {};
  if (password) changes["password"] = password;
  if (displayName) changes["displayName"] = displayName;
  if (about) changes["about"] = about;

  fetch("https://kwitter-api.herokuapp.com/users", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(changes)
  })
    .then(res => {
      // res.text().then(txt => console.log(txt));
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(user => {
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        userData: user.user
      });
    })

    .catch(err => {
      dispatch({
        type: EDIT_PROFILE_FAIL
      });
    });
};
