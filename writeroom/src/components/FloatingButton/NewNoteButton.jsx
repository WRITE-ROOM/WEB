import React, { useState } from "react";
import NewNoteLogo from "../../assets/NewNoteLogo.png";
import { FloatingButton } from "./FloatingButton.style";
import ToolTip from "../ToolTip/ToolTip";

const NewNoteButton = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <FloatingButton
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <img src={NewNoteLogo} alt="NewNoteLogo" />

      {isTooltipVisible && <ToolTip message="새로운 글쓰기" />}
    </FloatingButton>
  );
};

export default NewNoteButton;
