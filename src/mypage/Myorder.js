import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getOrders } from '../modules/order';

const Myorder = ({id}) => {
    console.log(id)
    const {data,loading,error} = useSelector(state=>state.printMypage.order)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOrders(id))
    },[dispatch,id])

    console.log(data)
    if(loading) return <div>로딩중</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 없음</div>

    return (
        
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
                    {data.length===0 &&
                        <tr>
                            <td colSpan={5}>아직 주문내역이 없습니다.</td>
                        </tr>
                    }
                    {data.map(order=>(
                        <tr>
                        <td>{order.order_no}</td>
                        <td>{order.p_name}</td>
                        <td>{order.order_price}</td>
                        <td>배송완료</td>
                        <td><Link to="/writeReview" state={order} ><span>리뷰작성하기</span></Link></td>
                    </tr>
                    ))}
                    
                </table>
            </div>
    );
};

export default Myorder;