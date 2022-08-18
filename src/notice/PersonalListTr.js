import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config/contansts';

const PersonalListTr = ({personal, onSubmit2}) => {

    const [input,setInput] = useState({
        no:"",
        requ:""})
    const onChange = (e)=>{
        const {name,value} = e.target;
        setInput({
            no:name,
            requ:value
        })
    }
    onSubmit2(input)

    return (
        <>
                        <tr>
                            <td colSpan={4}>
                                {personal.desc}
                            </td>
                            
                        </tr>
                        {personal.req !== null && 
                        <tr>
                            <td colSpan={4} >
                                {personal.req}
                            </td>
                        </tr>}
                        {personal.req === null &&
                        <>
                            <tr>
                                <td colSpan={4}>
                                    <input name={personal.no} onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4}><button type="submit">등록</button></td>
                            </tr>
                        </>
                        }
                    </>
    );
};

export default PersonalListTr;