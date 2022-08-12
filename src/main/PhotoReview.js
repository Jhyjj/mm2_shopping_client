import React, { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoReview } from '../modules/review';
import { API_URL } from '../config/contansts';
import { Link } from 'react-router-dom';


const PhotoReview = () => {
    const {loading, data, error} = useSelector(state=>state.printReview.review);
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getPhotoReview())
        },[dispatch])


        if(loading) return <div>로~딩~중</div>
        if(error) return <div>에러발생</div>
        if(!data) return <div>데이터가 없음</div>
    return (
        <section id="photo-review">
                        <h2>포토리뷰📷</h2>
                        <p>댕댕이들의 생생한 리뷰를 만나보세요💕</p>
                        <ul>
                            {data.map(photo=>(
                                
                                <li>
                                <Link to={`/review/${photo.no}`} state={photo}>
                                {photo.img.indexOf(',') === -1 ?
                                 <img src={`${API_URL}/upload/${photo.img}`} alt=''/> :
                                 <img src={`${API_URL}/upload/${photo.img.substr(0,photo.img.indexOf(','))}`} alt=''/>  }
                                <div className='review_tbox'>
                                    <h3>{photo.title}</h3>
                                    <p>{photo.desc.substr(0,20)}</p>
                                </div>

                                </Link>
                                
                            </li>


                            ))}
                            
                        </ul>
                    </section>
    );
};

export default PhotoReview;