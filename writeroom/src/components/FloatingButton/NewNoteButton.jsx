import React from "react";
import NewNoteLogo from "../../assets/NewNoteLogo.png";
import { FloatingButton, Message } from "./FloatingButton.style";

const NewNoteButton = () => {
  return (
    <FloatingButton>
      <img src={NewNoteLogo} alt="NewNoteLogo" />

      <Message>
        <p>새로운 글쓰기</p>
      </Message>
    </FloatingButton>
  );
};

export default NewNoteButton;
