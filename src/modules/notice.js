import axios from "axios"
import { API_URL } from "../config/contansts"

//notice
const GET_NOTICE = "GET_NOTICE"
const GET_NOTICE_SUCCESS = "GET_NOTICE_SUCCESS"
const GET_NOTICE_ERROR = "GET_NOTICE_ERROR"

//fnq
const GET_FNQ = "GET_FNQ"
const GET_FNQ_SUCCESS = "GET_FNQ_SUCCESS"
const GET_FNQ_ERROR = "GET_FNQ_ERROR"

//1:1문의
const GET_PERSONALQ = "GET_PERSONALQ"
const GET_PERSONALQ_SUCCESS = "GET_PERSONALQ_SUCCESS"
const GET_PERSONALQ_ERROR = "GET_PERSONALQ_ERROR"

const initialState = {
    notice:{
        loading:false,
        data:null,
        error:null
    },
    fnq:{
        loading:false,
        data:null,
        error:null
    },
    personalQ:{
        loading:false,
        data:null,
        error:null
    }
}

export const getNotice = ()=> async dispatch =>{
    dispatch({type:GET_NOTICE})
    try{
        const response = await axios.get(`${API_URL}/notice`)
        const result = response.data;
        dispatch({type:GET_NOTICE_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_NOTICE_ERROR,error:e})
    }
}

export const getFnq = ()=> async dispatch =>{
    dispatch({type:GET_FNQ})
    try{
        const response = await axios.get(`${API_URL}/fnq`)
        const result = response.data;
        dispatch({type:GET_FNQ_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_FNQ_ERROR,error:e})
    }
}

export const getPersonalQ = (id) => async dispatch =>{
    dispatch({type:GET_PERSONALQ})
    try{
        const response = await axios.get(`${API_URL}/mypersonalQ/${id}`)
        const result = response.data;
        dispatch({type:GET_PERSONALQ_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_PERSONALQ_ERROR,error:e})
    }
}

export const adminpersonalQ = () => async dispatch =>{
    dispatch({type:GET_PERSONALQ})
    try{
        const response = await axios.get(`${API_URL}/adminpersonalQ/`)
        const result = response.data;
        dispatch({type:GET_PERSONALQ_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_PERSONALQ_ERROR,error:e})
    }
}


export default function printNotice(state=initialState,action){
    switch(action.type){
        case GET_NOTICE:
            return{
                ...state,
                notice:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_NOTICE_SUCCESS:
            return{
                ...state,
                notice:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_NOTICE_ERROR:
            return{
                ...state,
                notice:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }
        case GET_FNQ:
            return{
                ...state,
                fnq:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_FNQ_SUCCESS:
            return{
                ...state,
                fnq:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_FNQ_ERROR:
            return{
                ...state,
                fnq:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }
        case GET_PERSONALQ:
            return{
                ...state,
                personalQ:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_PERSONALQ_SUCCESS:
            return{
                ...state,
                personalQ:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_PERSONALQ_ERROR:
            return{
                ...state,
                personalQ:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }
        default:
            return state;
    }
}