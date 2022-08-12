import { API_URL } from "../config/contansts"
import axios from "axios";

//주문내역
const GET_ORDERS = "GET_ORDERS"
const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS"
const GET_ORDERS_ERROR  = "GET_ORDERS_ERROR"

//작성리뷰
const GET_REVIEW = "GET_REVIEW"
const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS"
const GET_REVIEW_ERROR = "GET_REVIEW_ERROR"

//작성한 1대1문의

const initialState = {
    order:{
        loading:false,
        data:null,
        error:null
    },
    review:{
        loading:false,
        data:null,
        error:null
    }
}

export const getOrders = (id)=> async dispatch =>{
    dispatch({type:GET_ORDERS})
    try{
        const response = await axios.get(`${API_URL}/myorders/${id}`)
        const result = response.data;
        console.log(result)
        dispatch({type:GET_ORDERS_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_ORDERS_ERROR, error:e})
    }
}

export const getReview = (id) => async dispatch =>{
    dispatch({type:GET_REVIEW})
    try{
        const response = await axios.get(`${API_URL}/myreview/${id}`)
        const result = response.data;
        dispatch({type:GET_REVIEW_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_REVIEW_ERROR,error:e})
    }
}

export const getProductReview = (product) => async dispatch =>{
    dispatch({type:GET_REVIEW})
    try{
        const response = await axios.get(`${API_URL}/review/${product}`)
        const result = response.data;
        dispatch({type:GET_REVIEW_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_REVIEW_ERROR,error:e})
    }
}

export default function printMypage(state=initialState, action){
    switch(action.type){
        case GET_ORDERS:
            return{
                ...state,
                order:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_ORDERS_SUCCESS:
            return{
                ...state,
                order:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_ORDERS_ERROR:
                return{
                    ...state,
                    order:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
        case GET_REVIEW:
                    return{
                        ...state,
                        review:{
                            loading:true,
                            data:null,
                            error:null
                        }
                    }
        case GET_REVIEW_SUCCESS:
                    return{
                        ...state,
                        review:{
                            loading:false,
                            data:action.result,
                            error:null
                        }
                    }
        case GET_REVIEW_ERROR:
                        return{
                            ...state,
                            review:{
                                loading:false,
                                data:null,
                                error:action.error
                            }
                        }
        default:
            return state
    }
}