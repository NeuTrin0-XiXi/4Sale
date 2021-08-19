import axios from "axios";

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
            };

        case 'UPDATE_USER':
            return {
                user: action.payload,
                Authorised: true
            };

        case 'UPDATE':
            axios.post('/api/googlelogin', {
                googleToken: action.payload
            })
                .then(res => {
                    const { favourites, soldItems, notifications } = res.data;
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            favourites: favourites,
                            soldItems: soldItems,
                            notifications: notifications
                        }
                    }
                })
        default: return state;
    }

}


export default userReducers;