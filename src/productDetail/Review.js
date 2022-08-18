import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../config/contansts';
import { useDispatch, useSelector } from 'react-redux';
import { getProductReview } from '../modules/order';
import ReviewTr from './ReviewTr';


const Review = ({product}) => {

    const {data,loading,error} = useSelector(state=>state.printMypage.review)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductReview(product))
    },[dispatch,product])

    const [open, setOpen] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const onClick = (e)=>{
        console.log(e.target.className)
        if(open===Number(e.target.className)){
            console.log('이미 같은 번호가 선택됨. 닫기~')
            setOpen(null)
            console.log(open)
        }else{
            setOpen(Number(e.target.className))
        }
    }

    useEffect(()=>{
        setIsOpen(open)
    },[open])

    console.log(isOpen)
    

    if(loading) return <div>로딩중</div>
    if(error) return <div>에러</div>
    if(!data) return <div>데이터가 없음</div>
    
    return (
        <div id="pro_review">
            
                    <table>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                        {data.length===0 && <tr><td colSpan={4}>아직 작성된 리뷰가 없습니다.</td></tr>}
                        {data.map((review,index)=>(
                            <>
                                <tr>
                                    <td>{index+1}</td>
                                    <td className={review.no} onClick={onClick}>{review.title}</td>
                                    <td>{review.userId}</td>
                                    <td>{review.date.substr(0,10)}</td>
                                </tr>
                                {review.no===isOpen && <ReviewTr review={review}/>}
                            </>
                        ))}
                        
                    </table>
                        
        </div>
    );
};

export default Review;