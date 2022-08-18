import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config/contansts';
import { getCookie } from '../util/cookie';
import './style.css';

const Personalq = () => {
    const id = getCookie('id');

    const [input, setInput] = useState({
        id:id,
        title:"",
        desc:""
    })

    const onChange = (e)=>{
        console.log(input)
        const {name,value} = e.target;
        setInput({
            ...input,
            [name]:value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(input.id !== "" && input.title !== "" && input.desc !== ""){
            axios.post(`${API_URL}/personalQnA`,input)
            .then(result=>{
                console.log(result)
                alert('1대1 문의가 작성되었습니다.')
                navigator('/mypage')
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }

    return (
        <div id="personalQ">
            <h2>1:1 문의</h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <th>제목</th>
                        <td><input name="title" onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td><textarea name="desc" onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type='submit'>작성</button>
                            <button type="reset">취소</button>
                        </td>
                    </tr>
                </table>
            </form>
            
        </div>
    );
};

export default Personalq;