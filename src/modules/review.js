import { API_URL } from "../config/contansts"
import axios from "axios";

const GET_REVIEW = "GET_REVIEW"
const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS"
const GET_REVIEW_ERROR = "GET_REVIEW_ERROR"

const initialState = {
    review:{
        loading:false,
        data:null,
        error:null
    }
}

//메인페이지에서 포토리뷰만 출력하기
export const getPhotoReview = ()=> async dispatch =>{
    dispatch({type:GET_REVIEW})
    try{
        const response = await axios.post(`${API_URL}/photoreview`)
        const result = response.data;
        console.log(result)
        dispatch({type:GET_REVIEW_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_REVIEW_ERROR,error:e})
    }
}

//리듀서
export default function printReview(state=initialState,action){
    switch(action.type){
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