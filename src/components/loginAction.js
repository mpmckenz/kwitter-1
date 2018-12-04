import { push } from 'connected-react-router';

export const IS_LOGGING_IN = "IS_LOGGING_IN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

const api = 'https://kwitter-api.herokuapp.com/'

export const userLogin = (username , password) => (dispatch) => {
   dispatch(isLoggingIn());
   const header = {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       "username":username,
       "password":password,
     })
   }
   
   
   fetch(`${api}/auth/login`, header)
     .then(response => response.json())
     .then(loginResponse => {
         //add code to push to new URL after this fetch is completed so that it goes to profile page
       if( loginResponse.success ){
         dispatch(userLoginSuccess(loginResponse.token,loginResponse.success, loginResponse.id))
         dispatch(push('/home'))
       }else{
         dispatch(userLoginFail())
       }
     }).catch(error => dispatch(userLoginFail()))
   
 }

 export const userLoginSuccess = (token, success, userID) => {
    return {
      type: USER_LOGIN_SUCCESS, 
      payload: {
          token,
          isLoginSuccess: success,
          userID
      }
    }
  }

 export const isLoggingIn = () => {
    return {
      type: IS_LOGGING_IN
    }
  }

  export const userLoginFail = () => {
    return {
      type: USER_LOGIN_FAIL
    }
  }