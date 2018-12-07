export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const NEW_POST = 'NEW_POST'
export const LIKE = 'LIKE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_MESSAGE_ID = 'GET_MESSAGE_ID'
export const GET_LOGOUT = 'GET_LOGOUT'
export const GET_USER = 'GET_USER'
export const MAIN_PAGE = 'MAIN_PAGE'
export const DELETE_USER = 'DELETE_USER'
export const UNLIKE = 'UNLIKE'
export const PATCH_PASSWORD = 'PATCH_PASSWORD'
export const PATCH_ABOUT = 'PATCH_ABOUT'
export const IS_LOGGING_IN = "IS_LOGGING_IN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const TO_LOGIN = "TO_LOGIN";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LIKE_MESSAGE = 'LIKE_MESSAGE';
export const UNLIKE_MESSAGE = 'UNLIKE_MESSAGE';

export const addMessage = (text) => {
    return{
    type: ADD_MESSAGE,
    text,
    }
  };

  export const likeMessage = (userId, messageId) => {
    return{
    type: LIKE_MESSAGE,
    userId,
    messageId
    }
};

export const unlikeMessage = (messageId) => {
    return{
    type: UNLIKE_MESSAGE,
    messageId
    }
};