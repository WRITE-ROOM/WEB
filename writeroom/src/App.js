import { Route, Routes } from "react-router-dom";
import RoomPage from "./pages/RoomPage.js";
function App() {
  return (

    <Routes>
      <Route path="/room" element={<RoomPage />}></Route>
    </Routes>

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
