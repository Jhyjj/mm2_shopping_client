
//리덕스 액션 타입
const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";

//액션생성함수
export const setLogin = ()=>{
    return{
        type:SET_LOGIN
    }
}

export const setLogout = ()=>{
    return{
        type:SET_LOGOUT
    }
}

//초기값 설정
const initialState = {
    isLogin:false
}

//리듀서 함수
export default function loginCheck(state=initialState, action){
    switch(action.type){
        case SET_LOGIN:
            return{
                isLogin:true
            }
        case SET_LOGOUT:
            return{
                isLogin:false
            }
        default:
            return state;
    }
}