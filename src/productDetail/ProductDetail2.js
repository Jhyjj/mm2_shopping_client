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


    //선택옵션 관리
    const [opt, setOpt] = useState({
        p_name: "",
        optname:"",
        qty:1,
        price:"",
        img:"",
        isChecked:false
    })

    //선택한 옵션을 담을 배열 -> 배열을 돌면서 배열의 인덱스만큼 선택한 옵션tr 추가
    const [optArr, setOptArr] = useState([])

    let tprice;
    const onChange = (e)=>{
        const {name, value} = e.target;
        console.log(name,value)
        tprice = value.indexOf('+')!==-1? Number(value.substr(value.indexOf('+')+1, 4))+data.p_price : data.p_price
        console.log(tprice)
        setOpt({
            ...opt,
            p_name:data.p_name,
            optname:value,
            price: tprice,
            qty:1,
            price2:tprice*opt.qty,
            img:data.p_img
        })
        console.log(opt)
        }

    //숫자 선택하면 옵션의 숫자가 바뀌기~!
    const onChange2 = (e)=>{
        const {name, value} = e.target;
        tprice = name.indexOf('+')!==-1? Number(name.substr(name.indexOf('+')+1, 4))+data.p_price : data.p_price
        setOpt({
            ...opt,
            p_name:data.p_name,
            optname : name,
            qty:Number(value),
            price:tprice,
            price2: tprice*value
        })

    }

    useEffect(()=>{
        if(optArr.find(opts=>opts.optname === opt.optname)){
            console.log('중복된 옵션명 있음')
            setOptArr(optArr.splice(optArr.indexOf(opts=>opts.optname===opt.optname),1))
        }
    },[opt.qty])

        useEffect(()=>{
             if(opt.optname !== ''&& optArr.indexOf(opts=>opts.optname === opt.optname) ===-1){
                console.log('중복된 옵션명 없음.')
                setOptArr([...optArr, opt])
             }
        },[opt])

        console.log(optArr)
       

    //전체 상품금액 더하기
    let initialValue = 0;
    const totalPrice = optArr.reduce(function(init,opt){
        return init+opt.price2
    },initialValue)

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
                                <select onChange={onChange} name="optname">
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
                                            <p>{opts.optname} <input type="number" name={opts.optname} defaultValue={1} value={opts.qty} onChange={onChange2}/></p>
                                            <span>{opts.price2} </span>
                                        </div>
                                        <span>X</span>
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
