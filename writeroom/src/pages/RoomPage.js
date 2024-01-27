import RoomSDB from "../components/RoomSDB/RoomSDB.jsx";
import RoomMain from "../components/RoomMain/RoomMain.jsx";
import RecTopic from "../components/RecTopic/RecTopic";
import RecTopicClose from "../components/RecTopicClose/RecTopicClose";
import { useState } from "react";
import NewNoteButton from "../components/FloatingButton/NewNoteButton.jsx";
import NewRoomButton from "../components/FloatingButton/NewRoomButton.jsx";
import Header from "../components/Header/Header.jsx";
import * as S from "./RoomPage.style.js";

const RoomPage = () => {
  const [isRoomSDBOpen, setIsRoomSDBOpen] = useState(false);
  const [isSNBOpen, setIsSNBOpen] = useState(false);

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };
  const [progress, setProgress] = useState(20);

  const handleRoomSDB = () => {
    setIsRoomSDBOpen((prev) => !prev);
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <RoomSDB
          percent={progress}
          handleRoomSDB={handleRoomSDB}
          isOpen={isRoomSDBOpen}
        />
        <RoomMain openRoomSDB={isRoomSDBOpen} />
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
