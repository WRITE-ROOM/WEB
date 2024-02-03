import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Redirect from "./pages/KakaoRedirect";
import Main from "./pages/Main";
import RoomPage from "./pages/RoomPage.js";
import Header from "./components/Header/Header.jsx";

import Write from "./pages/Write.jsx";
import Note from "./pages/Note.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/room" element={<RoomPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/note" element={<Note />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Redirect />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
