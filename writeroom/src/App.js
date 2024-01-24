import RecTopic from "./components/RecTopic/RecTopic";
import RecTopicClose from "./components/RecTopicClose/RecTopicClose";
import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import Header from "./components/Header/Header.jsx";
import NewNoteButton from "./components/FloatingButton/NewNoteButton.jsx";
import NewRoomButton from "./components/FloatingButton/NewRoomButton.jsx";

function App() {
  const [isSNBOpen, setIsSNBOpen] = useState(false);

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />

      {isSNBOpen ? (
        <RecTopic onToggle={toggleSNB}></RecTopic>
      ) : (
        <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>
      )}

      <SearchBox />

      <NewRoomButton />
      <NewNoteButton />
    </div>
  );
}

export default App;
