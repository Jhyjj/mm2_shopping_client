import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from '../util/cookie';

const Footer = () => {
    const id = getCookie("id");
    console.log(id);

    const navigate = useNavigate();
    const isLogin = useSelector(state=>state.loginCheck.isLogin);

    function LoginCheck(){
        if(!isLogin){
            alert('로그인 후 이용가능합니다.')
            navigate('/login')
        }
    }

    return (
        <div id="footer">
            <div className='f_bg fb1'></div>
            <div className='f_bg fb2'></div>
            <div className='f_bg fb3'></div>
            <img className='f_bg img1' src='/img/swim.png' alt=''/>
            <img className='f_bg img2' src='/img/swim2.png' alt=''/>
            <div className='f_text'>
                <h2>신세개백화점</h2>
                <ul>
                    <li>고객센터
                        <p>052-000-0000</p>
                        <p>상담시간 : 월~금 / 09~18시</p>
                        <p>휴일 및 공휴일 휴무</p>
                    </li>
                    
                    <li><Link to='/notice'>공지사항</Link></li>
                    <li><Link to='/fnq'>자주묻는질문</Link></li>
                    {id==="admin" && <li><Link to='/adminPersonalQ'>1:1 문의 처리</Link></li>}
                    {id !== "admin" && <li onClick={LoginCheck}><Link to='/personalQ'>1:1 문의</Link></li>}
                    
                </ul>
                <div id="copyright">
                    <p>(주)신세개백화점</p>
                    <p>울산광역시 남구 삼산동 멍멍이길 267</p>
                    <p>대표자: 정멍멍  |  사업자등록번호 : 123-12-12345  |  통신판매업신고 : 2022-서울강남-99999</p>
                    <p>개인정보책임관리자 : 정왕왕  |  유선전화  : 052-000-0000  |  E-mail : jhyj3768@gmail.com</p>
                    <p>개인정보처리방침  |  이용약관</p>
                    <p>copyrightⓒ신세개백화점. All rights reserved.</p>
                </div>
                <div>
                    <ul>
                       <li><a href='/'>인스타그램</a> | <a href='https://youtube.com/channel/UCJkkFBsRFG0ILdC9EwSA3hA' target="_blank">유투브</a> | <a href="https://blog.naver.com/glhd" target="_blank">블로그</a></li>
                       <li>SITEMAP
                            <select>
                                <option>SITEMAP</option>
                                <option>유기견보호센터</option>
                                <option>진돗개 홍보사이트</option>
                            </select>
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;