import { API_URL } from "../config/contansts"
import axios from "axios";

//액션타입

//여러개 조회할때
const GET_CART = "GET_CART"
const GET_CART_SUCCESS = "GET_CART_SUCCESS"
const GET_CART_ERROR = "GET_CART_ERROR"

//초기값
const initialState = {
    cart:{
        loading:false,
        data:null,
        error:null
    }
}

//액션생성함수

export const getCart = (id)=> async dispatch =>{
    dispatch({type:GET_CART})
    try{
        const response = await axios.post(`${API_URL}/mycart/${id}`)
        const result = response.data;
        console.log(result)
        dispatch({type:GET_CART_SUCCESS, result})
        
    }
    catch(e){
        dispatch({type:GET_CART_ERROR, error:e}) //실패했을때
    }
}


//리듀서
export default function printCart(state=initialState, action){
    switch(action.type){
        case GET_CART:
            return{
                ...state,
                cart:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_CART_SUCCESS:
            return{
                ...state,
                cart:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_CART_ERROR:
            return{
                ...state,
                cart:{
                    loading:false,
                    data:null,
                    error:action.error
                }
                }
        default:
            return state
    }
}