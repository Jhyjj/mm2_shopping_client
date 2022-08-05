import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../modules/logincheck';
import { getCookie, removeCookie } from '../util/cookie';


const Header = () => {
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
        
    }
    useEffect(()=>{},[isLogin])

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
                    
                    
                    
                    <li><Link to="/cart">장바구니</Link></li>
                    <li><Link to="/mypage">마이페이지</Link></li>
                </ul>
                <div>
                    <input id="search" type="text"/><span>🔎</span>
                </div>
                
            </nav>
            <nav className="product menu">
                <ul>
                    <li>
                        <div>BEST</div>
                        <ul>
                            <li><Link to="/weeklybest">주간BEST</Link></li>
                            <li><Link to="/reviewBest">리뷰BEST</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div>SIZE</div>
                        <ul>
                            <li>대형견</li>
                            <li>중형견</li>
                            <li>소형견</li>
                        </ul>
                    </li>
                    <li>
                        <div>유형별</div>
                        <ul>
                            <li>노즈워크</li>
                            <li>인형</li>
                            <li>공</li>
                            <li>이갈이용</li>
                        </ul>
                    </li>
                    <li>
                        <div>메뉴4</div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="pull" onClick={onClick}></div>
            
        </div>
    );
};

export default Header;