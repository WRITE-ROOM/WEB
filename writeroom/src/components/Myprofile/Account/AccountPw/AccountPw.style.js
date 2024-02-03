import styled from "styled-components";

export const SaveBtn = styled.button`
    margin-left: 90px;
    width: 1054px;
    height: 46px;
    border: none;
    border-radius: 10px;
    background: rgba(181, 169, 148, 1);
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: white;
`

export const NewPw = styled.div`
    height: 270px;
    display: flex;
    flex-direction: column;
    margin-left: 90px;
    margin-top: 30px;

    h2 {
        margin: 10px 0;
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }

    input {
        margin-bottom: 30px;
        padding-left: 10px;
        width: 1044px;
        height: 46px;
        border-radius: 10px;
        border: 1px solid rgba(229, 229, 229, 1);
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 300;  
    }
    ::placeholder {
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 300;       
    }

    p {
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;
        color: rgba(147, 147, 147, 1);
        margin-top: 14px;
    }

    button { 
        margin-top: 20px;
        width: 1054px;
        height: 46px;
        border-radius: 10px;
        background: rgba(181, 169, 148, 1);
        border: none;
        font-family: Pretendard;
        font-size: 20px;
        font-weight: 400;
        color: white;
        cursor: pointer;
    }
    h6 {
        width: 1054px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 300;
        color: rgba(147, 147, 147, 1);
        margin-top: 14px;
        text-align: center;
    }
`