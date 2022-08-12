import './style.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../modules/cart';
import { API_URL } from '../config/contansts';
import axios from 'axios';
import { getCookie } from '../util/cookie';

const Cart = () => {

    const navigate = useNavigate();
    const id = getCookie('id');
    console.log(id)

    const {data,loading,error} = useSelector(state=>state.printCart.cart)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCart(id))
    },[dispatch,id])

    const [product,setProduct] = useState({
        no:"",
        isChecked:""
    })
    const [checkList, setCheckList] = useState([])

    const [allChecked, setAllChecked] = useState(false)

    const allCheck = (e)=>{
        setAllChecked(e.target.checked)
    }
    console.log(allChecked)


    const onClick = (e)=>{
        e.target.value = e.target.checked;
        // console.log(e.target)
        setProduct({
            no:e.target.name,
            value:e.target.value
        })
    }
    
    useEffect(()=>{
        if(product.no !== '' && product.value==='true'){
            setCheckList([...checkList,product])
        }
        if(checkList.find(list=>list.no === product.no)){
            console.log('동일한 제품 존재')
            checkList.splice(checkList.indexOf(list=>list.no===product.no),1)
        }
    },[product])
    
    console.log(checkList)

    const deleteList = ()=>{
        console.log(checkList)
        axios.post(`${API_URL}/mycartdelete/${id}`,checkList)
        alert('선택한 상품이 삭제되었습니다.')
        //새로고침되기
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        // const orderList = data.filter((x)=> checkList.some((y)=> Number(y.no) === x.no))
        console.log(orderList)
        axios.post(`${API_URL}/myorder/${id}`, orderList)
        .then(result=>{
            console.log(result.data)
            alert('마이페이지로 이동합니다.')
            navigate('/mypage')
        })
        .catch((e)=>{
            console.log(e)
        })
    }



    
    if(loading) return <div>로딩중</div>
    if(error) return <div>에러</div>
    if(!data) return <div>데이터없음</div>
    const orderList = data.filter((x)=> checkList.some((y)=> Number(y.no) === x.no))
    const totalPrice = orderList.reduce(function(init,product){
        return init+Number(product.t_price)
    },0)

    return (
        <div id="cart">
            <h2>장바구니</h2>
            <p>장바구니 내역을 확인해주세요</p>
            <div id="cartList">
                <div>
                    <input type="checkbox" onClick={allCheck}></input>
                    <span>전체 상품 담기</span>
                    <span onClick={deleteList}>선택삭제</span>
                </div>
                <ul>
                    {data.length===0 && <div>아직 장바구니에 담긴 상품이 없습니다.</div>}
                    {data.map(data=>(
                        <li>
                        <input type="checkbox" name={data.no} onClick={onClick} />
                        <div id="imgbox">
                            <img src={`${API_URL}/upload/${data.p_img}`} alt=""/>
                        </div>
                        <div id="textbox">
                            <h4>{data.p_name}</h4>
                            <p>{data.p_opt}</p>
                        </div>
                        <input type="number" defaultValue={data.p_qty}/>
                        <p>{data.p_price}</p>
                        <p>{data.t_price}</p>
                    </li>

                    ))}
                    
                </ul>
            </div>

            <div id="total">
                <h3>Total</h3>
                <form onSubmit={onSubmit}>
                    <table>
                        <tr>
                            <th>총 상품금액</th>
                            <th rowSpan={2}>+</th>
                            <th>배송비</th>
                            <th rowSpan={2}>=</th>
                            <th>결제예정 금액</th>
                        </tr>
                        <tr>
                            <td>{totalPrice}</td>
                            <td>{totalPrice>=30000? 0 : 2500}</td>
                            <td>{totalPrice>=30000? totalPrice : totalPrice+2500}</td>
                        </tr>
                        <tr><td colSpan={5}><button type="submit">주문하기</button></td></tr>
                    </table>
                </form>
            </div>
            
        </div>
    );
};

export default Cart;