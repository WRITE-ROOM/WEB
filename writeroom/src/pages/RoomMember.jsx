import RoomSettingNavbar from "../components/RoomSettingNavbar/RoomSettingNavbar";
import RoomSettingSNB from "../components/RoomSettingSNB/RoomSettingSNB";
import * as S from "./RoomMember.style";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import RoomModal from "../components/RoomModal/RoomModal";
import { useState } from "react";

const RoomMember = () => {
  const test = {
    id: "제리",
    auth: "관리자",
    message: "룸 내 모든 기능을 이용할 수 있어요",
  };
  const users = [
    {
      id: "제리",
      auth: "관리자",
    },
    {
      id: "톰",
      auth: "참여자",
    },
    {
      id: "레이튼",
      auth: "참여자",
    },
    {
      id: "유켄",
      auth: "참여자",
    },
  ];
  const toggle1 = [{ data: "전체" }, { data: "관리자" }, { data: "참여자" }];
  const toggle2 = [
    { data: "관리자" },
    { data: "참여자" },
    { data: "내보내기" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openStates, setOpenStates] = useState(users.map(() => false));
  const [selectedAuth, setSelectedAuth] = useState("");
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = (index, auth) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !prevStates[index];
      return newStates;
    });
    setSelectedAuth(auth);
  };

  return (
    <S.Wrapper>
      <RoomSettingSNB />
      <S.Contents>
        <RoomSettingNavbar title="멤버 관리" />
        <S.AuthBox>
          <h1>
            '{test.id}'님의 권한<span> {test.auth}</span>
          </h1>
          <p>{test.message}</p>
        </S.AuthBox>
        <S.MemberContainer>
          <S.MemberBox>
            <h1>'멤버 {users.length}명'</h1>
            <S.AuthToggle onClick={() => handleOpen()}>
              <p>전체</p>
              {isOpen && (
                <S.ToggleText>
                  {toggle1.map(({ data }, index) => (
                    <div key={index}>
                      <p>{data}</p>
                    </div>
                  ))}
                </S.ToggleText>
              )}
              {isOpen ? (
                <TiArrowSortedDown size={20} />
              ) : (
                <TiArrowSortedUp size={20} />
              )}
            </S.AuthToggle>
          </S.MemberBox>
          {users.map((user, index) => (
            <S.MemberBox key={index}>
              <S.ProfileWrapper>
                <HiMiniUserCircle size={40} />
                <S.TextWrapper>
                  <p>{user.id}</p>
                  <span>{user.auth}</span>
                </S.TextWrapper>
              </S.ProfileWrapper>
              <S.AuthToggle onClick={() => handleToggle(index, user.auth)}>
                <p>{user.auth}</p>
                {openStates[index] && selectedAuth === "참여자" && (
                  <S.ToggleText>
                    {toggle2.map(({ data }, index) => (
                      <div key={index}>
                        <p>{data}</p>
                      </div>
                    ))}
                  </S.ToggleText>
                )}
                {openStates[index] ? (
                  <TiArrowSortedDown size={20} />
                ) : (
                  <TiArrowSortedUp size={20} />
                )}
              </S.AuthToggle>
            </S.MemberBox>
          ))}
        </S.MemberContainer>
      </S.Contents>
      <RoomModal
        title1="나의 권한은 관리자에요"
        title2="룸을 정말 떠나시겠어요?"
        button2="떠나기"
      />
      <RoomModal title1="해당 멤버를 정말 내보내시겠어요?" button2="떠나기" />
    </S.Wrapper>
  );
};

export default RoomMember;
