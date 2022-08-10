import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/Main';
import {Routes, Route} from 'react-router-dom';
import Login from './login/Login';
import Join from './join/Join';
import Cart from './cart/Cart';
import Mypage from './mypage/Mypage';
import ProductDetail from './productDetail/ProductDetail';
import WriteReview from './review/WriteReview';
import CreateProduct from './createProduct/CreateProduct';
import { useDispatch } from 'react-redux/es/exports';
import {useEffect} from 'react';
import { getCookie } from './util/cookie';
import { setLogin } from './modules/logincheck';
import Products from './products/Products';


function App() {
  const dispatch = useDispatch();
  const id = getCookie('id');
  useEffect(()=>{
    if(id){
      dispatch(setLogin())
    }
  },[])
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/mypage' element={<Mypage/>}/>
          <Route path='/products/:keyword' element={<Products/>}/>
          <Route path='/detail/:no' element={<ProductDetail/>}/>
          <Route path='/writeReview' element={<WriteReview/>}/>
          <Route path='/createProduct' element={<CreateProduct/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
