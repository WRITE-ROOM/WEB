import React from "react";
import { DropdownContainer } from "./Dropdown.style";
import { useNavigate } from "react-router-dom";

const MyProfileMenu = () => {
  return (
    <DropdownContainer>
      <ul>
        <li>
          <a href="/myprofile/account">계정설정</a>
        </li>
        <li>
          <a href="/myprofile/bookmark">북마크</a>
        </li>
        <li>
          <a href="/">로그아웃</a>
        </li>
      </ul>
    </DropdownContainer>
  );
};

export default MyProfileMenu;
