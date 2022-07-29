import './App.css';
import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/Main';
import {Routes, Route} from 'react-router-dom';
import Login from './login/Login';
import Join from './join/Join';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
