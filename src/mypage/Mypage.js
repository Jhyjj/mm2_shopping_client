import React, { useEffect, useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { getCookie } from '../util/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../modules/order';
import Myorder from './Myorder';
import Myreview from './Myreview';

const Mypage = () => {

    const id = getCookie('id');
    const [popup, setPopup] = useState(false);

    function onClick(){
        setPopup(!popup);
    }

    return (
        <div id="mypage">
            <h2>마이페이지</h2>
            <Myorder id={id}/>
            <Myreview id={id}/>
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