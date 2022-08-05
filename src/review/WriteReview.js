import React from 'react';
import './style.css';

const WriteReview = () => {
    return (
        <div id="writeReview">
            <h2>리뷰작성</h2>
            <p>베스트 리뷰에 선정되시면 바로 사용가능한 적립금을 드립니다💕</p>
            <form>
                <table>
                    <tr>
                        <th>제품명</th>
                        <td>쥬쥬베 라텍스공</td>
                    </tr>
                    
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>

                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea></textarea>
                        </td>
                    </tr>

                    <tr>
                        <th>첨부파일</th>
                        <td>
                            <input type="file"/>
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

export default WriteReview;