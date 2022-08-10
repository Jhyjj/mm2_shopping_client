import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import { getProducts } from '../modules/products';
import './style.css';

const Products = () => {
    const {keyword} = useParams();

   const {data, loading, error} = useSelector(state=>state.printProduct.products)
   const dispatch = useDispatch();
   useEffect(()=>{
        dispatch(getProducts(keyword))
   },[dispatch,keyword])
    
    const addCart = ()=>{
        alert('장바구니에 담겼습니다.')
    }

    if(loading) return <div>로딩중..</div>
    if(error) return <div>에러가 발생했습니다. 관리자에게 문의바랍니다.</div>
    if(!data) return <div>데이터를 받아오지 못함</div>
    return (
        <div id="weekly" className='products'>
            <h2>주간 베스트</h2>
            <p>한주동안 가장 많은 사랑을 받은 제품을 만나보세요💕</p>
            <ul>
                {data.map(data=>(
                    <li>
                        <Link to={`/detail/${data.no}`}>
                        <img src={`${API_URL}/upload/${data.p_img}`} alt=''/>
                        </Link>
                        <div className='product_tbox'>
                            <h4>{data.p_name}</h4>
                            <span>{data.p_price}</span>
                            <div className='likebtn' onClick={addCart}>장바구니 담기</div>
                        </div>
                    </li>
                ))}
                    
                
               
            </ul>
        </div>
    );
};

export default Products;