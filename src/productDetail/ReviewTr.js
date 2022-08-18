import React from 'react';
import { API_URL } from '../config/contansts';

const ReviewTr = ({review}) => {
    let arr = review.img.split(",")
    return (
        <tr>
            <td colSpan={4} className="imgtd">
                {arr.map(img=>(
                    <img src={`${API_URL}/upload/${img}`} alt=""/>
                ))}
                <br/>
                {review.desc}
                </td>
        </tr>
    );
};

export default ReviewTr;