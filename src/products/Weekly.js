import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Weekly = () => {
    const addCart = ()=>{
        alert('장바구니에 담겼습니다.')
    }
    return (
        <div id="weekly" className='products'>
            <h2>주간 베스트</h2>
            <p>한주동안 가장 많은 사랑을 받은 제품을 만나보세요💕</p>
            <ul>
                    <li>
                        <Link to='/detail'>
                        <img src='/img/crunch.jpg' alt=''/>
                        </Link>
                        <div className='product_tbox'>
                            <h4>칼리 크런치</h4>
                            <span>4,500</span>
                            <div className='likebtn' onClick={addCart}>장바구니 담기</div>
                        </div>
                    </li>
                
                    <li>
                        <Link to='/detail'>
                        <img src='/img/bigball.jpg' alt=''/>
                        </Link>
                        <div className='product_tbox'>
                            <h4>쥬쥬베 라텍스볼</h4>
                            <span>4,500</span>
                            <div className='likebtn'>장바구니 담기</div>
                        </div>
                    </li>
               
                    <li>
                        <Link to='/detail'>
                        <img src='/img/ball1.jpg' alt=''/>
                        </Link>
                        <div className='product_tbox'>
                            <h4>칼리 스위티 라텍스볼</h4>
                            <span>2,800</span>
                            <div className='likebtn'>장바구니 담기</div>
                        </div>
                    </li>
                
                    <li>
                        <Link to='/detail'>
                        <img src='/img/ball1.jpg' alt=''/>
                        </Link>
                        <div className='product_tbox'>
                            <h4>칼리 스위티 라텍스볼</h4>
                            <span>2,800</span>
                            <div className='likebtn'>장바구니 담기</div>
                        </div>
                    </li>
               
            </ul>
        </div>
    );
};

export default Weekly;