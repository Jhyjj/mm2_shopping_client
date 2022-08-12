import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReview } from '../modules/order';

const Myreview = ({id}) => {
    const {data,error,loading} = useSelector(state=>state.printMypage.review);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getReview(id))
    },[dispatch,id])

    if(loading) return <div>로딩중</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 없음</div>

    console.log(data)
    return (
        <div id="myreview">
            <h3>🐾작성리뷰</h3>
            <table>
                <tr>
                    <th>NO</th>
                    <th>상품명</th>
                    <th>제목</th>
                </tr>
                {data.length===0 &&
                        <tr>
                            <td colSpan={5}>아직 작성된 리뷰가 없습니다.</td>
                        </tr>
                    }
                {data.map(review=>(
                    <tr>
                        <td>{review.no}</td>
                        <td><Link to={`/review/${review.no}`} state={review}>{review.p_name}</Link></td>
                        <td>{review.title}</td>
                    </tr>
                ))}
                
            </table>
        </div>
    );
};

export default Myreview;