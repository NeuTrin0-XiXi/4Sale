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
    loading: true
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                user: action.payload.user,
                Authorised: true,
                loading: action.payload.loading
            };

        case 'CLEAR_USER':
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

        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };

        default: return state;
    }

}


export default userReducers;