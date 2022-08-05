import './style.css';
import React from 'react';

const Cart = () => {
    
    return (
        <div id="cart">
            <h2>장바구니</h2>
            <p>장바구니 내역을 확인해주세요</p>
            <div id="cartList">
                <div>
                    <input type="checkbox"></input>
                    <span>전체 상품 담기</span>
                    <span>선택삭제</span>
                </div>
                <ul>
                    <li>
                        <input type="checkbox"></input>
                        <div id="imgbox">
                            <img src="/img/ball1.jpg" alt=""/>
                        </div>
                        <div id="textbox">
                            <h4>칼리 라텍스 삑삑이 공</h4>
                            <p>노랑색 소형</p>
                        </div>
                        <input type="number" defaultValue={1}/>
                        <p>3,000</p>
                        <p>3,000</p>
                        
                    </li>
                    <li>
                        <input type="checkbox"></input>
                        <div id="imgbox">
                            <img src="/img/ball1.jpg" alt=""/>
                        </div>
                        <div id="textbox">
                            <h4>칼리 라텍스 삑삑이 공</h4>
                            <p>노랑색 소형</p>
                        </div>
                        <input type="number" defaultValue={1}/>
                        <p>3,000</p>
                        <p>3,000</p>
                        
                    </li>
                </ul>
            </div>

            <div id="total">
                <h3>Total</h3>
                <form>
                    <table>
                        <tr>
                            <th>총 상품금액</th>
                            <th rowSpan={2}>+</th>
                            <th>배송비</th>
                            <th rowSpan={2}>=</th>
                            <th>결제예정 금액</th>
                        </tr>
                        <tr>
                            <td>3,000</td>
                            <td>2,500</td>
                            <td>5,500</td>
                        </tr>
                        <tr><td colSpan={5}><button type="submit">주문하기</button></td></tr>
                    </table>
                </form>
            </div>
            
        </div>
    );
};

export default Cart;