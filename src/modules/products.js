import { API_URL } from "../config/contansts"
import axios from "axios";

//액션타입
//하나만 조회할때
const GET_PRODUCT = "GET_PRODUCT"
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"
const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR"

//여러개 조회할때
const GET_PRODUCTS = "GET_PRODUCTS"
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR"

//초기값
const initialState = {
    products:{
        loading:false,
        data:null,
        error:null
    },
    product:{
        loading:false,
        data:null,
        error:null
    }
}

//액션생성함수

export const getProducts = (keyword)=> async dispatch =>{
    dispatch({type:GET_PRODUCTS})
    try{
        const response = await axios.get(`${API_URL}/products/${keyword}`)
        const result = response.data;
        console.log(result)
        dispatch({type:GET_PRODUCTS_SUCCESS, result})
        
    }
    catch(e){
        dispatch({type:GET_PRODUCTS_ERROR, error:e}) //실패했을때
    }
}

//검색창에 입력한 값으로 검색하는 함수
export const searchProduct = (input) => async dispatch =>{
    dispatch({type:GET_PRODUCTS})
    try{
        const response = await axios.get(`${API_URL}/search/${input}`)
        const result = response.data;
        dispatch({type:GET_PRODUCTS_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_PRODUCTS_ERROR, error:e})
    }
}

//상품리스트 중에 하나 클릭했을때 그 상품만 출력하기~!
export const getProduct = (id) => async dispatch => {
    dispatch({type:GET_PRODUCT})
    try{
        const response = await axios.get(`${API_URL}/detail/${id}`)
        const result  =response.data;
        console.log(result)
        dispatch({type:GET_PRODUCT_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_PRODUCT_ERROR, error:e})
    }
}

//리듀서
export default function printProduct(state=initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                products:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_PRODUCTS_ERROR:
            return{
                ...state,
                products:{
                    loading:false,
                    data:null,
                    error:action.error
                }
                }
        case GET_PRODUCT:
            return{
                ...state,
                product:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_PRODUCT_SUCCESS:
            return{
                ...state,
                product:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_PRODUCT_ERROR:
            return{
                ...state,
                product:{
                    loading:false,
                    data:null,
                    error:action.error
                }    
            }
        default:
            return state
    }
}