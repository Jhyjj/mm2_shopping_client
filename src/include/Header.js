import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../modules/logincheck';
import { getCookie, removeCookie } from '../util/cookie';


const Header = () => {


    const navigate = useNavigate();
    window.addEventListener('scroll',()=>{
        console.log(window.scrollY)
        if(window.scrollY !== 0){
            document.querySelector('.product').style.transform = 'translateY(-50%)'
            document.querySelector('.product').style.opacity = 0
            document.querySelector('#pull').style.transform = 'translateY(0)'
            document.querySelector('#pull').style.opacity = 1
        }
        if(window.scrollY === 0){
            document.querySelector('.product').style.transform = 'translateY(0)'
            document.querySelector('.product').style.opacity = 1
            document.querySelector('#pull').style.transform = 'translateY(100%)'
            document.querySelector('#pull').style.opacity = 0
        }
    })

    //pull onclick 이벤트
    function onClick(){
        document.querySelector('.product').style.display = 'block'
        document.querySelector('.product').style.transform = 'translateY(0)'
        document.querySelector('.product').style.opacity = 1
        document.querySelector('#pull').style.opacity = 0
        document.querySelector('#pull').style.transform = 'translateY(100%)'
    }

    // 쿠키
    const username = getCookie('name');
    const id = getCookie('id');
    console.log(username)
    const isLogin = useSelector(state=>state.loginCheck.isLogin);
    const dispatch = useDispatch();
    const logoutClick = ()=>{
        alert('로그아웃 되었습니다.')
        removeCookie('id');
        removeCookie('name');
        dispatch(setLogout());
        navigate('/');
        
    }
    useEffect(()=>{},[isLogin])

    function LoginCheck(){
        if(!isLogin){
            alert('로그인 후 이용가능합니다.')
            navigate('/login')
        }
    }

    const [input, setInput] = useState()

    function onChange(e){
        setInput(e.target.value)
    }

    function onClickSearch(){
        console.log(input)
        navigate(`/products/${input}`)
        setInput("")
    }

    return (
        
        <div id="header">
            <Link to="/"><h1>신세개백화점</h1></Link>
            {/* 로그인 외 personal 메뉴창 */}
            <nav className="personal menu">
                <ul>
                    {isLogin && <>
                        <li>{username}님 환영합니다🎉</li>
                        <li onClick={logoutClick}>로그아웃</li>
                        {id==='admin' && <li><Link to="/createProduct">상품등록하기</Link></li>}
                    </>}
                    {!isLogin && <>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                    </>}

                    <li onClick={LoginCheck}><Link to="/cart">장바구니</Link></li>
                    <li onClick={LoginCheck}><Link to="/mypage">마이페이지</Link></li>
                    
                </ul>
                <div>
                    <input id="search" type="text" onChange={onChange} value={input}/><span onClick={onClickSearch}>🔎</span>
                </div>
                
            </nav>
            <nav className="product menu">
                <ul>
                    <li>
                        <div>BEST</div>
                        <ul>
                            <li><Link to="/products/weeklybest">주간BEST</Link></li>
                            <li><Link to="/products/reviewbest">리뷰BEST</Link></li>
                            <li><Link to="/products/new">신제품</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div>SIZE</div>
                        <ul>
                            <li><Link to="/products/대형견">대형견</Link></li>
                            <li><Link to="/products/중형견">중형견</Link></li>
                            <li><Link to="/products/소형견">소형견</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div>유형별</div>
                        <ul>
                            <li><Link to="/products/노즈워크">노즈워크</Link></li>
                            <li><Link to="/products/인형">인형</Link></li>
                            <li><Link to="/products/공">공</Link></li>
                            <li><Link to="/products/이갈이">이갈이</Link></li>
                            <li><Link to="/products/터그놀이">터그놀이</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div>소재별</div>
                        <ul>
                            <li><Link to="/products/패브릭">패브릭</Link></li>
                            <li><Link to="/products/라텍스">라텍스</Link></li>
                            <li><Link to="/products/나무">나무</Link></li>
                            <li><Link to="/products/플라스틱">플라스틱</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="pull" onClick={onClick}></div>
            
        </div>
    );
};

export default Header;