import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import { getProducts } from '../modules/products';


const NewAr = () => {
    const {data, loading, error} = useSelector(state=>state.printProduct.products)
   const dispatch = useDispatch();
   useEffect(()=>{
        dispatch(getProducts('new'))
   },[dispatch])

   console.log(data)
   if(loading) return <div>로딩중..</div>
   if(error) return <div>에러가 발생했습니다. 관리자에게 문의바랍니다.</div>
   if(!data) return <div>데이터를 받아오지 못함</div>
   
    return (
        <section id="newAr">
                        <h2>금주의 신상품✨</h2>
                        <p>MD가 엄선한 금주의 신상품을 만나보세요💕</p>
                        
                        <ul>
                        {data.map(newAr=>(
                        
                             <li>
                                <Link to={`/detail/${newAr.no}`}>
                                <img src={`${API_URL}/upload/${newAr.p_img}`} alt=''/>
                                </Link>
                                <div className='product_tbox'>
                                    <h3><Link to={`/detail/${newAr.no}`}>{newAr.p_name}</Link></h3>
                                     <span>{newAr.p_price}</span>
                                 <div className='likebtn'>장바구니 담기</div>
                                </div>
                                
                            </li>
                         
                            
                            ))}
                           
                        </ul>

                    </section>

    );
};

export default NewAr;