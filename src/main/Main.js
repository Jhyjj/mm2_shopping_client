import React, { useEffect, useRef } from 'react';
import './style.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NewAr from './NewAr';
import PhotoReview from './PhotoReview';

SwiperCore.use([Autoplay,Navigation,Pagination])

const Main = () => {
    
    return (
        <div id="main">
            {/* 백그라운드 영역 */}
            <div className='main_back'>
                <div className='mb1'></div>
                <div className='mb2'></div>
                <div className='mb3'></div>
                <div className='mb4'></div>
            </div>
            {/* 메인비쥬얼(메인제품 광고) 슬라이드 배너 4개*/}
            <div id="contents">
                    <section id="visual">
                        {/* 리뷰이벤트 광고, 배송, 메인제품 이벤트,  */}
                        <Swiper
                        spaceBetween={50} //슬라이드 여백
                        slidesPerView={1} //한 슬라이드에서 보여줄 갯수
                        speed={1500} //슬라이드 속도
                        scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
                        // navigation={true} //버튼
                        pagination={{ clickable: true }}
                        autoplay={{delay: 5000}} //5초마다 자동으로 넘기기
                        loop={true}>
                            <SwiperSlide><img src='/img/review.png' alt=''></img></SwiperSlide>
                            <SwiperSlide><img src='/img/delivery.jpg' alt=''></img></SwiperSlide>
                            <SwiperSlide><img src='/img/joinevent.jpg' alt=''></img></SwiperSlide>
                            <SwiperSlide><img src='/img/review.png' alt=''></img></SwiperSlide>
                        </Swiper>
                        
                    </section>
                    <NewAr/>
                    <PhotoReview/>
            </div>
        </div>
    );
};

export default Main;