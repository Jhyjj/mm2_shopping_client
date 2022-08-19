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
import ViewReview from './review/ViewReview';
import Personalq from './notice/Personalq';
import PersonalList from './notice/PersonalList';
import Notice from './notice/Notice';
import Fnq from './notice/Fnq';


function App() {
  const dispatch = useDispatch();
  const id = getCookie('id');
  useEffect(()=>{
    if(id){
      dispatch(setLogin())
    }
  },[])
  return (
    <div id="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/mypage' element={<Mypage/>}/>
          <Route path='/products/:keyword' element={<Products/>}/>
          <Route path='/detail/:no' element={<ProductDetail/>}/>
          <Route path='/writeReview' element={<WriteReview/>}/>
          <Route path='/review/:no' element={<ViewReview/>}/>
          <Route path='/createProduct' element={<CreateProduct/>}/>
          <Route path='/personalQ' element={<Personalq/>}/>
          <Route path='/adminPersonalQ' element={<PersonalList/>}/>
          <Route path='/notice' element={<Notice/>}/>
          <Route path='/fnq' element={<Fnq/>}/>
          
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
