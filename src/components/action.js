export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";


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
            return res.json()
        })
        .then(data => {
            // dispatch here
            dispatch({
                type: REGISTER_SUCCESS,
                register: data,
                result: "Successfully Registered"
            });
        })
        .catch(err => { 
            // dispatch here on fail
            dispatch({
                type: REGISTER_FAIL,
                result: "Failed to Register"
            });
        });
};