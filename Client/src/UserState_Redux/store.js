import { createStore, applyMiddleware, compose } from "redux";
// import thunk from 'redux-thunk';
import userReducers from "./userReducers";


// const initialState = {};          

// const middleware = [thunk];       

// const store = createStore(userReducers , initialState , compose(applyMiddleware(...middleware)));
const store = createStore(userReducers);
store.subscribe(()=>{
    console.log(store.getState());
})
export default store;