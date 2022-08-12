import { combineReducers } from "redux";
import printCart from "./cart";
import loginCheck from "./logincheck";
import printMypage from "./order";
import printProduct from "./products";
import printReview from "./review";


const rootReducer = combineReducers({loginCheck, printProduct, printCart, printMypage, printReview})

export default rootReducer

