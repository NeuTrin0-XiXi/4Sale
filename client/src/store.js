import { createStore } from "redux";
import userReducers from "./reducers/userReducers";

const store = createStore(userReducers);
// store.subscribe(()=>{
//     console.log(store.getState());
// })
export default store;