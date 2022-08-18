import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFnq } from '../modules/notice';
import FnqTr from './FnqTr';

const Fnq = () => {
    const {data,error,loading} = useSelector(state=>state.printNotice.fnq);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getFnq())
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
            <h2>자주묻는질문</h2>
            <table id="admin" className='notice'>
                <tr>
                    <th>no</th>
                    <th>제목</th>
                </tr>
                {data.map(fnq=>(
                    <>
                    <tr>
                        <td>{fnq.no}</td>
                        <td className={fnq.no} onClick={onClick}>{fnq.title}</td>
                    </tr>
                    {fnq.no === isOpen && <FnqTr fnq={fnq}/>}
                    </>
                ))}
            </table>
        </div>
    );
};

export default Fnq;