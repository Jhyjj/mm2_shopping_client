import React from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../config/contansts';

const ViewReview = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)
    console.log(data.img === '')
    const imgs = data.img.split(',');
    console.log(imgs)

    const popupImg = (e)=>{
        console.log(e.target);
        //원본 큰 이미지 창 띄우기
    }
    return (
        <div id="writeReview">
            <form id="view">
                <table>
                    
                    <tr>
                        <th>제품명</th>
                        <td colSpan={3}>{data.p_name}</td>
                    </tr>

                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>{data.title}</td>
                    </tr>

                    <tr>
                        <th>작성자</th>
                        <td>{data.userId}</td>
                        <th>작성일자</th>
                        <td>{data.date.substr(0,10)}</td>
                    </tr>

                    {data.img !== '' && <tr>
                        <td colSpan={4}>
                            {imgs.map(img=>(
                                <img src={`${API_URL}/upload/${img}`} alt='' onClick={popupImg}/>
                            ))}
                        </td>
                    </tr> }
                    

                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>{data.desc}</td>
                    </tr>

                    <tr>
                        <td colSpan={4}>
                            <button>수정</button>
                            <button>삭제</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default ViewReview;