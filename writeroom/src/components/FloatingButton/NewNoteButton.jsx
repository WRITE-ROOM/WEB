import React, { useState } from "react";
import NewNoteLogo from "../../assets/NewNoteLogo.png";
import { FloatingButton } from "./FloatingButton.style";
import ToolTip from "../ToolTip/ToolTip";
import { useNavigate } from "react-router-dom";
import { resetNote } from "../../redux/note";
import { resetTag } from "../../redux/tag";
import { useDispatch } from "react-redux";
import {
  resetSelectedCategory,
  setSelectedRoom,
} from "../../redux/selectModal";

const NewNoteButton = () => {
  const dispatch = useDispatch();
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const navigate = useNavigate();

  const handleNewNote = () => {
    dispatch(resetNote());
    dispatch(resetTag());
    dispatch(setSelectedRoom({ roomname: "", roomId: "" }));
    dispatch(resetSelectedCategory());
    navigate("/write");
  };

  return (
    <FloatingButton
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      onClick={() => handleNewNote()}
    >
      <img src={NewNoteLogo} alt="NewNoteLogo" />

      {isTooltipVisible && <ToolTip message="새로운 글쓰기" />}
    </FloatingButton>
  );
};

export default NewNoteButton;
