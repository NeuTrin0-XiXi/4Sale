import { combineReducers } from "redux";
import itemReducer from './productReducers';

export default combineReducers({
    item:itemReducer                         
})