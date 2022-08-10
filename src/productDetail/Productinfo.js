import React from 'react';
import { API_URL } from '../config/contansts';

const Productinfo = ({data}) => {
    return (
        <div id="product_info">
            <img src={`${API_URL}/upload/${data}`} alt=""/>
        </div>
    );
};

export default Productinfo;