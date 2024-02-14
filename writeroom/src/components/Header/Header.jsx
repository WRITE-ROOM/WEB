import React, { useState } from "react";
import * as H from "./Header.style";
import { BiSearch } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import MyProfileImg from "../../assets/myProfile.png";
import MyProfileMenu from "./MyProfileMenu";

const Header = ({ themeMode, toggleDarkMode }) => {
  const [isMypageClicked, setMypageClicked] = useState(false);

  return (
    <H.HeaderContainer>
      <a href="/main">
        <H.HeaderLogo src={Logo} alt="logo"></H.HeaderLogo>
      </a>

      <H.HeaderRight>
        <H.SearchButton>
          <BiSearch size={20} style={{ color: "#939393" }} />
          <span>검색</span>
        </H.SearchButton>

        <H.LightDarkToggle themeMode={themeMode} onClick={toggleDarkMode}>
          <button></button>
        </H.LightDarkToggle>

        <H.MyProfile onClick={() => setMypageClicked(!isMypageClicked)}>
          <img src={MyProfileImg} alt="myProfileImg" />
        </H.MyProfile>

        {isMypageClicked && <MyProfileMenu />}
      </H.HeaderRight>
    </H.HeaderContainer>
  );
};

export default Header;
