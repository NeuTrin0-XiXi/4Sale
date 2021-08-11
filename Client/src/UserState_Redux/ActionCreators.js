export const Login = (user) => dispatch => {
    dispatch({type:'SET_AUTH_TRUE',
    payload:user})
};


export const Logout = dispatch => {
    dispatch({
        type:'SET_AUTH_FALSE'
    })
};





