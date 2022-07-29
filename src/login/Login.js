import React from 'react';
import './style.css';

const Login = () => {
    return (
        <div id='login'>
            
            <form>
                <h2>로그인</h2>
                <table>
                    <tr>
                        <th>아이디</th>
                        <td><input type="text"/></td>
                        <td rowSpan={2}><button type="submit">로그인</button></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td><input type="password"/></td>
                    </tr>
                </table>
                <p>비밀번호를 잊으셨나요?   <span>비밀번호찾기</span></p>
                <p>아직 회원이 아니신가요?  <span>회원가입</span></p>
            </form>
        </div>
    );
};

export default Login;