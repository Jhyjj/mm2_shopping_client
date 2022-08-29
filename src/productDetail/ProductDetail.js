import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import { getProduct } from '../modules/products';
import Productinfo from './Productinfo';
import Review from './Review';
import './style.css';
import axios from 'axios';
import { getCookie } from '../util/cookie';

const ProductDetail = () => {

    const id = getCookie('id');
    const isLogin = useSelector(state=>state.loginCheck.isLogin);
    console.log(isLogin)

    const navigate = useNavigate()
    const {no} = useParams();
    const {data,loading,error} = useSelector(state=>state.printProduct.product)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProduct(no))
    },[dispatch,no])


   

    //상품상세정보창 또는 리뷰창 띄우기
    const [content, setContent] = useState({
        info:true,
        review:false
    });

    const onClick = (e)=>{
        const name = e.target.className;
        console.log(name);
        console.log(content);
        if(name !== 'info'){
            document.querySelector('.pro_review').style.background="rgb(176, 214, 230)";
            document.querySelector('.info').style.background="none";
            setContent({
                info:false,
                review:true
            })
        }else{
            document.querySelector('.pro_review').style.background="none";
            document.querySelector('.info').style.background="rgb(176, 214, 230)";
            setContent({
                info:true,
                review:false
            })
        }
    }

    // 옵션 추가하기 //옵션 객체의 초기값
    const [opt, setOpt] = useState({
        p_name: "",
        optname:"",
        qty:1,
        price:"",
        img:"",
        price2:""
    })

    //추가한 옵션을 넣을 배열
    const [optArr, setOptArr] = useState([]); //처음엔 빈 배열

    let tprice;

    //옵션 객체를 추가하는 onChange 함수 -> select에 걸기 
    const onChange = (e)=>{
        const {name, value} = e.target;
        tprice = value.indexOf('+')!==-1? Number(value.substr(value.indexOf('+')+1, 4))+data.p_price : data.p_price
        console.log(name,value);
        setOpt({
            ...opt,
            p_name:data.p_name,
            optname:value,
            price:tprice,
            price2:tprice*opt.qty,
            img:data.p_img
        })
    }

    useEffect(()=>{
        if(opt.optname !== ''&& optArr.indexOf(opts=>opts.optname === opt.optname) ===-1){
           console.log('중복된 옵션명 없음.')
           setOptArr([...optArr, opt])
        }
   },[opt])

   //선택한 옵션의 숫자를 변경
   const onChange2 = (e)=>{
    const {name, value} = e.target;
    console.log(name,value);
    const findIndex = optArr.findIndex(su=>su.optname===name);
    let copyArr = [...optArr];
    if(findIndex!==-1){
        copyArr[findIndex] = {...copyArr[findIndex], qty:Number(value), price2:Number(value)*optArr[findIndex].price}
    }
    setOptArr([...copyArr]);
   }
   console.log(optArr);

   //선택한 상품의 전체 금액
   const totalPrice = optArr.reduce(function(init,opt){
    return init+opt.price2
    },0)

    //선택한 옵션 삭제하기
    const onDelete = (e)=>{
        const deleteIndex =  optArr.findIndex(su=>su.optname===e.target.className);
        let copyArr2 = [...optArr];
        if(deleteIndex!==-1){
            copyArr2.splice(deleteIndex,1);
            console.log(copyArr2);
        }
        setOptArr([...copyArr2]);
    }


    const onSubmit= (e)=>{
        e.preventDefault();
        if(!isLogin){
            alert('로그인 후 이용가능합니다. 로그인창으로 이동합니다.')
            navigate('/login')
        }else{
            axios.post(`${API_URL}/cart/${id}`,optArr)
            alert('장바구니에 담겼습니다.')
            navigate('/cart')
        }
        
    }

    if(loading) return <div>로딩중</div>
    if(error) return <div>에러발생..</div>
    if(!data) return <div>데이터를 받지 못함</div>

    const option = data.p_option.split(',');
    
    return (
        <div id="detail">
            
            {/* 상단 */}
            <div id="detail_top">
                <div id="d_img">
                    <img src={`${API_URL}/upload/${data.p_img}`} alt=""/>
                </div>
                <div id="d_text">
                    <form onSubmit={onSubmit}>
                        <table>
                            <tr>
                                <td colSpan={2}>
                                    <h2>{data.p_name}</h2>
                                    <p>{data.p_intro}</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <h3>{data.p_price} 원</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>판매단위 : </td>
                                <td> 1개 </td>
                            </tr>
                            <tr>
                                <td>상품선택 : </td>
                                <td>
                                <select name="optname" onChange={onChange}>
                                    <option> --------- </option>
                                   {option.map(option=>(
                                    <option value={option}>{option}</option>
                                   ))}
                                </select>
                                </td>
                            </tr>

                            {optArr.map(opts=>(
                                    <tr className='optiontr'>
                                    <td colSpan={2}>
                                        <div>
                                            <p>{opts.optname} <input type="number" name={opts.optname} defaultValue={1} onChange={onChange2} min={1}/></p>
                                            <span>{opts.price2} </span>
                                        </div>
                                        <span className={opts.optname} onClick={onDelete}>X</span>
                                    </td>
                                    </tr>
                            ))}

                           
                            <tr>
                                <td>총 상품금액 : </td>
                                <td>{totalPrice} 원</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="submit">장바구니 담기</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
            {/* 하단 */}
            <div id="detail_bottom">
                <ul>
                    <li className='info' onClick={onClick}>제품 상세보기</li>
                    <li className='pro_review' onClick={onClick}>상품후기</li>
                </ul>
                <div>
                        {content.info && <Productinfo data={data.p_detail}/>}
                        {content.info || <Review product={data.p_name}/>}
                </div>
            </div>
        </div>
    );
};


export default ProductDetail;