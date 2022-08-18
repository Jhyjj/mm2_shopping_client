import React, { useEffect, useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { getCookie } from '../util/cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../modules/order';
import Myorder from './Myorder';
import Myreview from './Myreview';
import MyFnq from './MyFnq';

const Mypage = () => {

    const id = getCookie('id');

    return (
        <div id="mypage">
            <h2>마이페이지</h2>
            <Myorder id={id}/>
            <Myreview id={id}/>
            <MyFnq id={id}/>
        </div>
    );
};

export default Mypage;