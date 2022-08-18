import React from 'react';

const NoticeTr = ({notice}) => {
    return (
        <tr>
            <td className='req' colSpan={4}>{notice.desc}</td>
        </tr>
    );
};

export default NoticeTr;