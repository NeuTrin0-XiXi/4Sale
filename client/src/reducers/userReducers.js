const initialState = {
    user: {
        email: '',
        favourites: [],
        name: '',
        notifications: [],
        profilePic: '',
        soldItems: [],
        _id: '',
        mobile: 0,
        orders:[]
    },
    Authorised: false,
    loading: true
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_BASIC':
            return {
                user: action.payload,
                Authorised: true
            };
        case 'SET_AUTH_FULL':
            return {
                user: action.payload,
                Authorised: true
            };
        
        case 'SET_AUTH_FALSE':
            return {
                user: initialState.user,
                Authorised: false
            };

        case 'UPDATE_USER':
            return {
                user: action.payload,
                Authorised: true
            };
        case 'SET_LOADING_FALSE':
            return {
                ...state,
                loading: action.payload
            };
        default: return state;
    }

}


export default userReducers;