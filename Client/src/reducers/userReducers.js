const initialState = {
    user: {
        email: '',
        favourites: [],
        name: '',
        notifications: '',
        profilePic: '',
        soldItems: '',
        _id: '',
        mobile: 0
    },
    Authorised: false
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_TRUE':
            return {
                user: action.payload,
                Authorised: true
            };



        case 'SET_AUTH_FALSE':
            return {
                user: initialState.user,
                Authorised: initialState.Authorised
            }

        case 'UPDATE_USER':
            return {
                user: action.payload,
                Authorised: true
            }
        default: return state;
    }

}


export default userReducers;