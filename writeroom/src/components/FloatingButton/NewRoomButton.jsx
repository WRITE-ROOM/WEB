import React, { useState } from "react";
import { FloatingButton } from "./FloatingButton.style";
import NewRoomLogo from "../../assets/NewRoomLogo.png";
import ToolTip from "../ToolTip/ToolTip";

const NewRoomButton = ({onClick}) => {
  // 호버 시 ToolTip 열기/닫기
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <FloatingButton
      $right="130px"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      onClick={onClick}
    >
      <img src={NewRoomLogo} alt="NewRoomLogo" />

      {isTooltipVisible && <ToolTip message="룸 생성하기" />}
    </FloatingButton>
  );
};

export default NewRoomButton;
