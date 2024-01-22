import React from "react";
import { FloatingButton, Message } from "./FloatingButton.style";
import NewRoomLogo from "../../assets/NewRoomLogo.png";

const NewRoomButton = () => {
  return (
    <FloatingButton $right="130px">
      <img src={NewRoomLogo} alt="NewRoomLogo" />

      <Message>
        <p>룸 생성하기</p>
      </Message>
    </FloatingButton>
  );
};

export default NewRoomButton;
