import React, { useState } from "react";
import { BiCog } from "react-icons/bi";
import { DropdownContainer } from "../Header/Dropdown.style";
import * as S from "./Setting.style";

const Setting = () => {
  const [showSettingMenu, setShowSettingMenu] = useState(false);

  return (
    <S.Container>
      <S.SettingButton
        onClick={() => {
          setShowSettingMenu(!showSettingMenu);
        }}
      >
        <BiCog size={22} color="white" />
      </S.SettingButton>

      {showSettingMenu && (
        <DropdownContainer $top="30px">
          <ul>
            <li>
              <p>수정하기</p>
            </li>
            <li>
              <p>삭제하기</p>
            </li>
          </ul>
        </DropdownContainer>
      )}
    </S.Container>
  );
};

export default Setting;
