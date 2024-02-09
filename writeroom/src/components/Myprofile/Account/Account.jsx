import React, { useEffect, useState } from 'react'
import * as S from "./Account.style";
import MyprofileSNB from '../MyprofileSNB/MyprofileSNB';
import { HiMiniUserCircle } from "react-icons/hi2";
import {useNavigate} from "react-router-dom"
import CancelModal from './CancelModal/CancelModal';
import SecessionModal from './SecessionModal/SecessionModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../../redux/user';
import myProfile from '../../../assets/myProfile.png'

export default function Account() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isSecessionModalOpen, setIsSecessionModalOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);
  
  const user = useSelector((state) => state.user);
  const userName = user.userName;
  const profileImg = user.profileImg;
  const userEmail = user.userEmail;
  
  const [name, setName] = useState(userName);

  const userId = localStorage.getItem('id');
	const receivedToken = localStorage.getItem('token');

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const openCancelModal = () => {
      setIsCancelModalOpen(true);
  };
  const closeCancelModal = () => {
      setIsCancelModalOpen(false);
  };
  const openSecessionModal = () => {
      setIsSecessionModalOpen(true);
  };
  const closeSecessionModal = () => {
      setIsSecessionModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
  };

  const isImageBlob = (blob) => {
    return blob instanceof Blob && blob.type.startsWith('image/');
  };

  const patchUserInfo = async () => {
    setIsSave(true)
    const formData = new FormData();
    if (image === null) {
      const defaultImage = await fetch(myProfile).then((res) => res.blob());
      formData.append("userImg", defaultImage, "myProfile.png");
    }
    else if (image === profileImg) {
      console.log('프사 안 바꿈')
    }
    else {
      if (!isImageBlob(image)) {
        const decodedImage = await decodeImage(image);
        const imageExtension = imageName.split('.').pop();
        const blobImage = new Blob([decodedImage], { type: `image/${imageExtension}` });
        formData.append("userImg", blobImage, imageName);
      }
    }
    formData.append('request', JSON.stringify({nickName: name}));
    console.log(formData);
    try {
      const res = await axios.patch(`/users/update/myProfile`, formData, { 
        headers: {
          'Authorization': `Bearer ${receivedToken}`,
          },
       });
      console.log(res.data)
      
    } catch (error) {
      console.error(error);
    } 
  };

  const decodeImage = async (base64Image) => {
    const blobImage = await fetch(base64Image).then((res) => res.blob());
    return blobImage;
  };

  const getUserProfile = async() => {
    try {
      const res = await axios.get(`/users/myProfile`, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`
        },
      });
      const data = res.data.result;
      dispatch(setAccount({
        userId: data.userId, 
        userName: data.nickName,
        profileImg: data.profileImg,
        userEmail: data.email
      }))
      setImage(data.profileImg);
      setName(data.nickName);
      console.log(res.data);
    } catch (error){
      console.error(error);
    }
   }
   useEffect(() => {
    getUserProfile();
   }, [])

return (
  <div>
    <S.Container>
      <MyprofileSNB/>
      <S.Info>
        <S.Top>
          <p>계정 설정</p>
          <S.CloseBtn size='30' onClick={openCancelModal}/>
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
                style={{cursor: 'pointer'}} size='200px' color="rgba(229, 229, 229, 1)"/>
              </label>
            )
          }
          <input style={{display:'none'}}type="file" id="input-file" onChange={handleImageChange} />
          <S.ProfileRight>
            <h6>사용자 이름</h6>
            <input 
              placeholder='필수 입력 항목입니다'
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              >
              </input>
            <button onClick={patchUserInfo}>저장하기</button>
            {isSave && <p>저장되었습니다!</p>}
          </S.ProfileRight>
          </S.ProfileBox>
          <S.Title>로그인 정보</S.Title>
          <S.LoginInfo>
            <S.LoginWrapper>
              <p>이메일</p>
              <p>{userEmail}</p>
              <button onClick={() => {navigate('/myprofile/account/email')}}>이메일 주소 변경</button>
            </S.LoginWrapper>
            <S.LoginWrapper>
              <p>비밀번호</p>
              <p/>
              <button onClick={() => {navigate('/myprofile/account/pw')}}>비밀번호 변경</button>
            </S.LoginWrapper>
          </S.LoginInfo>
          <S.Line/>
          <S.Bottom>
            <button>로그아웃</button>
            <p onClick={openSecessionModal}>탈퇴하기</p>
          </S.Bottom>
        </S.Info>
    </S.Container>
    <CancelModal isOpen={isCancelModalOpen} onClose={closeCancelModal}/>
    <SecessionModal isOpen={isSecessionModalOpen} onClose={closeSecessionModal}/>
    </div>
  )
}
