import React from 'react';

const MyFnqTr = ({personalQ}) => {
    return (
        <>
                        <tr>
                            <td colSpan={3}>
                                {personalQ.desc}
                            </td>
                            
                        </tr>
                        {personalQ.req !== null && 
                        <tr>
                            <td colSpan={3} >
                                {personalQ.req}
                            </td>
                        </tr>}
                    </>

    );
};

export default MyFnqTr;