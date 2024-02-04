import RoomSNB from "../components/RoomSNB/RoomSNB.jsx";
import RoomMain from "../components/RoomMain/RoomMain.jsx";
import RecTopic from "../components/RecTopic/RecTopic.jsx";
import RecTopicClose from "../components/RecTopicClose/RecTopicClose.jsx";
import { useState } from "react";
import NewNoteButton from "../components/FloatingButton/NewNoteButton.jsx";
import NewRoomButton from "../components/FloatingButton/NewRoomButton.jsx";
import * as S from "./RoomPage.style.js";

const RoomPage = () => {
  const [isRoomSNBOpen, setIsRoomSNBOpen] = useState(false);
  const [isSNBOpen, setIsSNBOpen] = useState(false);
  const [progress, setProgress] = useState(20);

  const handleProgress = () => {
    setProgress(90);
  };

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };

  const handleRoomSNB = () => {
    setIsRoomSNBOpen((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <RoomSNB
          percent={progress}
          handleRoomSNB={handleRoomSNB}
          isOpen={isRoomSNBOpen}
        />
        <RoomMain openRoomSNB={isRoomSNBOpen} openSNB={isSNBOpen} />
        {isSNBOpen ? (
          <RecTopic onToggle={toggleSNB}></RecTopic>
        ) : (
          <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>
        )}
      </S.Wrapper>
      <NewRoomButton />
      <NewNoteButton />
    </>
  );
};

export default RoomPage;
