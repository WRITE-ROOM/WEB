import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import RecTopic from "./components/RecTopic/RecTopic";
import RecTopicClose from "./components/RecTopicClose/RecTopicClose";
import SearchBox from "./components/SearchBox/SearchBox";

import RoomPage from "./pages/RoomPage.js";
import Write from "./pages/Write.jsx";
import Note from "./pages/Note.jsx";

function App() {
  const [isSNBOpen, setIsSNBOpen] = useState(false);

  const toggleSNB = () => {
    setIsSNBOpen((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/room" element={<RoomPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/note" element={<Note />} />
        </Routes>

        {isSNBOpen ? (
          <RecTopic onToggle={toggleSNB}></RecTopic>
        ) : (
          <RecTopicClose onToggle={toggleSNB}> </RecTopicClose>
        )}

        <SearchBox />
      </BrowserRouter>
    </>
  );
}

export default App;
