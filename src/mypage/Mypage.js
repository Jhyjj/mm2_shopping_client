import React, { useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Mypage = () => {

    const [popup, setPopup] = useState(false);

    function onClick(){
        setPopup(!popup);
    }

    return (
        <div id="mypage">
            <h2>마이페이지</h2>
            <div id="myorder">
                <h3>🐾주문내역</h3>
                <table>
                    <tr>
                        <th>주문번호</th>
                        <th>주문내역</th>
                        <th>금액</th>
                        <th>주문상태</th>
                        <th>리뷰</th>
                    </tr>
                    <tr>
                        <td>287</td>
                        <td>칼리 라텍스 삑삑이공 외</td>
                        <td>6,000</td>
                        <td>배송중</td>
                        <td><Link to="/writeReview"><span>리뷰작성하기</span></Link></td>
                    </tr>
                </table>
            </div>
            <div id="myreview">
                <h3>🐾작성리뷰</h3>
                <table>
                    <tr>
                        <th>NO</th>
                        <th>상품명</th>
                        <th>제목</th>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>칼리 라텍스 삑삑이공</td>
                        <td>아주 환장하게 좋아하네요</td>
                    </tr>
                </table>
            </div>
            <div id="myfnq">
                <h3>🐾1:1 문의</h3>
                <table>
                    <tr>
                        <th>NO</th>
                        <th>제목</th>
                        <th>처리여부</th>
                    </tr>
                    <tr>
                        <td>72</td>
                        <td className='title' onClick={onClick}>어제 주문건은 언제 도착하나요?</td>
                        <td><span>답변완료</span></td>
                    </tr>
                    <tr className={popup? "on" : ""} id="popup">
                        <td colSpan={3} >
                            안녕하세요. 신세개백화점 1:1문의 담당자 박멍멍입니다. <br/>
                            문의하신 주문번호 287번은 현재 택배사로 접수되어 영업일 기준 1~3일 정도 소요될 예정입니다.<br/>
                            정확한 배송정보는 송장번호 조회 요청드립니다. 감사합니다.
                        </td>
                    </tr>

                </table>
            </div>    
        </div>
    );
};

export default Mypage;