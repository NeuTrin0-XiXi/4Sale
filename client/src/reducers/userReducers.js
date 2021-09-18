const initialState = {
    user: {
        email: '',
        favourites: [],
        name: '',
        notifications: [],
        imageUrl: '',
        ads: [],
        _id: '',
        mobile: 0,
        orders: []
    },
    Authorised: false,
    loading: true,
    accessToken: null
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                user: action.payload.user,
                Authorised: true,
                loading: action.payload.loading,
                accessToken: action.payload.accessToken
            };

        case 'CLEAR_USER':
            return {
                user: initialState.user,
                Authorised: false,
                loading: false,
                accessToken: null
            };

        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload,
                Authorised: true,
                loading: false
            };

        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };

        default: return state;
    }

}


export default userReducers;