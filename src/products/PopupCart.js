import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../modules/products';


const PopupCart = ({cartdata}) => {
    console.log(cartdata)
    const {data,loading,error} = useSelector(state=>state.printProduct.product)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProduct(cartdata))
    },[dispatch,cartdata])

    if(loading) return <div>로딩중</div>
    if(error) return <div>에러</div>
    if(!data) return <div>데이터없음</div>

    return (
        <div id="popup_cart">
            <h2>{data.p_name}</h2>
        </div>
    );
};

export default PopupCart;