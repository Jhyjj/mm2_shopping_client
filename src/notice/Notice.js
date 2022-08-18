import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotice } from '../modules/notice';
import NoticeTr from './NoticeTr';


const Notice = () => {

    const {data,error,loading} = useSelector(state=>state.printNotice.notice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getNotice())
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

    
    if(loading) return <div>로딩</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <div id="personalQ">
            <h2>공지사항</h2>
            <table id="admin" className='notice'>
                <tr>
                    <th>no</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                {data.map(notice=>(
                    <>
                    <tr>
                        <td>{notice.no}</td>
                        <td className={notice.no} onClick={onClick}>{notice.title}</td>
                        <td>{notice.id}</td>
                        <td>{notice.date}</td>
                    </tr>
                    {notice.no === isOpen && <NoticeTr notice={notice}/>}
                    </>
                ))}
            </table>
        </div>
    );
};

export default Notice;