import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/contansts';
import { adminpersonalQ } from '../modules/order';
import PersonalListTr from './PersonalListTr';

const PersonalList = () => {

    const {data,error,loading} = useSelector(state=>state.printMypage.personalQ);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(adminpersonalQ())
    },[dispatch])

    const [open, setOpen] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const onClick = (e)=>{
        console.log(e.target.className)
        if(open===Number(e.target.className)){
            console.log('이미 같은 번호가 선택됨. 닫기~')
            setOpen(null)
            console.log(open)
        }else{
            setOpen(Number(e.target.className))
        }
    }

    useEffect(()=>{
        setIsOpen(open)
    },[open])


    const onSubmit = (e)=>{
        e.preventDefault();
        onSubmit2();
    }

    const onSubmit2 = (input)=>{
        console.log(input)
        axios.post(`${API_URL}/adminreq`,input)
        .then(result=>{
            console.log(result)
        })
        .catch(e=>{
            console.log(e)
        })

    }

    if(loading) return <div>로딩</div>
    if(error) return <div>에러</div>
    if(!data) return <div>데이터없음</div>

    return (
        <div id="personalQ">
            <h2>관리자 1:1 처리 페이지입니다.</h2>
            <form onSubmit={onSubmit}>
                <table id="admin">
                    <tr>
                        <th>no</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>처리여부</th>
                    </tr>
                    {data.map(personal=>(
                        <>
                            <tr>
                                <td>{personal.no}</td>
                                <td className={personal.no} onClick={onClick}>{personal.title}</td>
                                <td>{personal.id}</td>
                                <td>{personal.req===null? <span>답변대기중</span> : <span>답변완료</span>}</td>
                            </tr>
                            {personal.no===isOpen && <PersonalListTr personal={personal} onSubmit2={onSubmit2}/>}
                        </>
                    ))}
                </table>
            </form>
        </div>
    );
};

export default PersonalList;