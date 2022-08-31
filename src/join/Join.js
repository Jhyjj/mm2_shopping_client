import React,{useEffect, useState} from 'react';
import './style.css';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode.js';
import axios from 'axios';
import { API_URL } from '../config/contansts';
import { useNavigate } from 'react-router-dom';


const Join = () => {

    const navigate = useNavigate();

    //우편번호 관리하기
    const onAddData = (data)=>{
        setFormData({
            ...formData,
            add1 : data.address
        })
    }

    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    //팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true);
    }
    // 팝업창 다시 닫기
    const closePostCode = () => {
        setIsPopupOpen(false);
    }

    //아이디 관리
    const [idData, setIdData] = useState({
        id:""
    })

    //아이디 인풋 onchange
    const onChangeId = (e)=>{
        setIdData({
            id:e.target.value
        })
    }

    //아이디 중복확인 함수
    function checkId(){
        //테이블에서 같은 아이디가 있는지 조회하고 같은 아이디가 없을때 formData에 담아주기!
        //같은 아이디가 있으면 alert("사용할 수 없는 아이디입니다") 후에 input 초기화
        axios.post(`${API_URL}/idcheck`,idData)
        .then(result=>{
            console.log(result.data)
            if(result.data.length===0 && idData.id !== ""){
                alert('사용가능한 아이디입니다.')
                setFormData({
                    id:idData.id
                })
                
            }else{
                alert('사용할 수 없는 아이디입니다.')
                setIdData({
                    id:""
                })
            }
        })
        .catch(e=>{
            console.log(e)
        })
    }


    //input으로 받은 데이터 관리하기
    const [formData, setFormData] = useState({
        id: "",
        pw:"",
        pwch:"",
        name: "",
        p1 : "",
        p2 : "",
        p3 : "",
        add1 : "",
        add2 : "",
        isPet:"",
        petName:""
    })

    const onChange=(e)=>{
        console.log(formData);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    //비밀번호 체크 상태관리
    const [password, setPassword] = useState({
            pwm:"",
            pwchm:""
    })

    useEffect(()=>{
        if( formData.pw  &&  formData.pwch){
            if(formData.pw !== formData.pwch){
                setPassword({
                    ...password,
                    pwchm:"비밀번호가 일치하지 않습니다."
                })
                setFormData({
                    ...formData,
                    pwch:""
                })
            }
            else{
                setPassword({
                    ...password,
                    pwchm:"사용할 수 있는 비밀번호입니다."
                })
            }
        }
        
    },[formData.pwch])
    

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        // 서버랑 연결해주기 -> 서버 post맨 테스트까지 완료
        //formData의 값들이 빈값이 아닐때만 전송해주기~!
        if(formData.id !=="" 
            && formData.pw !=="" 
            && formData.pwch !== "" 
            && formData.name !== ""
            && formData.p1 !== ""
            && formData.p2 !== ""
            && formData.p3 !== ""
            && formData.add1 !== ""
            && formData.add2 !== ""
            && formData.isPet !== "" ){
            axios.post(`${API_URL}/join`,formData)
            .then(result=>{
                    console.log(result)
                    console.log(formData);
                    alert("회원가입되었습니다. 로그인 창으로 이동합니다.")
                    navigate('/login')
                })
            .catch(e=>{
                    console.log(e)
                })
        }else{
            if(formData.id === ""){
                alert('아이디를 입력하지 않았거나 아이디 중복확인이 되지 않았습니다.')
            } if(formData.pw === ""){
                alert('비밀번호를 입력해주세요')
            } if(formData.pwch === ""){
                alert('비밀번호 확인을 입력해주세요')
            } if(formData.name === ""){
                alert('이름을 입력해주세요')
            } if(formData.p1==="" || formData.p2==="" || formData.p3===""){
                alert('연락처를 입력해주세요')
            } if(formData.add1 === "" || formData.add2===""){
                alert('주소를 입력해주세요')
            } if(formData.isPet === ""){
                alert('반려견 여부를 체크해주세요')
            }
        }
        
    }

    //비밀번호 체크 무한루프 생김,useEffect 사용해서-> 다시 확인할것🔔
    

    return (
        <div id="join">
            <h2>회원가입</h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <input onChange={onChangeId} name="id" autocomplete="off"/>
                            <div id="idCheck" onClick={checkId}>중복조회</div>
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <input onChange={onChange} name="pw" type='password' autocomplete="off"/>
                            <span id="pwm">{password.pwm}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호 확인</th>
                        <td>
                            <input onChange={onChange} name="pwch" type='password' autocomplete="off"/>
                            <span id="pwchm">{password.pwchm}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>
                            <input onChange={onChange} name="name" autocomplete="off"/>
                        </td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td>
                            <input onChange={onChange} name="p1" className='phone' autocomplete="off"/>
                            -<input onChange={onChange} name="p2" className='phone' autocomplete="off"/>
                            -<input onChange={onChange} name="p3" className='phone' autocomplete="off"/>
                        </td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>
                        <input placeholder='주소' name="add1" value={formData.add1} onChange={onChange} autocomplete="off"/>
                                    <div id="idCheck" className='add_btn' type='button' onClick={openPostCode} >우편번호검색</div>
                                    <div id='popupDom'>
                                        {
                                            isPopupOpen && (
                                                <PopupDom>
                                                    <PopupPostCode
                                                    onClose={closePostCode}
                                                    onAddData={onAddData}
                                                    >
                                                    </PopupPostCode>
                                                </PopupDom>
                                            )
                                        }
                                    </div>
                                    <input placeholder='상세주소' className="add2" name="add2" onChange={onChange} autocomplete="off"/>
                        </td>
                    </tr>
                    <tr>
                        <th>반려견 여부</th>
                        <td>
                            <input type="radio" name='isPet' value="true" onClick={onChange} className='isPet'/><span>네</span>
                            <input type="radio" name='isPet' value="false" onClick={onChange} className='isPet'/><span>아니오</span>
                        </td>
                    </tr>
                    <tr>
                        <th>반려견 이름</th>
                        <td>
                            <input onChange={onChange} name="petName" autocomplete="off"></input>
                        </td>
                       
                    </tr>
                    <tr>
                        <td colSpan={2} id="btns">
                            <button type="submit">가입하기</button>
                            <button type="reset">취소</button>
                        </td>
                    </tr>
                </table>
                <img src='/img/joindog.png' alt=""/>
            </form>
        </div>
    );
};

export default Join;