import React, { useRef, useState } from 'react';
import './style.css';
import axios from 'axios';
import { API_URL } from '../config/contansts';

const CreateProduct = () => {

    
    let currentId = useRef(1);

     //옵션input 관리
     const [optinput, setOptinput] = useState();
     const [opt, setOpt] = useState([]);
     const onChange2 = (e)=>{
         setOptinput(e.target.value);
         console.log(optinput);
     }
 
     const onClick2 =()=>{
         setOpt([...opt,optinput]);
         setInput({
             ...input,
             p_option:opt.join()
         })
         setOptinput('');
     }
     console.log(opt)

     //이미지 업로드 함수
     const uploadimg = (e)=>{
        // if(e.target.files[0]){
        //     const img = new FormData();
        //     console.log(e.target.files[0]);
        //     img.append("file",e.target.files[0]);
        //     console.log(img)
        // axios.post(`${API_URL}/upload`,img)
        // .then((res)=>{
        //     console.log(res)
        // })
        // .catch((e)=>{
        //     console.log(e)
        // })
        // }
        const img = new FormData();
        img.append("file",e.target.files[0])
        console.log(img)
        axios.post(`${API_URL}/upload`, img)
        .then(res=>{
            console.log(res)
        })
        .catch(e=>{
            console.log(e)
        })
        
     }
 
    //input값을 관리 => 이 값들을 post전송으로 서버로 보내줄 것임
    const [input,setInput] = useState({
        p_name: "",
        p_intro:"",
        p_price:"",
        p_part1:"",
        p_part2:"",
        p_option:"",
        p_img:"",
        p_detail:"",
        p_keyword:""
    })

    //input onChange함수
    const onChange = (e)=>{
        const {name, value} = e.target;
        console.log(input);
        setInput({
            ...input,
            [name]:value,
            p_option:opt.join()
        })
    }

    //전송
    const onSubmit = (e) =>{
        e.preventDefault();
        currentId = currentId.current++;
        console.log(currentId);
        console.log(input);
        insertProduct();

    }

    function insertProduct(){
        axios.post(`${API_URL}/addProduct`,input)
        .then(result=>{
            console.log(result);
            console.log(input);
            alert("상품등록 완료")
        })
        .catch(e=>{
            console.log(e)
        })
    }


    return (
        <div id="createPro">
            <h2>상품등록 페이지입니다.</h2>
            <p>관리자만 접근가능한 페이지입니다.</p>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <table>
                    <tr>
                        <th>상품명</th>
                        <td><input type="text" name="p_name" onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <th>상품설명</th>
                        <td><input type="text" name="p_intro" onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <th>단가</th>
                        <td><input type="text" name="p_price" onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <th>분류</th>
                        <td>
                            <select name="p_part1" onChange={onChange}>
                                <option>유형별</option>
                                <option>-----</option>
                                <option>노즈워크</option>
                                <option>인형</option>
                                <option>공</option>
                                <option>터그놀이</option>
                                <option>이갈이용</option>
                            </select>
                            <select name="p_part2" onChange={onChange}>
                                <option>소재별</option>
                                <option>-----</option>
                                <option>라텍스</option>
                                <option>패브릭</option>
                                <option>나무</option>
                                <option>플라스틱</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>옵션</th>
                        <td>
                            <div>
                                <input type="text" name="p_opt" onChange={onChange2} value={optinput}/>
                                <span onClick={onClick2}>+</span>
                                {opt.length>=1 && opt.map((options)=><div>{options}</div>)}
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <th>대표이미지</th>
                        <td>
                            <input type="file" name="p_img" onChange={uploadimg}/>
                        </td>
                    </tr>
                    <tr>
                        <th>상세설명</th>
                        <td>
                            <input type="file" name="p_detail" onChange={onChange}/><button>+</button>
                        </td>
                    </tr>
                    <tr>
                        <th>키워드</th>
                        <td>
                            <input type="text" name="p_keyword" onChange={onChange}/>
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

export default CreateProduct;