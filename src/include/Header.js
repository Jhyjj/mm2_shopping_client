import React from 'react';

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

    return (
        
        <div id="header">
            <h1>신세개백화점</h1>
            {/* 로그인 외 personal 메뉴창 */}
            <nav className="personal menu">
                <ul>
                    <li>로그인</li> 
                    <li>로그아웃</li>
                    <li>회원가입</li>
                    <li>장바구니</li>
                    <li>마이페이지</li>
                </ul>
            </nav>
            <nav className="product menu">
                <ul>
                    <li>
                        <div>BEST</div>
                        <ul>
                            <li>주간BEST</li>
                            <li>리뷰BEST</li>
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