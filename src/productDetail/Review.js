import axios from 'axios';
import React, { useEffect } from 'react';
import { API_URL } from '../config/contansts';
import { useDispatch, useSelector } from 'react-redux';
import { getProductReview } from '../modules/order';


const Review = ({product}) => {

    const {data,loading,error} = useSelector(state=>state.printMypage.review)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductReview(product))
    },[dispatch,product])

    console.log(product)
    console.log(data)

    if(loading) return <div>로딩중</div>
    if(error) return <div>에러</div>
    if(!data) return <div>데이터가 없음</div>
    
    return (
        <div id="pro_review">
            
                    <table>
                        <tr>
                            <th>NO</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                        {data.map(review=>(
                            <>
                                <tr>
                                    <td>{review.no}</td>
                                    <td>{review.title}</td>
                                    <td>{review.userId}</td>
                                    <td>{review.date.substr(0,10)}</td>
                                </tr>
                                <tr className='hidden'>
                                    <td colSpan={4}>{review.desc}</td>
                                </tr>
                            </>
                        ))}
                        
                    </table>
                        
        </div>
    );
};

export default Review;