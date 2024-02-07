import React, { useState } from "react";
import NewNoteLogo from "../../assets/NewNoteLogo.png";
import { FloatingButton } from "./FloatingButton.style";
import ToolTip from "../ToolTip/ToolTip";
import { useNavigate } from "react-router-dom";

const NewNoteButton = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <FloatingButton
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      onClick={() => navigate("/write")}
    >
      <img src={NewNoteLogo} alt="NewNoteLogo" />

      {isTooltipVisible && <ToolTip message="새로운 글쓰기" />}
    </FloatingButton>
  );
};

export default NewNoteButton;
