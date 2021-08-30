const initialState = {
    user: {
        email: '',
        favourites: [],
        name: '',
        notifications: [],
        profilePic: '',
        soldItems: [],
        _id: '',
        mobile: 0
    },
    Authorised: false,
    loading: true
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_TRUE':
            return {
                user: action.payload,
                Authorised: true,
                loading: false
            };
        case 'SET_AUTH_LOADING':
            return {
                user: initialState.user,
                Authorised: false,
                loading: false
            };

        case 'SET_AUTH_FALSE':
            return {
                user: initialState.user,
                Authorised: false,
                loading: false
            };

        case 'UPDATE_USER':
            return {
                user: action.payload,
                Authorised: true,
                loading: false
            };
        default: return state;
    }

}


export default userReducers;