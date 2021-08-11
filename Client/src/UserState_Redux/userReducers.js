const initialState = {
    user:{
            name: '',
            email: '',
            favourites: [],
            soldItems: [],
            _id: '',
            profilePic:''
        },
    Authorised:false
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_TRUE':
            return {
                user:action.payload,
                Authorised:true
            };



        case 'SET_AUTH_FALSE':
            return {
                initialState
            }

        default: return state;
    }

}


export default userReducers;