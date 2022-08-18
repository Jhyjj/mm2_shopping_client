import React from 'react';

const FnqTr = ({fnq}) => {
    return (
        <tr>
            <td className='req' colSpan={2}>{fnq.desc}</td>
        </tr>
    );
};

export default FnqTr;