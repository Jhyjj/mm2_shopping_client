import React, { useState } from 'react';
import Productinfo from './Productinfo';
import Review from './Review';
import './style.css';

const ProductDetail = () => {

    //상품상세정보창 또는 리뷰창 띄우기
    const [content, setContent] = useState({
        info:true,
        review:false
    });

    const onClick = (e)=>{
        const name = e.target.className;
        console.log(name);
        console.log(content);
        if(name !== 'info'){
            document.querySelector('.pro_review').style.background="rgb(176, 214, 230)";
            document.querySelector('.info').style.background="none";
            setContent({
                info:false,
                review:true
            })
        }else{
            document.querySelector('.pro_review').style.background="none";
            document.querySelector('.info').style.background="rgb(176, 214, 230)";
            setContent({
                info:true,
                review:false
            })
        }
    }

    return (
        <div id="detail">
            
            {/* 상단 */}
            <div id="detail_top">
                <div id="d_img">
                    <img src="/img/bigball.jpg" alt=""/>
                </div>
                <div id="d_text">
                    <form>
                        <table>
                            <tr>
                                <td colSpan={2}>
                                    <h2>쥬쥬베 라텍스 스위티볼</h2>
                                    <p>리뷰 베스트 2위! 말랑말랑 라텍스에 삑삑이까지✨</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <h3>4,000 원</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>판매단위 : </td>
                                <td> 1개 </td>
                            </tr>
                            <tr>
                                <td>상품선택 : </td>
                                <td>
                                <select>
                                    <option>쥬쥬베 라텍스 스위티볼 소형 핑크</option>
                                    <option>쥬쥬베 라텍스 스위티볼 소형 블루</option>
                                    <option>쥬쥬베 라텍스 스위티볼 대형 핑크(+2,000)</option>
                                    <option>쥬쥬베 라텍스 스위티볼 대형 블루(+2,000)</option>
                                </select>
                                </td>
                            </tr>
                            <tr className='optiontr'>
                                <td colSpan={2}>
                                    <div>
                                        <p>쥬쥬베 라텍스 스위티볼 대형(+2000) <input type="number" defaultValue={1}/></p>
                                        <span>6,000 원</span>
                                    </div>
                                    <span>X</span>
                                </td>
                            </tr>
                            <tr>
                                <td>총 상품금액 : </td>
                                <td>6,000 원</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button>장바구니 담기</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
            {/* 하단 */}
            <div id="detail_bottom">
                <ul>
                    <li className='info' onClick={onClick}>제품 상세보기</li>
                    <li className='pro_review' onClick={onClick}>상품후기</li>
                </ul>
                <div>
                        {content.info && <Productinfo/>}
                        {content.info || <Review/>}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;