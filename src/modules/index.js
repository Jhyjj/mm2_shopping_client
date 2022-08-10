import { combineReducers } from "redux";
import printCart from "./cart";
import loginCheck from "./logincheck";
import printProduct from "./products";


const rootReducer = combineReducers({loginCheck, printProduct, printCart})

export default rootReducer

