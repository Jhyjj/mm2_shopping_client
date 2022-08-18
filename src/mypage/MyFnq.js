import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalQ } from '../modules/order';
import MyFnqTr from './MyFnqTr';

const MyFnq = ({id}) => {
    const {data,error,loading} = useSelector(state=>state.printMypage.personalQ);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPersonalQ(id))
    },[dispatch,id])

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

    console.log(isOpen)

    if(loading) return <div>로딩</div>
    if(error) return <div>에러</div>
    if(!data) return <div>데이터없음</div>

    console.log(data)
    return (
        <div id="myfnq">
        <h3>🐾1:1 문의</h3>
        <table>
            <tr>
                <th>NO</th>
                <th>제목</th>
                <th>처리여부</th>
            </tr>
            {data.length===0 && 
                <tr>
                    <td colSpan={3}>아직 작성된 1:1문의가 없습니다.</td>    
                </tr>}
            {data.map(personalQ=>(
                <>
                    <tr>
                        <td>{personalQ.no}</td>
                        <td className={personalQ.no} onClick={onClick}>{personalQ.title}</td>
                        <td>{personalQ.req !== null? <span>답변완료</span> : <span>답변대기중</span>}</td>
                    </tr>
                    {personalQ.no===isOpen && <MyFnqTr personalQ={personalQ}/>}
                </>
            ))}
           

        </table>
    </div>
    );
};

export default MyFnq;