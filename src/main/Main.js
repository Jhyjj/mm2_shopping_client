import React from 'react';
import './style.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay,Navigation,Pagination])

const Main = () => {
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= 200){
            document.querySelector('.mb1').style.position='fixed';
            document.querySelector('.mb2').style.position='fixed';
            document.querySelector('.mb3').style.position='fixed';
            document.querySelector('.mb4').style.position='fixed';
            document.querySelector('.mb4').style.top='30%';
        }
        if(window.scrollY < 200){
            document.querySelector('.mb1').style.position='absolute';
            document.querySelector('.mb2').style.position='absolute';
            document.querySelector('.mb3').style.position='absolute';
            document.querySelector('.mb4').style.position='absolute';
            document.querySelector('.mb4').style.top='20%';
        }
    })
    
    return (
        <div id="main">
            {/* 백그라운드 영역 */}
                <div className='main_back mb1'></div>
                <div className='main_back mb2'></div>
                <div className='main_back mb3'></div>
                <div className='main_back mb4'></div>
            {/* 메인비쥬얼(메인제품 광고) 슬라이드 배너 4개*/}
                    <div id="contents">
                    <section id="visual">
                        {/* 리뷰이벤트 광고, 배송, 메인제품 이벤트,  */}
                        <Swiper
                        spaceBetween={50} //슬라이드 여백
                        slidesPerView={1} //한 슬라이드에서 보여줄 갯수
                        speed={1500} //슬라이드 속도
                        scrollbar={{ draggable: true }} //슬라이드를 드래그해서 넘길 수 있게 하기
                        navigation={true} //버튼
                        pagination={{ clickable: true }}
                        autoplay={{delay: 5000}} //5초마다 자동으로 넘기기
                        loop={true}>
                            <SwiperSlide><img src='/img/review.png' alt=''></img></SwiperSlide>
                            <SwiperSlide><img src='/img/delivery.jpg' alt=''></img></SwiperSlide>
                            <SwiperSlide><img src='/img/review.png' alt=''></img></SwiperSlide>
                            <SwiperSlide><img src='/img/review.png' alt=''></img></SwiperSlide>
                        </Swiper>
                        
                    </section>

                    {/* 신상품 */}
                    <section id="newAr">
                        <h2>금주의 신상품✨</h2>
                        <p>MD가 엄선한 금주의 신상품을 만나보세요💕</p>
                        <ul>
                            <li>
                                <img src='/img/ball1.jpg' alt=''></img>
                                <div className='product_tbox'>
                                    <h3>상품명</h3>
                                    <span>상품금액</span>
                                    <div className='likebtn'>장바구니 담기</div>
                                </div>
                            </li>
                            <li>
                                <img src='/img/ball1.jpg' alt=''></img>
                                <div className='product_tbox'>
                                    <h3>상품명</h3>
                                    <span>상품금액</span>
                                    <div className='likebtn'>장바구니 담기</div>
                                </div>
                            </li>
                            <li>
                                <img src='/img/ball1.jpg' alt=''></img>
                                <div className='product_tbox'>
                                    <h3>상품명</h3>
                                    <span>상품금액</span>
                                    <div className='likebtn'>장바구니 담기</div>
                                </div>
                            </li>
                            <li>
                                <img src='/img/ball1.jpg' alt=''></img>
                                <div className='product_tbox'>
                                    <h3>상품명</h3>
                                    <span>상품금액</span>
                                    <div className='likebtn'>장바구니 담기</div>
                                </div>
                            </li>
                        </ul>

                    </section>

                    {/* 포토리뷰 */}
                    <section id="photo-review">
                        <h2>포토리뷰📷</h2>
                        <p>댕댕이들의 생생한 리뷰를 만나보세요💕</p>
                        <ul>
                            <li>
                                <img src='/img/mori.jpg' alt=''></img>
                                <div className='review_tbox'>
                                    <h3>리뷰제목</h3>
                                    <p>모리 진짜 너무 귀엽구요 귀엽구요 귀여워요 사랑스럽구요 자랑하고싶네요</p>
                                </div>
                            </li>
                            <li>
                                <img src='/img/mori.jpg' alt=''></img>
                                <div className='review_tbox'>
                                    <h3>리뷰제목</h3>
                                    <p>리뷰내용입니다.</p>
                                </div>
                            </li>
                            <li>
                                <img src='/img/mori.jpg' alt=''></img>
                                <div className='review_tbox'>
                                    <h3>리뷰제목</h3>
                                    <p>리뷰내용입니다.</p>
                                </div>
                            </li>
                            <li>
                                <img src='/img/mori.jpg' alt=''></img>
                                <div className='review_tbox'>
                                    <h3>리뷰제목</h3>
                                    <p>리뷰내용입니다.</p>
                                </div>
                            </li>
                            <li>
                                <img src='/img/mori.jpg' alt=''></img>
                                <div className='review_tbox'>
                                    <h3>리뷰제목</h3>
                                    <p>리뷰내용입니다.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
        </div>
    );
};

export default Main;