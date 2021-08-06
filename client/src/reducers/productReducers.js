import { GET_ITEMS , ADD_ITEMS ,LOAD_ITEMS } from "../actions/types";

const initialState = {
    items:[],
    loading : false
}

const productReducers = (state = initialState , action) => {
    switch(action.type){
        case GET_ITEMS :
            return {
                ...state,
                items:action.payload,
                loading:false
            };



        case ADD_ITEMS :
            return {
                ...state,
                items:[action.payload , ...state.items]
            }
        
        default : return state;
    }

    export default productReducers;
}
