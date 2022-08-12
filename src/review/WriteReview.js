import React, { useState } from 'react';
import './style.css';
import { useLocation } from 'react-router-dom'
import { getCookie } from '../util/cookie';
import axios from 'axios';
import { API_URL } from '../config/contansts';


const WriteReview = () => {
    const id = getCookie('id');
    const location = useLocation();
    const data = location.state;
    console.log(data.p_name)

    const arr = data.p_name.split(',')
    console.log(arr)

    const [review, setReview] = useState({
        p_name : arr.length>1? arr[0] : data.p_name,
        title : "",
        desc : "",
        img : "",
        userId : id,
        date : new Date()
    })

    const onChange = (e)=>{
        const {name, value} = e.target;
        setReview({
            ...review,
            [name]:value
        })
    }

    //이미지 업로드
    const uploadimg = (e)=>{
        const {name} = e.target;
        const img = new FormData();
        // img.append(name,e.target.files[0]);
        // img.append(name,e.target.files[1]);
        console.log(img)
        console.log(e.target.files)
        if(e.target.files.length>=1){
            for(let key in e.target.files){
                img.append(name,e.target.files[key])
            }
        }
        axios.post(`${API_URL}/upload`, img,{
            Headers:{'content-type':'multipart/form-data'}
        })
        .then(res=>{
            console.log(res.data)
            setReview({
                ...review,
                img:res.data.imgs.join(",")
            })
        })
        
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        axios.post(`${API_URL}/review`,review)
        .then(result=>{
            alert("리뷰가 작성되었습니다.")
            location('/mypage')
        })
        .catch(e=>{
            console.log(e)
        })
    }

    console.log(review)

    return (
        <div id="writeReview">
            <h2>리뷰작성</h2>
            <p>베스트 리뷰에 선정되시면 바로 사용가능한 적립금을 드립니다💕</p>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <th>제품명</th>
                        <td>
                            {arr.length>1&&
                            <select name="p_name" onChange={onChange}>
                                {arr.map(pro=>(
                                    <option>{pro}</option>
                                ))}
                            </select> }
                            {arr.length===1&& <input name="p_name" value={data.p_name}/>}
                            
                        </td>
                    </tr>
                    
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type="text" name="title" onChange={onChange}/>
                        </td>
                    </tr>

                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea name="desc" onChange={onChange}/>
                        </td>
                    </tr>

                    <tr>
                        <th>첨부파일</th>
                        <td>
                            <input type="file" name="imgs" multiple onChange={uploadimg}/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">등록</button>
                            <button type="reset">취소</button>
                        </td>
                    </tr>
                    
                </table>
            </form>
        </div>
    );
};

export default WriteReview;