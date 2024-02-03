import React, { useState } from 'react'
import * as S from "./Account.style";
import MyprofileSNB from '../MyprofileSNB/MyprofileSNB';
import { HiMiniUserCircle } from "react-icons/hi2";
import {useNavigate} from "react-router-dom"
import CancelModal from './CancelModal/CancelModal';

export default function Account() {
    const [image, setImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let navigate = useNavigate();
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleImageChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setImage(reader.result);
            };
            reader.readAsDataURL(file);
            console.log(file.name); 
        }
      };

  return (
    <div>
    <S.Container>
        <MyprofileSNB/>
        <S.Info>
            <S.Top>
                <p>계정 설정</p>
                <S.CloseBtn size='30' onClick={openModal}/>
            </S.Top>
            <S.Title>프로필</S.Title>
            <S.ProfileBox>
                {image ? (
                    <label htmlFor="input-file">
                        <img src={image} alt="Uploaded" />
                    </label>
                    ) : (
                        <label htmlFor="input-file">
                            <HiMiniUserCircle 
                            style={{cursor: 'pointer'}}size='200px' color="rgba(229, 229, 229, 1)"
                            onClick={handleImageChange}/>
                        </label>
                    )
                }
                <input style={{display:'none'}}type="file" id="input-file" onChange={handleImageChange} />
                
                <S.ProfileRight>
                    <p>사용자 이름</p>
                    <input placeholder='필수 입력 항목입니다'></input>
                    <button>저장하기</button>
                </S.ProfileRight>
            </S.ProfileBox>
            <S.Title>로그인 정보</S.Title>

            <S.LoginInfo>
                <S.LoginWrapper>
                    <p>이메일</p>
                    <p>admin123@gmail.com</p>
                    <button onClick={() => {navigate('/myprofile/account/email')}}>이메일 주소 변경</button>
                </S.LoginWrapper>
                <S.LoginWrapper>
                    <p>비밀번호</p>
                    <p></p>
                    <button onClick={() => {navigate('/myprofile/account/pw')}}>비밀번호 변경</button>
                </S.LoginWrapper>
            </S.LoginInfo>
            <S.Line/>
            <S.Bottom>
                <button>로그아웃</button>
                <p>탈퇴하기</p>
            </S.Bottom>
        </S.Info>
    </S.Container>
    <CancelModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  )
}
