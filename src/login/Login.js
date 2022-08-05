import React,{useState} from 'react';
import './style.css';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { API_URL } from '../config/contansts';
import axios from 'axios';
import { setCookie } from '../util/cookie';
import { setLogin } from '../modules/logincheck';


const Login = () => {

    const navigate = useNavigate();

    document.querySelector('.product').style.display = "none";

    const dispatch = useDispatch();
    const [loginData, setLoingData] = useState({
        userId:"",
        userPass:""
    })

    const onChange = (e)=>{
        const {name, value} = e.target;
        setLoingData({
            ...loginData,
            [name]:value
        })
        console.log(loginData)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(loginData.userId === "" || loginData.userPass === ""){
            alert('아이디와 비밀번호를 입력해주세요');
        }else{
            axios.post(`${API_URL}/login`, loginData)
            .then(result=>{
                let {id,name,petname} = result.data;
                console.log(result.data);
                if(id !==null && id !=='' && id !==undefined){
                    alert('로그인되었습니다.');
                    let expires = new Date();
                    expires.setMinutes(expires.getMinutes()+60)
                    navigate('/');
                    setCookie('id',`${id}`,{path:'/',expires});
                    if(petname){
                        setCookie('name',`${petname}보호자`,{path:'/',expires});
                    }else{
                        setCookie('name',`${name}`,{path:'/',expires}); 
                    }
                    dispatch(setLogin());
                }

            })
            .catch(e=>{
                alert('아이디와 비밀번호를 확인해주세요')
            })
            
        }
    }
    

    return (
        <div id='login'>
            
            <form onSubmit={onSubmit}>
                <h2>로그인</h2>
                <table>
                    <tr>
                        <th>아이디</th>
                        <td><input type="text" name="userId" onChange={onChange}/></td>
                        <td rowSpan={2}><button type="submit" >로그인</button></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td><input type="password" name="userPass" onChange={onChange}/></td>
                    </tr>
                </table>
                <p>비밀번호를 잊으셨나요?   <span>비밀번호찾기</span></p>
                <p>아직 회원이 아니신가요?  <span><Link to="/join">회원가입</Link></span></p>
                <img src="/img/dogs.png" alt=''/>
            </form>
        </div>
    );
};

export default Login;