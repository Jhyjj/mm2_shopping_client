import React from 'react';

const Review = () => {
    return (
        <div id="pro_review">
            
                    <table>
                        <tr>
                            <th>NO</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>리뷰제목입니다.</td>
                            <td>김멍멍</td>
                            <td>2022-08-03</td>
                        </tr>
                        <tr className='hidden'>
                            <td colSpan={4}>
                                내용입니다.
                            </td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>리뷰제목입니다.</td>
                            <td>김멍멍</td>
                            <td>2022-08-03</td>
                        </tr>
                        <tr className='hidden'>
                            <td colSpan={4}>
                                내용입니다.
                            </td>
                        </tr>
                    </table>
                        
        </div>
    );
};

export default Review;