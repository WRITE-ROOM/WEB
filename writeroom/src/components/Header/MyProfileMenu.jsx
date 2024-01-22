import React from "react";
import { DropdownContainer } from "./Dropdown.style";

const MyProfileMenu = () => {
  return (
    <DropdownContainer>
      <ul>
        <li>
          <a href="/">계정설정</a>
        </li>
        <li>
          <a href="/">북마크</a>
        </li>
        <li>
          <a href="/">로그아웃</a>
        </li>
      </ul>
    </DropdownContainer>
  );
};

export default MyProfileMenu;
